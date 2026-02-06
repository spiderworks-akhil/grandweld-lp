"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import CtaButton from "../../public/images/button.webp";
import { RedLineIcon } from "./svgicons";
import { post } from "@/Datas/Config/Config";
import { useRouter } from "next/router";

const Form = ({ type, button_label }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const router = useRouter();

  const [utmSource, setUtmSource] = useState("");
  const [utmCamp, setUtmCamp] = useState("");
  const [utmMedium, setUtmMedium] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submissionSuccess, setSubmissionSuccess]=useState(false)

  const pageUrl =
    typeof window !== "undefined" ? window.location.origin + router.asPath : "";

  
    
  const onSubmit = async (data) => {
    setIsLoading(true);

    if (!window.grecaptcha) {
      console.log("reCAPTCHA not loaded");
      setIsLoading(false);
      return;
    }

    const token = await new Promise((resolve) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
            action: "submit",
          })
          .then(resolve);
      });
    });

    const formData = {
      first_name: data?.first_name,
      last_name: data?.last_name,
      phone_number: data?.phone_number,
      email: data?.email,
      message: data?.message,
      source_url: pageUrl,
      utm_source: utmSource,
      utm_campaign: utmCamp,
      utm_medium: utmMedium,
      lead_type: type || "contact",
      recaptcha_token: token,
    };

    try {
      const response = await post(`leads`, formData);
      // console.log(response);
      if (response?.status === 201 || response?.status === 200) {
        console.log("Form submission success");
      }
      router.push("/thank-you-for-choosing-mtspeed");
      reset();
      setSubmissionSuccess(true)
    } catch (error) {
      console.log("Form submission failed", error);
      setSubmitError("Form submission failed. Please try again.");
      reset();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const source = searchParams.get("utm_source");
    const campaign = searchParams.get("utm_campaign");
    const medium = searchParams.get("utm_medium");

    setUtmSource(source);
    setUtmCamp(campaign);
    setUtmMedium(medium);
  }, []);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form-block bg-[#fff] border border-[#000] rounded-[20px] py-[15px] px-[30px]"
    >
      <div className="w-full">
        <h2 className="text-[24px] text-[#000] font-[800] uppercase text-center">
          Get in touch
        </h2>
      </div>

      {submitError && (
          <div className='mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded'>
            {submitError}
          </div>
        )}

        {submissionSuccess == true && (
          <div className='mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded'>
            &quot;Form has been submitted&quot;
          </div>
        )}

      <div className="input-item-block flex flex-col gap-[5px] mt-[20px]">
        <label htmlFor="" className="text-[#000000] text-[12px] font-[400]">
          First Name <span className="text-red">*</span>
        </label>
        <input
          {...register("first_name", { required: "First name is required" })}
          className="border border-[#1F0303] rounded-[20px] text-[16px] font-[400] text-[#000] py-[10px] px-[20px]"
          type="text"
          placeholder="Enter your first name"
        />
        {errors.first_name && (
          <p className="text-red-700 text-[12px]">
            {errors.first_name.message}
          </p>
        )}
      </div>

      <div className="input-item-block flex flex-col gap-[5px] mt-[20px]">
        <label htmlFor="" className="text-[#000000] text-[12px] font-[400]">
          Last Name <span className="text-red">*</span>
        </label>
        <input
          {...register("last_name", { required: "Last name is required" })}
          className="border border-[#1F0303] rounded-[20px] text-[16px] font-[400] text-[#000] py-[10px] px-[20px]"
          type="text"
          placeholder="Enter your last name"
        />
        {errors.last_name && (
          <p className="text-red-700 text-[12px]">{errors.last_name.message}</p>
        )}
      </div>

      <div className="input-item-block flex flex-col gap-[5px] mt-[20px]">
        <label htmlFor="" className="text-[#000000] text-[12px] font-[400]">
          Email <span className="text-red">*</span>
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
          className="border border-[#1F0303] rounded-[20px] text-[16px] font-[400] text-[#000] py-[10px] px-[20px]"
          type="text"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-700 text-[12px]">{errors.email.message}</p>
        )}
      </div>

      <div className="input-item-block flex flex-col gap-[5px] mt-[20px]">
        <label htmlFor="" className="text-[#000000] text-[12px] font-[400]">
          Mobile Number <span className="text-red">*</span>
        </label>
        <input
          {...register("phone_number", {
            required: "Mobile number is required",
            pattern: {
              value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              message: "Please enter a valid mobile number",
            },
          })}
          className="border border-[#1F0303] rounded-[20px] text-[16px] font-[400] text-[#000] py-[10px] px-[20px]"
          type="text"
          placeholder="Enter your phone number"
        />
        {errors.phone_number && (
          <p className="text-red-700 text-[12px]">
            {errors.phone_number.message}
          </p>
        )}
      </div>

      <div className="input-item-block flex items-start gap-[3px] mt-[20px]">
        <input
          type="checkbox"
          id="privacy"
          {...register("privacy", { required: "You must agree to continue" })}
        ></input>
        <p className="mt-[-5px]">
          {" "}
          I understand that Max Truckers LLC is committed to respecting my
          privacy and will not send spam. For more information, please review
          our{" "}
        </p>

        {errors.privacy && (
          <p className="text-red-700 text-[12px]">{errors.privacy.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="submit-btn bg-[#A8322D] text-[#fff] text-[18px] font-[800] rounded-[28px] py-[10px] px-[35px] uppercase text-center mt-[20px] w-fit m-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? "Submitting..." : button_label || "Submit"}
      </button>
    </form>
  );
};

export default Form;