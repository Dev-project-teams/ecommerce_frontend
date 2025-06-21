import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignUpForm({ className = "", ...props }) {
    return (
        <form className={`flex w-100 flex-col gap-6 ${className}`} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create an account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your details below to create your account
                </p>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="grid col-span-6  gap-3">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" type="text" placeholder="John" required />
                </div>
                <div className="grid col-span-6  gap-3">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" type="text" placeholder="Doe" required />
                </div>
                <div className="grid col-span-6  gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="grid col-span-6  gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                </div>
                <div className="grid col-span-6  gap-3">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" required />
                </div>
            </div>

            <Button type="submit" className="w-full">
                Sign Up
            </Button>

            <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/auth/login" className="underline underline-offset-4">
                    Login
                </Link>
            </div>
        </form>
    )
}
