import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#f97316]' />
          <div className='w-1 sm:h-80 h-40 orange-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, I'm <span className='text-[#f97316]'>Sajal Sharma</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am an Enthusiastic Web Developer<br className='sm:block hidden' />
            &nbsp;and a Cloud Practioner
          </p>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-left justify-center md:pl-20 md:mt-20">
      <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-4/5 flex justify-center items-center gap-5 mt-20 md:mt-20">
          <a href="mailto:sharma_sajal@outlook.com" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="../src/assets/Links/email.webp"
              alt="emailLogo"
              className="w-10 h-10"
              whileHover={{ scale: 1.2 }}
              style={{ borderRadius: "50%" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/sajal-sharma-86414b198" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="../src/assets/Links/linkedin.png"
              alt="LinkedIn Logo"
              className="w-8 md:w-10 h-8 md:h-10"
              whileHover={{ scale: 1.2 }}
              style={{ borderRadius: "60%" }}
            />
          </a>
          <a href="https://github.com/SajalSharma4" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="../src/assets/Links/github.png"
              alt="GitHub Logo"
              className="w-8 md:w-10 h-8 md:h-10"
              whileHover={{ scale: 1.2 }}
            />
          </a>
          <a href="https://instagram.com/sajal_.sharma" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="../src/assets/Links/instagram.png"
              alt="Instagram Logo"
              className="w-8 md:w-10 h-8 md:h-10"
              whileHover={{ scale: 1.2 }}
              style={{ borderRadius: "50%" }}
            />
          </a>
          <a href="https://leetcode.com/sazalsharma2003/" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="../src/assets/Links/leetcode.png"
              alt="LeetCode Logo"
              className="w-10 h-10"
              whileHover={{ scale: 1.2 }}
              style={{ borderRadius: "50%" }}
            />
          </a>
          <a href="https://www.hackerrank.com/sajal_sharma2020?hr_r=1" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="../src/assets/Links/hackerrank.png"
              alt="HackerRank Logo"
              className="w-8 md:w-10 h-8 md:h-10"
              whileHover={{ scale: 1.2 }}
              style={{ borderRadius: "60%" }}
            />
          </a>
        </div>
      </div>
    </div>

      {/*button created using framework motion */}
      <div className='absolute xs:bottom-40 bottom-32 w-full flex justify-center items-center'>
        <a href='#Resume'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 mb:0'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;