"use client";

import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useRef, useState } from "react";
import { ButtonRound } from "./Button";
import { BtnLinkArrow } from "./svgIcons";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const recaptchaRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // Manually register phone field
  register("phone", {
    required: "Phone number is required",
    minLength: {
      value: 8,
      message: "Enter a valid phone number",
    },
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    setLoading(true);

    try {
      await axios.post("https://console.omnisellcrm.com/api/leads", {
        orgid: "G-NSK4B",
        branchid: "ffe9a450-7343-4a64-827f-b7686da5655f",
        name: data.company,
        company: data.company,
        email: data.email,
        phone_number: `+${data.phone}`,
        note: data.message,
        extra_data: {
          source: "Website Contact Form",
        },
      });

      alert("Submitted successfully");
      reset();
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    } finally {
      setLoading(false);
      // if (recaptchaRef.current) {
      //   recaptchaRef.current.reset();
      // }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#ffffff6e] py-[14px] px-[10px] rounded-[15px]"
    >
      <div className="w-full">
        <h2 className="text-[#000] font-segoe-ui lg:text-[40px] text-[30px] mt-[12px] mb-[16px]">
          World-Class <strong> Ship Repair</strong> Services in UAE
        </h2>

        {/* Company */}
        <div className="input-block mb-[14px]">
          <input
            {...register("company", {
              required: "Company name is required",
            })}
            placeholder="Company Name"
            className="w-full border py-[10px] px-[20px] bg-[#fff] rounded-[40px]"
          />
          {errors.company && (
            <p className="text-red-500 text-[12px] mt-1">
              {errors.company.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="input-block mb-[14px]">
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            placeholder="Your Email"
            className="w-full border py-[10px] px-[20px] bg-[#fff] rounded-[40px]"
          />
          {errors.email && (
            <p className="text-red-500 text-[12px] mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="input-block mb-[14px]">
          <PhoneInput
            country="ae"
            enableSearch
            containerClass="custom-phone-input"
            inputClass="custom-phone-input"
            onChange={(value) =>
              setValue("phone", value, {
                shouldValidate: true,
              })
            }
          />
          {errors.phone && (
            <p className="text-red-500 text-[12px] mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="input-block mb-[14px]">
        <textarea
  {...register("message")}
  rows={3}
  placeholder="Enter your message"
  className="w-full border py-[10px] px-[20px] bg-[#fff] rounded-[20px] resize-none"
/>

       
        </div>
      </div>

      {/* Invisible reCAPTCHA */}
      {/* <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey="YOUR_RECAPTCHA_SITE_KEY"
      /> */}

      <ButtonRound
        text={loading ? "Submitting..." : "Enquire Now"}
        type="submit"
        disabled={loading}
        className="bg-[#000] hover:bg-[#fff] text-[#fff] hover:text-[#000] text-[14px] capitalize flex items-center justify-between max-w-[250px] w-full mt-4 border border-[#EEE]"
        arrow={
          <span className="w-[18px] h-[18px] rounded-full bg-[#fff] flex items-center justify-center">
            <BtnLinkArrow />
          </span>
        }
      />
    </form>
  );
}
