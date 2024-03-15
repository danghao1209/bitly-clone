import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function FormLink({
  onClickBtn,
}: Readonly<{
  onClickBtn: () => void;
}>) {
  return (
    <div className="flex flex-col gap-[0.5rem]">
      <Button
        className="text-center py-[0.625rem] px-[1rem] border-[0.0625rem] mt-[0.5rem] bg-[#ffffff]"
        onClick={onClickBtn}
      >
        <Image src="/svgexport-1.svg" alt="iconGoogle" width={20} height={20} />
        Continue with Google
      </Button>
    </div>
  );
}
