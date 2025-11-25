import { motion } from "framer-motion";
import {
  FiHeart,
  FiCreditCard,
  FiTruck,
  FiShoppingCart,
  FiBook,
  FiCloud,
  FiHome,
  FiShoppingBag,
  FiAirplay,
  FiCpu,
  FiShield,
  
} from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";


const industries = [
  { name: "Healthcare", icon: FiHeart },
  { name: "Fintech", icon: FiCreditCard },
  { name: "Logistics", icon: FiTruck },
  { name: "Retail", icon: FiShoppingCart },
  { name: "Education", icon: FiBook },
  { name: "SaaS", icon: FiCloud },
  { name: "Real Estate", icon: FiHome },
  { name: "Ecommerce", icon: FiShoppingBag },
  { name: "Travel & Hospitality", icon: FiAirplay },
  { name: "Manufacturing", icon: FiCpu },
  { name: "Insurance", icon: FiShield },
  { name: "Startups", icon: IoRocketOutline }
];

export default function IndustriesC() {
  return (
    <section className="bg-[#0A1628] py-24 text-white">
      
      <h2 className="text-center text-2xl text-[#0093FF] font-bold tracking-wide mb-6">
        INDUSTRIES WE WORK FOR
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">

        {industries.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              whileHover={{
                scale: 1.03,
                backgroundColor: "#0F2D4D",
                boxShadow: "0px 0px 18px #0093FF",
                borderColor: "#0093FF"
              }}
              className="border rounded-xl py-6 text-center font-semibold
                         bg-[#0A1A2F] border-blue-400 transition-all cursor-pointer"
            >
              <Icon className="text-3xl mx-auto mb-3 text-blue-300" />

              <motion.span
                whileHover={{ color: "#4fc3ff" }}
                className="transition-all text-lg"
              >
                {item.name}
              </motion.span>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
