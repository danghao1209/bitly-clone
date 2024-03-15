import * as React from "react";
import { Button, Input } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    longURL: yup
      .string()
      .url('We\'ll need a valid URL, like "super-long-link.com/shorten-it"')
      .required("We'll need a valid URL."),
    backHalf: yup
      .string()
      .trim()
      .notRequired()
      .matches(/^\S*$/, "String must not contain any whitespace"),
  })
  .required();

type FormFields = yup.InferType<typeof schema>;
export default function FormLink() {
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
    <div>
      <div className="pb-[20px]">
        <p className="text-[30px] text-[#2a2e30] font-extrabold leading-[32px]">
          Shorten a long link
        </p>
      </div>

      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-[15px] mb-[20px]">
          <label className="text-[18px] font-semibold">Paste a long URL</label>
          <Input
            {...register("longURL")}
            size="lg"
            variant="bordered"
            className="mt-[8px]"
          />
          {errors.longURL && (
            <div className="text-red-500">{errors.longURL.message}</div>
          )}
        </div>
        <div className="flex mx-[15px] mb-[20px]">
          <div className="w-[45%]">
            <label className="text-[18px] font-semibold">Domain</label>
            <Input
              value={"bit.ly"}
              isDisabled={true}
              size="lg"
              variant="bordered"
            />
          </div>
          <div className="w-[5%] flex justify-center items-center">
            <p className="text-[28px]">/</p>
          </div>
          <div className="w-[45%]">
            <label className="text-[18px] font-semibold">
              Enter a back-half (optional)
            </label>
            <Input {...register("backHalf")} size="lg" variant="bordered" />
            {errors.backHalf && (
              <div className="text-red-500">{errors.backHalf.message}</div>
            )}
          </div>
        </div>
        <div></div>
        <div className="w-full flex justify-center">
          <Button className="" type="submit" color="primary" size="lg">
            Sign up and get your link
          </Button>
        </div>
      </form>
    </div>
  );
}
