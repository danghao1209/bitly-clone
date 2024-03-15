"use client";
import SignPage from "@/components/pages/SignPage";
import BackgroundSign from "@/components/pages/SignPage";
import TabsHook from "@/components/pages/TabsHook";
import { Button, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
export default function SignUp() {
  return (
    <SignPage
      title="Create your account"
      linkRedirect="/a/sign_in"
      nameLink="Log in"
      imageURL="/connections_platform_product.png"
      titleBackground="Power your links, QR Codes, and Link-in-bio with Bitly's Connections Platform."
      description="By creating an account, you agree to Bitly's"
    >
      <></>
    </SignPage>
  );
}
