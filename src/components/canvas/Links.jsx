import { motion } from "framer-motion";

const Links = () => {
  return (
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
  );
};

export default Links;
