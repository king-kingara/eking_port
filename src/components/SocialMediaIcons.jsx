import { FaGithub, FaDribbble, FaTwitter } from 'react-icons/fa';

const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-75 text-[#f5cc8a] hover:text-[#2c1e06] hover:scale-105 text-2xl md:text-3xl transition duration-500"
          href="https://dribbble.com/king07skywalker"
          target="_blank"
          rel="noreferrer"
        >
          <FaDribbble />
        </a>
        <a
          className="hover:opacity-75 text-[#f5cc8a] hover:text-[#2c1e06] hover:scale-105 text-2xl md:text-3xl transition duration-500"
          href="https://github.com/king-kingara"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="hover:opacity-75 text-[#f5cc8a] hover:text-[#2c1e06] hover:scale-105 text-2xl md:text-3xl transition duration-500"
          href="https://twitter.com/KingaraEdd55765"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;