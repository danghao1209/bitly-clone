import Image from "next/image";

export default function FooterForm() {
  return (
    <div className="text-[20px] leading-[22px] flex flex-col justify-center items-center mt-[10px]">
      <p>
        <strong>No credit card required. Your free plan includes:</strong>
      </p>
      <ul className="flex mt-[10px] list-none">
        <li className="flex justify-center items-center px-[10px]">
          <Image src="svgexport-10.svg" alt="" width={24} height={24} />
          Short links
        </li>
        <li className="flex justify-center items-center px-[10px]">
          <Image src="svgexport-10.svg" alt="" width={24} height={24} />
          QR Codes
        </li>
      </ul>
    </div>
  );
}
