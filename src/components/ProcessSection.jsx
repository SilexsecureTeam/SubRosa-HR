import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Confidential Enquiry",
      description:
        "Send an email or complete the brief form. Everything discussed at this stage is fully confidential no names, no public disclosure.",
      theme: "light"
    },
    {
      number: "2",
      title: "Scoping Call",
      description:
        "A focused 30-minute call to understand your organisation's situation, priorities, and timeline. We agree on scope before any fees are discussed.",
      theme: "dark"
    },
    {
      number: "3",
      title: "Proposal & Agreement",
      description:
        "You receive a clear, written proposal with fixed scope, fixed price, and delivery timeline. No surprises. No scope creep.",
      theme: "light"
    },
    {
      number: "4",
      title: "Delivery",
      description:
        "Work begins immediately on confirmation. You receive updates throughout. Deliverables are branded, structured, and ready to implement.",
      theme: "dark"
    }
  ];

  return (
    <section
      id="process"
      className="relative bg-white text-black py-24 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
     
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className="
            relative
            w-[700px] h-[700px]
            sm:w-[850px] sm:h-[850px]
            lg:w-[1050px] lg:h-[1050px]
            overflow-hidden
          "
        >
          <img
            src="/images/Subrosa Logo.png"
            alt=""
            className="
              absolute
              h-full
              w-auto
              max-w-none
              opacity-10
              object-contain
              top-0
              left-[calc(50%-58.5%)]
            "
          />
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto relative z-10">

        <div className="mb-20 text-left">
          <p className="text-[#C4596A] uppercase tracking-wider text-xs sm:text-sm font-semibold mb-3">
            The Process
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-black">
            Simple.{" "}
            <span className="italic font-normal">Structured.</span> Delivered.
          </h2>
        </div>
        <div className="flex flex-col gap-10 sm:gap-14 relative">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={index}
                className={`flex w-full ${
                  isEven
                    ? "justify-end lg:pr-12"
                    : "justify-start lg:pl-12"
                }`}
              >
                <div
                  className={`relative w-full lg:w-[540px] rounded-3xl p-8 sm:p-10 shadow-2xl transition-all duration-300 border ${
                    step.theme === "light"
                      ? "bg-neutral-100 text-neutral-900 border-neutral-200"
                      : "bg-neutral-900 text-white border-neutral-700"
                  }`}
                >

                  <div
                    className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full overflow-hidden pointer-events-none ${
                      step.theme === "light"
                        ? "bg-black"
                        : "bg-[#C4596A]"
                    }`}
                  />

                 
                  <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 relative z-10 text-[#C4596A]">
                    {step.title}
                  </h3>

                  <div className="flex items-end justify-between gap-6 relative z-10">
                    <p
                      className={`text-sm sm:text-base leading-relaxed font-light max-w-[360px] ${
                        step.theme === "light"
                          ? "text-neutral-700"
                          : "text-neutral-300"
                      }`}
                    >
                      {step.description}
                    </p>

                    <span
                      className={`text-6xl sm:text-7xl font-serif font-bold tracking-tighter shrink-0 ${
                        step.theme === "light"
                          ? "text-black"
                          : "text-[#C4596A]"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}