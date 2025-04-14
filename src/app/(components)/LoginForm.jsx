// components/LoginForm.jsx
"use client"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Label } from "../../components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import {loginSchema} from "../../schema/LoginForm";
import { validateForm } from "../../utils/formValidation";
import AuthLayout from "./AuthLayout";
import { toast } from "sonner";
import {authService} from "../../services/AuthServices";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import { useAuthStore } from '../../store/useAuth';


export default function LoginForm() {

    const router = useRouter();
    const login = useAuthStore((state) => state.login)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const { success, validData } = validateForm(data, loginSchema);

        if(success) {
            try {
                toast.loading("Logging in...");
                const response = await authService.login(validData);
                toast.dismiss();
                toast.success("Logged in successfully!");

                login(response.user, response.token);

                router.push('/dashboard');

            } catch (error) {
                toast.dismiss();
                toast.error("Error logging in. Please try again.");
            }
        }
    }
    return (
        <AuthLayout>
        <Card className="w-full max-w-sm">
            <form onSubmit={handleSubmit}>
            <CardHeader>
                <CardTitle className="text-center">Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" placeholder="••••••••" />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 py-4">
                <Button type="submit" className="w-full bg-green-600">Login</Button>
                <p className="text-sm text-center text-muted-foreground">
                    Don't have an account? <a href="/register" className="underline">Sign up</a>
                </p>
            </CardFooter>
            </form>
        </Card>
        </AuthLayout>
    )
}
