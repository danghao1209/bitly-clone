import Link from "next/link";
import {
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

export default function HeaderHome() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Navbar
      onMenuOpenChange={() => {}}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "hover:data-[active=true]:after:bg-primary",
        ],
        content: "pt-[20px] pb-[8px] px-[8px]",
      }}
      maxWidth="xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={true ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="#">
            <Image width={100} alt="Logo" src="bitly_logo.svg" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8 mr-40px" justify="center">
        <NavbarItem className="group" isActive>
          <Link
            className="group-hover:text-blue-700 font-light"
            color="foreground"
            href="#"
          >
            Products
          </Link>
        </NavbarItem>
        <NavbarItem className="group" isActive>
          <Link
            className="group-hover:text-blue-700 font-light"
            color="foreground"
            href="#"
          >
            Solutions
          </Link>
        </NavbarItem>
        <NavbarItem className="group" isActive>
          <Link
            className="group-hover:text-blue-700 font-light"
            color="foreground"
            href="#"
          >
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem className="group" isActive>
          <Link
            className="group-hover:text-blue-700 font-light"
            color="foreground"
            href="#"
          >
            Resources
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="lg:flex gap-2">
        <NavbarItem className="hidden lg:flex">
          <Link href="/a/sign_in">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/a/sign_up" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/a/sign_up">
            Get a Quote
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item: any, index: any) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
