import { FaGithub, FaDribbble, FaTwitter } from 'react-icons/fa';

const SocialMediaIcons = () => {
    return (
      <div className="flex relative justify-center md:justify-start p-2 my-6 gap-7">
        <a
          className="hover:opacity-75 text-[#f5cc8a] p-1 hover:text-[#2c1e06] hover:bg-[#f5cc8a] hover:rounded-md text-2xl md:text-3xl transition duration-500"
          href="https://www.dribble.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaDribbble />
        </a>
        <a
          className="hover:opacity-75 text-[#f5cc8a] p-1 hover:text-[#2c1e06] hover:bg-[#f5cc8a] hover:rounded-md text-2xl md:text-3xl transition duration-500"
          href="https://www.github.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="hover:opacity-75 text-[#f5cc8a] p-1 hover:text-[#2c1e06] hover:bg-[#f5cc8a] hover:rounded-md text-2xl md:text-3xl transition duration-500"
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    );
  };

const Footer = () => {
  return (
    <footer className="h-64 bg-[#180c02] pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl sm:font-bold sm:text-3xl tracking-wide text-[#f5cc8a] pb-3 md:pb-2">
              Eddie <span className='text-white tracking-normal'>King'ara</span>
          </p>
          <p className="p-2 font-opensans text-md text-[#f5cc8a] ">
            ©2023 &#160; <span className="bg-[#f5cc8a] font-playfair font-bold rounded-md text-[#180c02] hover:shadow-md hover:bg-[#7b7baa] hover:text-[#180c02] transition duration-300 ease-in-out cursor-pointer py-1 px-2"> Shak3mAn.</span><span> &#160; All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;