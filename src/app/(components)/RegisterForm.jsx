// components/RegistrationForm.jsx
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Label } from "../../components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../@/components/ui/select"

export default function RegistrationForm() {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-center">Create Account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="firstname">Firstname</Label>
                    <Input id="fisrname" type="text" placeholder="Your Firstname"/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastname">Lastname</Label>
                    <Input id="lastname" type="text" placeholder="Your Lastname"/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com"/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••"/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" placeholder="••••••••"/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select id="role">
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select your role" />
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
                <Button className="w-full bg-green-600">Register</Button>
                <p className="text-sm text-center text-muted-foreground">
                    Already have an account? <a href="/login" className="underline">Login</a>
                </p>
            </CardFooter>
        </Card>
    )
}
