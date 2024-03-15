import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import { Button, Input } from "antd";
import FooterForm from "./FooterForm";

const schema = yup
  .object({
    longURL: yup
      .string()
      .url('We\'ll need a valid URL, like "super-long-link.com/shorten-it"')
      .required("We'll need a valid URL."),
  })
  .required();

type FormFields = yup.InferType<typeof schema>;
export default function FormQR() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);

  return (
    <div className="border-[2px] rounded-[16px] border-[#e8e9eb] py-[30px] px-[40px] bg-[#fff]">
      <div className="pb-[20px]">
        <p className="text-[30px] text-[#2a2e30] font-extrabold leading-[32px]">
          Create a QR Code
        </p>
      </div>

      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-[15px] mb-[20px] flex items-center gap-[1rem]">
          <div className="w-[50%] mb-[20px]">
            <label className="text-[18px] font-semibold">
              Enter your QR Code destination
            </label>
            <Input
              {...register("longURL")}
              className="mt-[8px]"
              placeholder="Example: http://super-long-link.com"
              variant="outlined"
              size="large"
            />
            {errors.longURL && (
              <div className="text-red-500">{errors.longURL.message}</div>
            )}
          </div>
          <div className="w-[50%]">
            <Image
              alt="free-hook_qrc.png"
              src={"/free-hook_qrc.png"}
              width={500}
              height={300}
            />
          </div>
        </div>
        <div className="w-full flex justify-start mb-[20px]">
          <Button className="" type="primary" color="primary" size="large">
            Sign up and get your QR Code
          </Button>
        </div>
      </form>

      <FooterForm />
    </div>
  );
}
