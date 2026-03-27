import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_SECRET!;
const REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_SECRET!;

interface signInData {
    customerId: number;
}

export const signAccessToken = (payload: signInData) => {
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
};

export const signRefreshToken = (payload: signInData) => {
    return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};