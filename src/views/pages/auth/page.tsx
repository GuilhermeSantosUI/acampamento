import { useState } from "react";
import { Button } from "@/views/components/ui/button";
import { Card, CardContent } from "@/views/components/ui/card";
import { Input } from "@/views/components/ui/input";
import { Label } from "@/views/components/ui/label";
import {authService} from "../../../app/services/auth";
import {useNavigate} from "react-router-dom";

export function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await authService.auth({ login, password });

            localStorage.setItem("ACCESS_TOKEN", response.token);
            localStorage.setItem("USER_ID", response.userId.toString());
            localStorage.setItem("EXPIRES", response.expires);

        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setLoading(false);
            navigate("/dashboard");
        }
    };

    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                <div className="flex flex-col gap-6">
                    <Card className="overflow-hidden">
                        <CardContent className="grid p-0 md:grid-cols-2">
                            <form className="p-6 md:p-8" onSubmit={handleLogin}>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="text-2xl font-bold">Welcome back</h1>
                                        <p className="text-balance text-muted-foreground">
                                            Login to your Acme Inc account
                                        </p>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="text"
                                            placeholder="m@example.com"
                                            value={login}
                                            onChange={(e) => setLogin(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Password</Label>
                                            <a
                                                href="#"
                                                className="ml-auto text-sm underline-offset-2 hover:underline"
                                            >
                                                Forgot your password?
                                            </a>
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full" disabled={loading}>
                                        {loading ? "Logging in..." : "Login"}
                                    </Button>
                                </div>
                            </form>
                            <div className="relative hidden bg-muted md:block">
                                <img
                                    src="https://ui.shadcn.com/placeholder.svg"
                                    alt="Image"
                                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
