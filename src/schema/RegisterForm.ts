import { z } from "zod";

export const registerSchema = z.object({
    firstname : z.string().min(1, { message: "First name is required" }),
    lastname : z.string().min(1, { message: "Last name is required" }),
    email : z.string().email({ message: "Invalid email address" }),
    role_id : z.string().min(1, { message: "Role is required" }),
    password : z.string().min(8, { message: "Password must be at least 8 characters long" }),
    password_confirmation : z.string().min(8, { message: "Confirm password is required" }),
});