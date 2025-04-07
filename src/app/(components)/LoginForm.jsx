// components/LoginForm.jsx
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Label } from "../../components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"

export default function LoginForm() {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-center">Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
                <Button className="w-full bg-green-600">Login</Button>
                <p className="text-sm text-center text-muted-foreground">
                    Don't have an account? <a href="/register" className="underline">Sign up</a>
                </p>
            </CardFooter>
        </Card>
    )
}
