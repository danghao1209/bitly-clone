"use client";
import FormSign from "@/components/pages/FormSign";
import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
export default function SignUp() {
  const handleGoogleSignIn = () => {
    signIn("google");
  };
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-3">
        <div className="max-w-[40rem] mx-auto ">
          <div className="p-[2.5rem] flex flex-col gap-[1.5rem]">
            <div className="flex flex-col gap-[0.5rem]">
              <h1 className="text-[#273144] text-[2rem] leading-[2.5rem] m-0 font-bold">
                Log in and start sharing
              </h1>
              <p className="text-[#273144] text-[1rem] leading-[1.25rem] m-0 font-normal">
                {"Don't have an account? "}
                <Link
                  href={"/a/sign_up"}
                  className="underline underline-offset-1	text-[#2a5bd7]"
                >
                  Sign up
                </Link>
              </p>
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <Button className="text-center py-[0.625rem] px-[1rem] border-[0.0625rem] mt-[0.5rem] bg-[#ffffff]">
                <Image
                  src="/svgexport-1.svg"
                  alt="iconGoogle"
                  width={20}
                  height={20}
                />
                Continue with Google
              </Button>
            </div>
            <div className="grid grid-cols-5 text-[1rem] leading-[1.25rem]">
              <div className="col-span-2 h-[.0625rem] w-full bg-[#dbe0eb] mx-0 my-auto"></div>
              <div className="col-span-1 uppercase gap-[1rem] mx-auto my-auto">
                or
              </div>
              <div className="col-span-2 h-[.0625rem] w-full bg-[#dbe0eb] mx-0 my-auto"></div>
            </div>
            <div className="">
              <FormSign
                tileBtn="Log In"
                onClickBtn={(data) => {
                  console.log(data);
                }}
              >
                <Link
                  href={"/a/forgot_password"}
                  className="underline text-[#022d94]"
                >
                  Forgot your password?
                </Link>
              </FormSign>
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
