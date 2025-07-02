import { MotionDiv } from "@/Component/framer-wrapper";
import { Shield, Heart, Truck, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Every product is carefully selected and tested for quality",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority and commitment",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to your doorstep",
    },
    {
      icon: Award,
      title: "Trusted Brand",
      description: "Thousands of happy customers trust our products",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-purple-50 to-rose-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-cormorant">
              About{" "}
              <span className=" uppercase  text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">
                BuchiLondon Enterprises
              </span>
            </h2>
          </MotionDiv>
          <div className="max-w-3xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At BuchiLondon Enterprises, we believe that luxury should be
                accessible to everyone. Founded with a passion for quality and
                affordability, we curate the finest perfumes, hair care
                products, and accessories to help you express your unique style.
                Our mission is to bring you premium products that enhance your
                daily routine without breaking the bank.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every product in our collection is handpicked for its quality,
                effectiveness, and value. We're committed to building lasting
                relationships with our customers through exceptional service and
                genuine care.
              </p>
            </MotionDiv>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <MotionDiv
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
              key={index}
            >
              <div className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-rose-100 hover:border-rose-300 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center shadow-sm">
                <div className="bg-gradient-to-br from-rose-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-rose-600" size={28} />
                </div>
                <h3 className="font-poppins text-lg font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
