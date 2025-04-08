// components/RegistrationForm.jsx
"use client"

import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Label } from "../../components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../@/components/ui/select"
import AuthLayout from "./AuthLayout";

import { validateForm} from "../../utils/formValidation";
import {registerSchema} from "../../schema/RegisterForm";
import {toast} from "sonner";
import {authService} from "../../services/AuthServices";
import { useRouter } from "next/navigation";
import {useEffect} from "react";

export default function RegistrationForm() {

    const router = useRouter();

    const handlesubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const {success, validData} = validateForm(data, registerSchema);

        if (success) {
            try {
                toast.loading("Creating your account...");
                await authService.register(validData);
                toast.dismiss();
                toast.success("Account created successfully!");
                await router.push("/login");
            } catch (error) {
                toast.dismiss();
                toast.error("Error creating account. Please try again.");
            }
        }
    }


    return (
        <AuthLayout>
        <Card className="w-full max-w-sm">
            <form onSubmit={handlesubmit}>
                <CardHeader>
                    <CardTitle className="text-center">Create Account</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstname">Firstname</Label>
                        <Input
                            id="firstname"
                            name="firstname"
                            type="text"
                            placeholder="Your Firstname"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="lastname">Lastname</Label>
                        <Input
                            id="lastname"
                            name="lastname"
                            type="text"
                            placeholder="Your Lastname"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password_confirmation">Confirm Password</Label>
                        <Input
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="role_id">Role</Label>
                        <Select name="role_id">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select your role"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Admin</SelectItem>
                                <SelectItem value="2">Agent</SelectItem>
                                <SelectItem value="3">Customer</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-2">
                    <Button type="submit" className="w-full bg-green-600">Register</Button>
                    <p className="text-sm text-center text-muted-foreground">
                        Already have an account? <a href="/login" className="underline">Login</a>
                    </p>
                </CardFooter>
            </form>
        </Card>
        </AuthLayout>
    )
}
