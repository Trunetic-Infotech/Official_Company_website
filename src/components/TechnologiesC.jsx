import React from "react";

const techList = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
  name: "C#",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
},
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Ruby",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
  },
  {
  name: "Kotlin",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
},
  {
  name: "MongoDB",
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
}
];

const TechnologiesC = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto p-6 text-center">

        {/* Title */}
        <h2 className="text-2xl text-[#0093FF] font-bold tracking-wide">
          TECHNOLOGIES WE USE
        </h2>

        {/* <div className="w-16 h-1 bg-blue-500 drop-shadow-[0_0_10px_#3DAAFF] mx-auto mt-3 mb-10 rounded-full" /> */}

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 mt-12">

          {techList.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-all"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-16 h-16 object-contain grayscale-0 hover:grayscale-0 transition-all duration-300  lg:grayscale md:grayscale"
              />
              <p className="text-[#27548f] font-medium mt-2 hover:text-[#0093FF] transition-all duration-300">
                {tech.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TechnologiesC;
