"use client";
import CustomDynamicDoubleInput from "@/src/components/Form/CustomDynamicDoubleInput";
import CustomDynamicInput from "@/src/components/Form/CustomDynamicInput";
import CustomFileUpload from "@/src/components/Form/CustomFileUpload";
import CustomForm from "@/src/components/Form/CustomForm";
import CustomReactQuill from "@/src/components/Form/CustomReactQuill";
import CustomSelect from "@/src/components/Form/CustomSelect";
import CustomSelectWithWatch from "@/src/components/Form/CustomSelectWithWatch";
import CustomToggle from "@/src/components/Form/CustomToggle";
import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const createPostPage = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [multiSelectWatch, setMultiSelectWatch] = useState(null);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  console.log(multiSelectWatch);

  return (
    <>
      <div className="text-3xl text-center my-5">createPostPage</div>

      <div>
        <CustomForm onSubmit={onSubmit}>
          <CustomDynamicInput name="questions" label="Questions" type="text" />

          <CustomFileUpload
            name="images"
            label="Images"
            changeOnValue={setImageFiles}
          />

          <CustomSelect
            name="category"
            label="category"
            placeholder="Select Category"
            options={[
              { label: "tansim", value: "tansim" },
              { label: "tashdid", value: "tashdid" },
            ]}
          />
          <CustomSelectWithWatch
            changeOnValue={setMultiSelectWatch}
            name="friends"
            label="Friends"
            mode="multiple"
            placeholder="Select Friends"
            options={[
              { label: "tansim", value: "tansim" },
              { label: "tashdid", value: "tashdid" },
              { label: "sojib", value: "sojib" },
              { label: "joy", value: "joy" },
            ]}
          />
          <CustomSelect
            name="friends"
            label="Friends"
            mode="multiple"
            placeholder="Select Friends"
            options={[
              { label: "tansim", value: "tansim" },
              { label: "tashdid", value: "tashdid" },
              { label: "sojib", value: "sojib" },
              { label: "joy", value: "joy" },
            ]}
          />

          <CustomReactQuill name="details" label="Details" />

          <CustomToggle label="Delete" name="isDelete" />

          <CustomDynamicDoubleInput
            name="faqs"
            label="Faqs"
            type="text"
            option={["question", "answer"]}
          />

          <Button type="submit">Submit</Button>
        </CustomForm>
      </div>
    </>
  );
};

export default createPostPage;
