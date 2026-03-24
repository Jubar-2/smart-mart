import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { SignUpSchema } from "@/lib/validations/auth";
import Validation from "@/lib/Validation";
import { ApiResponse } from "@/lib/apiResponse";

export async function POST(request: Request) {
  try {

    // Attempt to parse
    const body = await request.json().catch(() => null);

    if (!body) {
      return ApiResponse.error("Request body is empty or invalid JSON", 400);
    }

    // 1. Validate Input using Zod
    const validation = SignUpSchema.safeParse(body);

    if (!validation.success) {
      const errors = validation.error.flatten().fieldErrors;;
      return ApiResponse.error("Validation failed", 400, errors);
    }
    const { fullName, email, password, phoneNumber } = validation.data;

    const validationObject = new Validation();

    // Check if email already exists
    await validationObject.emailConflict(email, "This email already exists");

    // Check if phone number already exists
    await validationObject.phoneNumberConflict(phoneNumber, "This phone number already exists");


    // Hash the password (Professional Salt Rounds: 12)
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create the User in Database
    const customer = await prisma.customer.create({
      data: {
        fullName,
        phoneNumber,
        email: email.toLowerCase(),
        password: hashedPassword
      },
      // Select only the fields we want to return (exclude password)
      select: {
        customerId: true,
        fullName: true,
        email: true,
        createdAt: true,
      }
    });

    ApiResponse.success(customer, "User created successfully", 201);

  } catch (error) {
    console.error("SIGNUP_ERROR:", error);
    return ApiResponse.fatal("Internal Server Error");
  }
}