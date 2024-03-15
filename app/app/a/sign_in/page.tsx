"use client";
import SignPage from "@/components/pages/SignPage";
import { signIn } from "next-auth/react";
import Link from "next/link";
export default function SignUp() {
  return (
    <SignPage
      title="Log in and start sharing"
      linkRedirect="/a/sign_up"
      nameLink="Sign up"
      imageURL="/analytics-illustration.png"
      titleBackground="Analyze your links and QR Codes as easily as creating them."
      description="By logging in with an account, you agree to Bitly's "
    >
      <Link href={"/a/forgot_password"} className="underline text-[#022d94]">
        Forgot your password?
      </Link>
    </SignPage>
  );
}
