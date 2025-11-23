import React from "react";
import { motion } from "framer-motion";
import { skills, experiences } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="w-full h-full">
      <div className="max-container">
        <h1 className="head-text">
          Hello, I am
          <span className="blue-gradient_text font-semibold drop-shadow"> Alex</span>
        </h1>
        <div className="mt-5 flex-col gap-3 text-slate-500">
          <p>
            Software Engineer, specialise in Web and IoT Development with proven ability to design, implement, and
            deploy scalable applications, successfully bridging hardware data to cloud-based dashboards.
          </p>
        </div>
        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div key={skill.name} className="block-container w-20 h-20 gap-2">
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              Solutions-driven Software Engineer with a versatile background spanning Embedded Systems (C/C++) and
              Modern Frontend Development (React, Next.js, IoT Integration)
            </p>
          </div>

          <div className="mt-12 relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200" />

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company_name}
                className={`flex items-center justify-between w-full mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: false, amount: 0.25 }}>
                {/* Content Side */}
                <div className="w-[45%]">
                  <div className="flex flex-col">
                    <h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
                    <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                      {experience.company_name}
                    </p>
                    <p className="text-black-500/50 text-sm mt-1 mb-4">{experience.date}</p>
                    <ul className="list-disc ml-5 space-y-2">
                      {experience.points.map((point, index) => (
                        <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Icon */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex justify-center items-center border-[3px] border-white shadow-md z-10"
                  style={{ background: experience.iconBg }}>
                  <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
                </div>

                {/* Empty Side for spacing */}
                <div className="w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
        <hr className="border-slate-200 mt-2" />
        <CTA className="w-full" />
      </div>
    </section>
  );
};

export default About;
