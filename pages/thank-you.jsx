import React from "react";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";

export default function ThankYouPage() {
  return (
    <div className="w-full bg-gray-100">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-white">
        <Header />
        <img
          src="/img/LP/new/about-btm-main.jpg"
          alt="Shipyard"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Thank You!
          </h1>

          <p className="text-lg md:text-xl mb-6">
            Your request has been successfully submitted. Our ship repair
            specialists will contact you shortly.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/"
              className="bg-white text-black px-6 py-3 rounded-full hover:transparent font-medium hover:bg-gray-200 transition"
            >
              Back to Home
            </a>

            <a
              href="/"
              className="bg-[#13487F] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0d3a66] transition"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What Happens Next?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">1. Request Review</h3>
            <p className="text-gray-600 text-sm">
              Our team reviews your ship repair or service request.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">2. Consultation</h3>
            <p className="text-gray-600 text-sm">
              A marine expert contacts you to discuss the project.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">3. Planning</h3>
            <p className="text-gray-600 text-sm">
              Our engineers prepare a repair or conversion plan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">4. Execution</h3>
            <p className="text-gray-600 text-sm">
              Work begins at our world-class shipyard facility.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-white py-16 px-6">
      <Footer />
      </section>

      {/* FINAL CTA */}
      <section className="bg-black text-white py-16 text-center px-6">

        <h2 className="text-3xl font-semibold mb-4">
          Have Another Requirement?
        </h2>

        <p className="text-gray-300 mb-6">
          Our team is ready to help with your marine engineering needs.
        </p>

        <a
          href="/"
          className="bg-[#13487F] px-8 py-3 rounded-full hover:bg-transparent border-1  border-[#fff] font-medium transition"
        >
          
          Contact Our Experts
        </a>

      </section>

    </div>
  );
}