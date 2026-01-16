import Image from "next/image";
import AboutShipImg from "@/public/img/LP/new/about-us.jpg";
import { ButtonRound } from "../common/Button";
import { H2, P } from "../common/Styling";
import { BtnLinkArrow } from "../common/svgIcons";
import { useState } from "react";
import PopupModal from "../common/PopupModal";
export default function HomeAboutLP() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="HomeAbout" className="relative pb-[100px]">
      <div className="container">
        <div className="flex mx-[-15px] flex-wrap ">
          <div className="w-full px-[15px] ">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px] justify-between items-center relative md:px-[60px]">
              <div className="HomeAbout-title lg:max-w-[560px] w-full">
                <H2 text="About Us" />

                <P
                  className="mt-[13px]"
                  text="Grandweld Shipyards is a well-established ship repair and engineering company based in Dubai, UAE, backed by more than 40 years of maritime experience. Operating from Dubai Maritime City, we deliver dependable ship repair, maintenance, and conversion services for a wide variety of vessels."
                />
                <P
                  className="mt-[13px]"
                  text="With modern facilities and experienced technical teams, we provide efficient ship repair solutions that reduce downtime while complying with international safety and quality standards. Trusted by both regional and global maritime operators, Grandweld remains focused on keeping vessels safe, operational, and on schedule."
                />

                <ButtonRound
                  text="Get a Quote"
                  onClick={() => setIsModalOpen(true)}
                  className="text-[14px] capitalize flex items-center justify-between max-w-[242px] w-full mt-6 text-[#fff] bg-[#000] border border-[#EEE]"
                  arrow={
                    <span className="text-white w-[18px] h-[18px] rounded-[50%] bg-[#fff] flex items-center justify-center">
                      <BtnLinkArrow />
                    </span>
                  }
                />
              </div>

              <div className="flex flex-col items-center gap-[5px]">
                <div className="about-ship-img-block ">
                  <Image
                    src={AboutShipImg}
                    alt="AboutShipImg"
                    width={702}
                    height={234}
                    className="w-full object-contain"
                  />
                </div>

                <div className="grid gap-[5px] md:grid-cols-3 grid-cols-1">
                  <div className="bg-[#F8F2E8] md:max-w-[200px] rounded-[6px] py-[15px] px-[18px]">
                    <h3 className="text-[#1E1E1E] font-segoe-ui text-[13px] font-[600] capitalize">
                   Customized Repair Solutions
                    </h3>
                    <hr className="border-[#BFB6A8] mt-[10px] mb-[15px]" />

                    <h5 className="text-[#1E1E1E] font-segoe-ui text-[13px] font-[400] leading-[18px] tracking-[0.13px]">
                    Tailored ship repairs, from small fixes to complex overhauls.
                    </h5>
                  </div>

                  <div className="bg-[#E8F1F8] md:max-w-[200px] rounded-[6px] py-[15px] px-[18px]">
                    <h3 className="text-[#1E1E1E] font-segoe-ui text-[13px] font-[600] capitalize">
                   Rapid Repairs, 24/7 Support
                    </h3>
                    <hr className="border-[#BFB6A8] mt-[10px] mb-[15px]" />

                    <h5 className="text-[#1E1E1E] font-segoe-ui text-[13px] font-[400] leading-[18px] tracking-[0.13px]">
                On-standby experts delivering fast, efficient ship repairs.
                    </h5>
                  </div>

                  <div className="bg-[#E8F8EB] md:max-w-[200px] rounded-[6px] py-[15px] px-[18px]">
                    <h3 className="text-[#1E1E1E] font-segoe-ui text-[13px] font-[600] capitalize">
                    Cost-Effective Maintenance
                    </h3>
                    <hr className="border-[#BFB6A8] mt-[10px] mb-[15px]" />

                    <h5 className="text-[#1E1E1E] font-segoe-ui text-[13px] font-[400] leading-[18px] tracking-[0.13px]">
                    Prevent costly emergencies with smart, affordable repair solutions.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PopupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
