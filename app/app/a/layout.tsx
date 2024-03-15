"use client";
import TabsHook from "@/components/pages/TabsHook";
import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
export default function LayoutSign({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleGoogleSignIn = () => {
    signIn("google");
  };
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Head>
        <title>
          URL Shortener - Short URLs & Custom Free Link Shortener | Sign In
        </title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <header className="px-[6.25rem] pt-[2.125rem] ">
        <Link href={"/"}>
          <Image
            src="/bitly_logo.svg"
            alt="logo"
            width={100}
            height={80}
            className="max-w-[6rem] h-auto"
          />
        </Link>
      </header>
      {children}
    </main>
  );
}
