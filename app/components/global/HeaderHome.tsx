import Link from "next/link";
import { Button, Image } from "antd";

export default function HeaderHome() {
  return (
    <div className="xl:max-w-[1170px] px-[.9375rem] mx-[auto] my-0 w-full">
      <div className="flex items-center justify-between pt-[20px] p-[0.5rem] w-full">
        <Link href="#">
          <Image width={100} alt="Logo" src="bitly_logo.svg" preview={false} />
        </Link>

        <div className="hidden sm:flex gap-8 mr-40px justify-center">
          <div className="group">
            <Link
              className="group-hover:text-blue-700 font-light"
              color="foreground"
              href="#"
            >
              Products
            </Link>
          </div>
          <div className="group">
            <Link
              className="group-hover:text-blue-700 font-light"
              color="foreground"
              href="#"
            >
              Solutions
            </Link>
          </div>
          <div className="group">
            <Link
              className="group-hover:text-blue-700 font-light"
              color="foreground"
              href="#"
            >
              Pricing
            </Link>
          </div>
          <div className="group">
            <Link
              className="group-hover:text-blue-700 font-light"
              color="foreground"
              href="#"
            >
              Resources
            </Link>
          </div>
        </div>
        <div className="lg:flex gap-2 justify-end items-center">
          <div className="hidden lg:flex">
            <Link href="/a/sign_in">Login</Link>
          </div>
          <div>
            <Button color="primary" href="/a/sign_up">
              Sign Up
            </Button>
          </div>
          <div>
            <Button color="primary" href="/a/sign_up">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
