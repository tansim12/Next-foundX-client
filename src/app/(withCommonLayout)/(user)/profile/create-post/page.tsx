"use client";
import CustomDynamicDoubleInput from "@/src/components/Form/CustomDynamicDoubleInput";
import CustomFileUpload from "@/src/components/Form/CustomFileUpload";
import CustomForm from "@/src/components/Form/CustomForm";
import CustomInput from "@/src/components/Form/CustomInput";
import CustomReactQuill from "@/src/components/Form/CustomReactQuill";
import CustomSelect from "@/src/components/Form/CustomSelect";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { allDistict } from "@bangladeshi/bangladesh-address";
import { useGetAllCategories } from "@/src/hooks/categories.hook";
import CustomDynamicInput from "@/src/components/Form/CustomDynamicInput";
import CustomDatePicker from "@/src/components/Form/CustomDatePicker";
import { dateToISO } from "@/src/utils/dateToISO";
import { useUser } from "@/src/context/user.provider";
import { useCreatePost } from "@/src/hooks/post.hook";
import { useRouter } from "next/navigation";
import Loading from "@/src/components/ui/Loading";
const createPostPage = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const { user } = useUser();
  const navigate = useRouter();
  const {
    mutate: handleCreatePost,
    isPending: createPostPending,
    isSuccess: createPostSuccess,
  } = useCreatePost();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const payload = {
      ...data,
      dateFound: dateToISO(data?.dateFound),
      user: user?._id,
    };
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(payload));
      for (let image of imageFiles) {
        formData.append("itemImages", image);
      }

      handleCreatePost(formData as any);
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  if (!createPostPending && createPostSuccess) {
    navigate.push("/");
  }

  const allDistricts = allDistict();
  const cityOptions = allDistricts?.sort().map((item: string) => ({
    value: item,
    label: item,
  }));

  const { data: categoryData } = useGetAllCategories();

  const categoryOptions = categoryData?.data?.sort().map((item: any) => ({
    value: item?._id,
    label: item?.name,
  }));

  return (
    <>
      {!createPostPending ? (
        <div>
          <div className="text-3xl text-center my-5">createPostPage</div>

          <div>
            <CustomForm onSubmit={onSubmit}>
              <CustomInput name="title" label="Title" type="text" />
              <CustomInput name="location" label="Location" type="text" />

              <CustomSelect
                name="city"
                label="City"
                placeholder="Select City"
                options={cityOptions}
              />

              <CustomDatePicker label="Found Date" name="dateFound" />

              <CustomSelect
                name="category"
                label="Category"
                placeholder="Select Category"
                options={categoryOptions}
              />

              <CustomReactQuill name="description" label="Description" />

              <CustomDynamicInput
                name="questions"
                label="Questions"
                type="text"
              />

              <CustomFileUpload
                name="images"
                label="Images"
                changeOnValue={setImageFiles}
              />

              <Button type="submit">Submit</Button>
            </CustomForm>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default createPostPage;
