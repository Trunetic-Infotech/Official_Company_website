import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialsC = () => {
  const testimonials = [
    {
      name: "Aarav Mehta",
      role: "CEO, StartLoop Technologies",
      text: "Trunetic delivered exactly what we needed. The UI/UX quality and attention to detail exceeded our expectations.",
    },
    {
      name: "Sophia Laurent",
      role: "Founder, UrbanLeaf",
      text: "Their team is extremely professional and reliable. The website performance and design are top-notch!",
    },
    {
      name: "Ishaan Verma",
      role: "CTO, BookNest",
      text: "Amazing work! Smooth animations, clean code, and timely delivery. Highly recommended.",
    },
    {
      name: "Emily Carter",
      role: "Manager, Pixora Labs",
      text: "The experience was absolutely seamless. They understood our vision perfectly.",
    },
    {
      name: "Rohan Patel",
      role: "Director, CloudHive",
      text: "Exceptional service and excellent communication throughout the project.",
    }
  ];

  // ------- STATES -------
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  // ------- REFS -------
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  // ------- CALCULATE MAX INDEX BASED ON ACTUAL WIDTH -------
  const calculateMaxIndex = () => {
    if (!sliderRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const totalWidth = sliderRef.current.scrollWidth;

    // Each card width + gap (gap-6 = 24px)
    const cardWidth = sliderRef.current.children[0].offsetWidth + 24;

    const visibleCards = Math.floor(containerWidth / cardWidth);

    const newMax = testimonials.length - visibleCards;
    setMaxIndex(newMax > 0 ? newMax : 0);

    if (index > newMax) setIndex(newMax); // prevent overflow
  };

  useEffect(() => {
    calculateMaxIndex();
    window.addEventListener("resize", calculateMaxIndex);
    return () => window.removeEventListener("resize", calculateMaxIndex);
  }, []);

  // ------- SLIDER FUNCTIONS -------
  const nextSlide = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#0a1a2f] to-[#29588d] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-2xl text-[#0093FF] font-bold tracking-wide mb-6 text-center">
          TESTIMONIALS
        </p>

        <h2 className="font-poppins text-3xl md:text-4xl font-extrabold text-center leading-tight">
          Hear What Our Clients Say
        </h2>

        <p className="text-center text-gray-300 mt-2 mb-12">
          Your ideas matter to us.
        </p>

        {/* SLIDER BUTTONS */}
        <div className="flex justify-end mb-4 gap-2">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={index === 0}
            className={`p-2 rounded-full border border-blue-400 transition
              ${index === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-blue-500 hover:text-black"}
            `}
          >
            <FaArrowLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={index === maxIndex}
            className={`p-2 rounded-full border border-blue-400 transition
              ${index === maxIndex ? "opacity-40 cursor-not-allowed" : "hover:bg-blue-500 hover:text-black"}
            `}
          >
            <FaArrowRight />
          </button>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden" ref={containerRef}>
          <div
            ref={sliderRef}
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${index * (350 + 24)}px)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[350px] bg-[#0F1E36] p-6 rounded-xl border border-blue-400/20"
              >
                <p className="text-gray-300 mb-6 leading-relaxed">
                  “{t.text}”
                </p>

                <h3 className="font-semibold text-lg">{t.name}</h3>
                <p className="text-sm text-blue-300">{t.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsC;
