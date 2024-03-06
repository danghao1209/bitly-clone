import { Button, Image, Link } from "@nextui-org/react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <div className="w-full relative">
        <Image
          src="11.15_hero_desktop@2x.png"
          width={1500}
          height={1000}
          alt="Background"
          className="z-[-1] absolute"
          sizes="xl"
        />
        <div className="max-w-[1200px] mt-[150px] mx-auto">
          <div className="flex items-center justify-start">
            <div className="w-[calc(58.33333% - 1.875rem)] px-[15px] mx-[15px]">
              <h1 className="text-[62px] font-extrabold	text-wrap	">
                Build stronger digital
                <span className="text-[#ff6116]"> connections</span>
              </h1>

              <h2 className="text-[20px] leading-[24px] max-w-[500px] mb-[18px] mt-[14px] font-normal	">
                Use our URL shortener, QR Codes, and Link-in-bio pages to engage
                your audience and connect them to the right information. Build,
                edit, and track <em>everything</em> inside the Bitly Connections
                Platform.
              </h2>
              <div className="inline-block text-center">
                <Button
                  as={Link}
                  color="primary"
                  href="#"
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
    </main>
  );
}
