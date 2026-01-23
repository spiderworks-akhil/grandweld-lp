"use client";

import { ButtonRound } from "./Button";
import { BtnLinkArrow } from "./svgIcons";

export default function ContactForm({}) {
  return (
    <form className="form bg-[#ffffff6e] py-[25px] px-[15px] rounded-[15px]">
      <div className="w-full ">
        <h2 className="text-[#000] font-segoe-ui lg:text-[40px] text-[30px] font-[400] lg:leading-[45px] leading-[35px] tracking-[-0.64px] mt-[15px] mb-[20px]">
          World-Class <strong> Ship Repair</strong> Services in
          Dubai
        </h2>
        <div className="input-block mb-[20px]">
          <input
            type="text"
            name="Company Name"
            placeholder="Company Name"
            className="input-item w-full border py-[12px] px-[20px] bg-[#fff] rounded-[40px] outline-0 border-[#001D21] text-[#4F767C] text-[18px] placeholder:text-[#000]"
          />
        </div>

        <div className="input-block mb-[20px]">
          <input
            type="email"
            name="email"
            placeholder={"Your Email"}
            className="input-item w-full border py-[12px] px-[20px] bg-[#fff] rounded-[40px] outline-0 border-[#001D21] text-[#4F767C] text-[18px] placeholder:text-[#000]"
          />
        </div>
        <div className="input-block mb-[20px]">
          <input
            type="phone"
            name="phone"
            placeholder={"Phone Number"}
            className="input-item w-full border py-[12px] px-[20px] bg-[#fff] rounded-[40px] outline-0 border-[#001D21] text-[#4F767C] text-[18px] placeholder:text-[#000]"
          />
        </div>

<div className="input-block mb-[20px]">
  <textarea
    name="message"
    rows={4}
    placeholder="Enter your message"
    className="
      input-item 
      w-full 
      border 
      py-[12px] 
      px-[20px] 
      bg-[#fff] 
      rounded-[20px] 
      outline-none 
      border-[#001D21] 
      text-[#4F767C] 
      text-[18px] 
      placeholder:text-[#4F767C]
      resize-none
    "
  />
</div>

      </div>
      <ButtonRound
        text="Get a Quote"
        className="bg-[#000] hover:bg-[#fff] text-[#fff] hover:text-[#000] text-[14px] capitalize flex items-center justify-between max-w-[250px] w-full mt-6 border border-[#EEE] "
        arrow={
          <span className="text-white w-[18px] h-[18px] rounded-[50%] bg-[#fff] flex items-center justify-center">
            <BtnLinkArrow />
          </span>
        }
      />
    </form>
  );
}
