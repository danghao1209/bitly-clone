"use client";
import TabsHook from "@/components/pages/TabsHook";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import HeaderHome from "@/components/global/HeaderHome";
import Image from "next/image";

export default function Home() {
  const { data: token, status } = useSession();

  console.log("status", status);
  console.log("session", token);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <div>
        <HeaderHome />
        <div className="w-full relative">
          <Link href={"/"}>
            <Image
              src="/11.15_hero_desktop@2x.png"
              width={1500}
              height={1000}
              alt="Background"
              className="z-[-1] absolute"
              sizes="xl"
            />
          </Link>
          <div className="max-w-[1200px] mt-[150px] mx-auto">
            <div className="flex items-center justify-start">
              <div className="w-[calc(58.33333% - 1.875rem)] px-[15px] mx-[15px]">
                <h1 className="text-[62px] font-extrabold	text-wrap	">
                  Build stronger digital
                  <br />
                  <span className="text-[#ff6116]"> connections</span>
                </h1>

                <h2 className="text-[20px] leading-[24px] max-w-[500px] mb-[18px] mt-[14px] font-normal	">
                  Use our URL shortener, QR Codes, and Link-in-bio pages to
                  engage your audience and connect them to the right
                  information. Build, edit, and track <em>everything</em> inside
                  the Bitly Connections Platform.
                </h2>
                <div className="inline-block text-center">
                  <Button
                    as={Link}
                    color="primary"
                    href="/a/sign_up"
                    variant="flat"
                    className="mt-[20px] mb-[18px] text-[20px] px-[20px] py-[30px]"
                  >
                    Get Started for Free
                  </Button>
                  <br />
                  <Link href="#" className="px-[20px]">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div>
            <article>
              <section className="w-full pb-[64px]">
                <div className="max-w-[1170px] px-[.9375rem] mx-auto mb-[0px]">
                  <div className="mx-[-.9375rem]">
                    <div className="px-[.9375rem] mx-[-.9375rem]">
                      <ul className="flex justify-center ml-[1.25rem] mb-[1rem]">
                        <li className="w-auto list-none	px-[.9375rem]">
                          <Image
                            src="/Curology.svg"
                            alt="Curology"
                            width={160}
                            height={80}
                          />
                        </li>
                        <li className="w-auto list-none	px-[.9375rem]">
                          <Image
                            src="/Novasol.svg"
                            alt="Novasol"
                            width={160}
                            height={80}
                          />
                        </li>
                        <li className="w-auto list-none	px-[.9375rem]">
                          <Image
                            src="/Rad Power Bikes.svg"
                            alt="Rad Power Bikes"
                            width={160}
                            height={80}
                          />
                        </li>
                        <li className="w-auto list-none	px-[.9375rem]">
                          <Image
                            src="/Marriott Bonvoy.svg"
                            alt="Marriott Bonvoy"
                            width={160}
                            height={80}
                          />
                        </li>
                        <li className="w-auto list-none	px-[.9375rem]">
                          <Image
                            src="/The New York Times.svg"
                            alt="The New York Times"
                            width={160}
                            height={80}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full pt-[40px] pb-[60px] bg-[#f5f6f7]">
                <div className="xl:max-w-[1170px] px-[.9375rem] mx-auto">
                  <div className="pb-[30px] px-[.9375rem]">
                    <h5 className="text-[#FF6116] text-[20px] text-center font-extrabold	leading-[22px] tracking-normal mb-[8px]">
                      Great connections start with a click
                    </h5>
                    <h3 className="text-[#252628] text-[38px] text-center font-extrabold	leading-[40px] mb-[8px]">
                      Sign up for a free account and put Bitly to work
                    </h3>
                  </div>
                  <div>
                    <TabsHook />
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
