"use client";

import Image from "next/image";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff] text-center px-6">
      {/* Ship Icon */}
      <div className="mb-8">
        <Image
          src="/img/Group.png"
          alt="Grandweld Ship"
          width={120}
          height={120}
        />
      </div>

      {/* Title */}
      <h1 className="text-[40px] font-bold md:text-[44px] font-semibold text-[#1E2B32] leading-[1.2] mb-6">
        Thanks for reaching out to <br />
        Grandweld Shipyard!
      </h1>

      {/* Description */}
      <p className="max-w-[560px] font-segoe-ui text-[#6B7280] text-[16px] leading-[28px] mb-10">
        Our team will connect with you shortly. In the meantime, explore our{" "}
        <Link href="/" className="text-[#2C7BE5] hover:underline">
          latest shipbuilding projects
        </Link>{""}
        and see how we’re shaping the future of maritime excellence.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="inline-flex items-center font-segoe-ui gap-3 bg-black leading-[12.17px] text-white px-8 py-3 rounded-full text-[14px] hover:bg-[#222] transition"
      >
        BACK TO HOME
        <span className="text-lg " >
         <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </span>
      </Link>
    </div>
  );
}
