import * as React from "react";
import { Button, Input } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email address or username")
      .required("We'll need a valid URL."),
    password: yup
      .string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
  })
  .required();

type FormFields = yup.InferType<typeof schema>;

export default function FormSign({
  children,
  tileBtn,
  description,
  onClickBtn,
}: Readonly<{
  children: React.ReactNode | null;
  tileBtn: string;
  description: string;
  onClickBtn: (data: FormFields) => void;
}>) {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => onClickBtn(data);

  return (
    <div>
      <form
        className="flex flex-col gap-2 text-[#273144]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-[20px]">
          <label className="text-[1rem] font-semibold leading-[1.25rem]">
            Email
          </label>
          <Input
            {...register("email")}
            size="lg"
            variant="bordered"
            className="mb-[0.5rem] text-[1rem] font-medium leading-[1.25rem] border-[#DBE0EC]"
          />
          {errors.email && (
            <div className="text-red-500 text-[.875rem]">
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="flex mb-[20px]">
          <div className="w-full">
            <label className="text-[1rem] font-semibold leading-[1.25rem]">
              Password
            </label>
            <Input
              {...register("password")}
              size="lg"
              variant="bordered"
              type="password"
            />
            {errors.password && (
              <div className="text-red-500 text-[.875rem]">
                {errors.password.message}
              </div>
            )}
          </div>
        </div>
        <div>{children ? children : null}</div>
        <div className="w-full flex justify-center">
          <Button
            className="w-[60%] my-[2rem]"
            type="submit"
            color="primary"
            size="lg"
          >
            {tileBtn}
          </Button>
        </div>

        <div className="text-[.875rem] text-[#3a4863] text-center">
          <span>{description}</span>
          <Link href="#" className="underline">
            Terms of Service
          </Link>
          <span>,</span>
          <Link href="#" className="underline">
            Privacy Policy
          </Link>
          <span>{" and "}</span>
          <Link href="#" className="underline">
            Acceptable Use Policy
          </Link>
          <span>.</span>
        </div>
      </form>
    </div>
  );
}
