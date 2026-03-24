import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { ApiResponse } from "./apiResponse";

export default class Validation {

    /**
     * @description Helper method to return a standardized conflict response.
     * @param errorMessage 
     * @returns 
     */
    private response(errorMessage: string): NextResponse {
        return ApiResponse.error(errorMessage, 409);
    }

    /**
     * @description Checks if an email already exists in the database and returns a conflict response if it does.
     * @param email 
     * @param errorMessage 
     */
    public async emailConflict(
        email: string, errorMessage: string): Promise<NextResponse | void> {
        const existingUser = await prisma.customer.findUnique({
            where: { email: email.toLowerCase() },
            select: { email: true }
        });

        if (existingUser) {
            this.response(errorMessage)
        }
    }

    /**
     * @description Checks if a phone number already exists in the database and returns a conflict response if it does.
     * @param phoneNumber 
     * @param errorMessage 
     */

    public async phoneNumberConflict(
        phoneNumber: string, errorMessage: string): Promise<NextResponse | void> {
        const existingUser = await prisma.customer.findUnique({
            where: { phoneNumber: phoneNumber },
            select: { phoneNumber: true }
        });

        if (existingUser) {
            this.response(errorMessage)
        }
    }


}

