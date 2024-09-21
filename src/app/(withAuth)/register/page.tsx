"use client";

import FXForm from "@/src/components/Form/FXForm";
import FXInput from "@/src/components/Form/FXInput";
import { useUserRegister } from "@/src/hooks/auth.hook";
import registerValidationSchema from "@/src/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";

import Link from "next/link";
import { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export default function RegisterPage() {
const {mutate:handleRegister, isPending}= useUserRegister()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const payload = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };
    handleRegister(payload as any);
  };
  return (
    <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
      <h3 className="my-2 text-xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Help Lost Items Find Their Way Home</p>
      <div className="w-[35%]">
        <FXForm
          //! Only for development
          defaultValues={{
            name: "Mir Hussain",
            email: "mir@gmail.com",
            mobileNumber: "01711223344",
            password: "123456",
          }}
          resolver={zodResolver(registerValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="py-3">
            <FXInput label="Name" name="name" size="sm" />
          </div>
          <div className="py-3">
            <FXInput label="Email" name="email" size="sm" />
          </div>
          <div className="py-3">
            <FXInput label="Mobile Number" name="mobileNumber" size="sm" />
          </div>
          <div className="py-3">
            <FXInput
              label="Password"
              name="password"
              size="sm"
              type="password"
            />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 text-default"
            size="lg"
            type="submit"
            disabled={isPending}
          >
            Registration
          </Button>
        </FXForm>
        <div className="text-center">
          Already have an account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
}
