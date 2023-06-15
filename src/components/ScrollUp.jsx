import { FiArrowUpCircle } from 'react-icons/fi';

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = this.document.querySelector(".scrollup");
        //when the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
        if (this.scrollY >= 560) scrollUp.classList.add("");
        else scrollUp.classList.remove("show-scroll");
    })

    return (
        <a
            href="#"
            className="fixed right-10 bottom-[-20%] bg-yellow opacity-80 p-[0.5rem_0.5rem] rounded-full z-10 transition duration-500 ease-in-out cursor-pointer hover:bg-red"
        >
            <FiArrowUpCircle className='text-2xl text-white' />
        </a>
    )
}

export default ScrollUp