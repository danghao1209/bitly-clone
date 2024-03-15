import * as React from "react";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import LoginGoogleBtn from "./LoginGoogleBtn";
import { signIn } from "next-auth/react";
import FormSign from "./FormSign";

export default function SignPage({
  children,
  title,
  linkRedirect,
  nameLink,
  imageURL,
  description,
  titleBackground,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  linkRedirect: string;
  nameLink: string;
  imageURL: string;
  description: string;
  titleBackground: string;
}>) {
  const handleGoogleSignIn = () => {
    signIn("google");
  };
  return (
    <div className="grid grid-cols-5 ">
      <div className="col-span-3">
        <div className="max-w-[40rem] mx-auto ">
          <div className="p-[2.5rem] flex flex-col gap-[1.5rem]">
            <div className="flex flex-col gap-[1.5rem]">
              <h1 className="text-[#273144] text-[2rem] leading-[2.5rem] m-0 font-extrabold">
                {title}
              </h1>
              <p className="text-[#273144] text-[1rem] leading-[1.25rem] m-0 font-normal">
                {"Already have an account? "}
                <Link href={linkRedirect} className="underline">
                  {nameLink}
                </Link>
              </p>
            </div>
            <LoginGoogleBtn onClickBtn={handleGoogleSignIn}></LoginGoogleBtn>
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
                description={description}
                onClickBtn={(data) => {
                  console.log(data);
                }}
              >
                {children}
              </FormSign>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-[#edf2ff] flex flex-col items-center justify-center pt-[11rem] pb-[4rem] px-[2.5rem]">
        <Image
          src={imageURL}
          alt="analytics image"
          height={600}
          width={1000}
          className=""
        />
        <h4 className="text-[2rem] text-center leading-[2.5rem] font-extrabold mt-[2.5rem]">
          {titleBackground}
        </h4>
      </div>
    </div>
  );
}
