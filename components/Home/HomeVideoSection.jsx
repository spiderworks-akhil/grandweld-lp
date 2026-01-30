"use client";

export default function HomeVideoSection() {
  return (
    <section className="relative py-[40px] bg-[#F7F9FC]">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[#1E1E1E] font-bold md:text-[36px] text-[28px] font-[400] leading-[48px]">
            Experience Grandweld Shipyards
          </h2>

          <p className="text-[#636262] max-w-[720px] mx-auto mt-[15px] font-segoe-ui text-[16px] leading-[26px]">
            Watch how Grandweld Shipyards delivers world-class ship repair,
            conversion, and marine engineering solutions from Dubai.
          </p>
        </div>

        {/* Video */}
        <div className="relative w-full max-w-[1100px] mx-auto rounded-[12px] overflow-hidden shadow-xl aspect-video bg-black">
          <iframe
            src="https://www.youtube.com/embed/5YH5aK7UPj4"
            title="Grandweld Shipyards Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
