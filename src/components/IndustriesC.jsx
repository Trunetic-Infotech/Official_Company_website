import { motion } from "framer-motion";

const industries = [
  "Healthcare", "Fintech", "Logistics", "Retail", "Education",
  "SaaS", "Real Estate", "Ecommerce", "Travel & Hospitality",
  "Manufacturing", "Insurance", "Startups"
];

export default function IndustriesC() {
  return (
    <section className="bg-[#0A1628] py-24 text-white">
      
      <h2 className="text-center text-2xl text-[#0093FF] font-bold tracking-wide mb-6">
        INDUSTRIES WE WORK FOR
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
        
        {industries.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 30 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.0, delay: index * 0.01 }}
            whileHover={{
              scale: 1.00,
              backgroundColor: "#0F2D4D",
              boxShadow: "0px 0px 22px #00b7ff",
              borderColor: "#00b7ff",
              
            }}
            className="border rounded-xl py-4 text-center text-lg font-semibold 
                       bg-[#0A1A2F] border-blue-400 
                       transition-all duration-50 cursor-pointer"
          >
            <motion.span
              whileHover={{ 
                color: "#4fc3ff",  
              }}
              className="transition-all duration-50"
            >
              {item}
            </motion.span>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
