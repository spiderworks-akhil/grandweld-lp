import Image from "next/image";
import HomeBannerImg from "@/public/img/LP/new/home-banner.jpg";
import { ButtonRound } from "../common/Button";
import { H1 } from "../common/Styling";
import ContactForm from "../common/ContactForm";
export default function HomeBanner({}) {
  return (
    <section id="home-banner" className="relative lg:min-h-[780px] h-[400px]">
      <div className="home-banner-img h-full">
        <Image
          src={HomeBannerImg}
          alt="HomeBannerImg"
          width={1600}
          height={750}
          className="w-full h-full object-cover "
        />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
      </div>

      <div className="home-banner-content-block absolute bottom-[50px] w-full">
        <div className="container">
          <div className="flex mx-[-15px] flex-wrap items-end justify-between">
            <div className="lg:w-6/12 w-full px-[15px]">
              <div className="home-banner-content-block-left md:block hidden">
                <ButtonRound
                  text="Since 1984"
                  className="text-[13px] bg-[#fff] hover:bg-[#000] text-[#050505] hover:text-[#fff]"
                />

                <h1 className="text-[#fff] font-segoe-ui lg:text-[64px] text-[50px] font-[400] lg:leading-[64px] leading-[50px] tracking-[-0.64px] mt-[15px]">
                  Expert <strong> Ship Repair</strong> Solutions
                  from Dubai
                </h1>

                <p className="text-[#fff] font-segoe-ui text-[23px] font-normal leading-[24px] tracking-[-0.32px] mt-[35px]">
                  Trusted Ship Repair Experts in Dubai Since 1984
                </p>
              </div>
            </div>
            <div className="lg:w-5/12 w-full px-[15px]">
              <div className="lg:block hidden">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
