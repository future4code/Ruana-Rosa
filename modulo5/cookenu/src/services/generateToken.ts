import * as jwt from "jsonwebtoken";

export function generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
        {
            id: input.id,
        },
        process.env.JWT_KEY as string,
    )
    return token;
}

type AuthenticationData = {
    id: string;
} 