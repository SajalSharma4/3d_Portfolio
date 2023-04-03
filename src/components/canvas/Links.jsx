import { motion } from "framer-motion";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Icon } from '@iconify/react';
import hackerrankIcon from '@iconify/icons-cib/hackerrank';
import leetcodeIcon from '@iconify/icons-simple-icons/leetcode';

const Links = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-left justify-center md:pl-20 md:mt-20">
      <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-4/5 flex justify-center items-center gap-5 mt-20 md:mt-20">
          <a href="mailto:sharma_sajal@outlook.com" target="_blank" rel="noopener noreferrer" title="Mail">
          <EmailIcon sx={{fontSize:40, "&:hover": { fontSize:50 } }}/>

          </a>
          <a href="https://www.linkedin.com/in/sajal-sharma-86414b198" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <LinkedInIcon sx={{fontSize:40, "&:hover": { fontSize:50 } }}/>
          </a>
          <a href="https://github.com/SajalSharma4" target="_blank" rel="noopener noreferrer"title="Github">
          <GitHubIcon sx={{fontSize:40, "&:hover": { fontSize:50 } }}/>

          </a>
          <a href="https://instagram.com/sajal_.sharma" target="_blank" rel="noopener noreferrer" title="Instagram">
          <InstagramIcon sx={{fontSize:40, "&:hover": { fontSize:50 } }}/>

          </a>
          <a href="https://leetcode.com/sazalsharma2003/" target="_blank" rel="noopener noreferrer">
            <p className="text-4xl hover:text-5xl italic border w-6 hover:w-7  rounded-lg" title="Leetcode">L</p>
          </a>
          <a href="https://www.hackerrank.com/sajal_sharma2020?hr_r=1" target="_blank" rel="noopener noreferrer">
          <p className="text-4xl hover:text-5xl bold w-6 hover:w-7" title="HackerRank">H</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
