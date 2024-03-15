"use client";
import TabsHook from "@/components/pages/TabsHook";
import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
export default function SignUp() {
  const handleGoogleSignIn = () => {
    signIn("google");
  };
  return (
    <div className="grid grid-cols-5 ">
      <div className="col-span-3">
        <div className="max-w-[40rem] mx-auto ">
          <div className="p-[2.5rem] flex flex-col">
            <div>
              <h1 className="text-[#273144] text-[2rem] leading-[2.5rem] m-0 font-extrabold">
                Log in and start sharing
              </h1>
              <p className="text-[#273144] text-[1rem] leading-[1.25rem] m-0 font-normal">
                {"Don't have an account? "}
                <Link href={"/a/sign_up"}>Sign up</Link>
              </p>
            </div>
            <div>
              <Button>Continue with Google</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-[#edf2ff] flex flex-col items-center justify-center pt-[11rem] pb-[4rem] px-[2.5rem]">
        <Image
          src="/analytics-illustration.png"
          alt="analytics image"
          height={400}
          width={800}
          className=""
        />
        <h4 className="text-[2rem] text-center leading-[2.5rem] font-extrabold mt-[2.5rem]">
          Analyze your links and QR Codes as easily as creating them
        </h4>
      </div>
    </div>
  );
}
