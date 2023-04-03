import { motion } from "framer-motion";
import {Links} from "./canvas";
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
            &nbsp;and a Certified Cloud Practioner
          </p>
        </div>
      </div>
      <Links/>
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