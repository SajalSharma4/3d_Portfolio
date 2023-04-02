import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { resume } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index }) => (
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("left", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[20px] flex justify-evenly items-center flex-col'
      >
        <h3 className='text-white text-[20px] font-bold text-center'>
          {index}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Resume = () => {
  const viewCV = () => {
    window.open(
      "https://drive.google.com/file/d/1VLxjdAMqoCbe6OHhv9A-ZYsBcVKlxo_r/view?usp=sharing",
      "_blank"
    );
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1VLxjdAMqoCbe6OHhv9A-ZYsBcVKlxo_r";
    link.download = "Sajal_Sharma_Resume.pdf";
    link.click();
  };  
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>

      <div className='mt-20 w-full flex flex-wrap gap-12'>
        <button onClick={viewCV}>
          <ServiceCard key='viewCV' index='View CV' />
        </button>
        <button onClick={downloadCV}>
          <ServiceCard key='downloadCV' index='Download CV' />
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Resume, "Resume");
