"use client"

import { useRouter } from "next/navigation";
import { CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useTransition } from "react";

type Props = {
    type: "login" | "signUp";
}

function AuthForm({type}: Props) {
    const isLoginForm = type === "login";

    const router = useRouter();

    const [isPending, startTransition] = useTransition();

    const handleSubmit = (formData: FormData) => {
        console.log("form submitted");
    };

    return (
    <form action={handleSubmit}>
        <CardContent>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="eamil"
                    placeholder="Enter your email"
                    type="email"
                    required
                    disabled={isPending}
                />
            </div>
        </CardContent>
    </form>
  )
}

export default AuthForm;