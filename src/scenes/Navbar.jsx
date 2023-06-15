import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ isMenuToggled, page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`
            ${isMenuToggled === false && selectedPage !== lowerCasePage ? "hover:text-[#f5cc8a] text-white hover:underline hover:underline-offset-4" : ""}
            ${isMenuToggled === false && selectedPage === lowerCasePage ? "text-[#f5cc8a] hover:text-[#f5cc8a] hover:underline hover:underline-offset-4" : ""}
            ${isMenuToggled === true && selectedPage !== lowerCasePage ? "text-deep-blue hover:text-[#301a0b] active:scale-95" : ""}
            ${isMenuToggled === true && selectedPage === lowerCasePage ? 'hover:text-[#301a0b] text-[#180c02] underline underline-offset-4 active:scale-95' : ''} 
            hover:scale-110 transition duration-500 ease-in-out`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-[#180c02]";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-[75%] xs:w-5/6">
                <h4 className="font-playfair text-3xl text-[#ffda9f] font-bold">E.K.</h4>

                {/* DESKTOP NAV */}
                {isDesktop ? (
                    <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isMenuToggled={isMenuToggled}
                        />
                        <Link
                            page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isMenuToggled={isMenuToggled}
                        />
                        <Link
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isMenuToggled={isMenuToggled}
                        />
                        <Link
                            page="Services"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isMenuToggled={isMenuToggled}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isMenuToggled={isMenuToggled}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            isMenuToggled={isMenuToggled}
                        />
                    </div>
                ) : (
                    <button
                        className="rounded-full bg-[#f5cc8a] p-2 hover:scale-125 active:scale-90 hover:bg-[#180c02] transition text-deep-blue  hover:text-[#f5cc8a] hover:border hover:border-solid hover:rounded-full hover:border-[#f5cc8a] duration-300 ease-in-out"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <GiHamburgerMenu className="hover:text-[#f5cc8a]" />
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isDesktop && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-[#f5cc8a] xs:border-l-4 xs:border-solid xs:border-[#301a0b] w-[300px]">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <AiOutlineClose className="absolute text-deep-blue text-2xl p-1 border border-solid border-deep-blue rounded-full hover:bg-[#180c02] hover:border-[#362112] hover:text-[#f5cc8a] hover:rounded-full hover:font-semibold hover:scale-125 active:text-[#180c02] active:scale-95 transition duration-500 ease-in-out" />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col font-playfair gap-10 ml-[33%] text-2xl text-deep-blue">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isMenuToggled={isMenuToggled}
                            />
                            <Link
                                page="About"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isMenuToggled={isMenuToggled}
                            />
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isMenuToggled={isMenuToggled}
                            />
                            <Link
                                page="Services"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isMenuToggled={isMenuToggled}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isMenuToggled={isMenuToggled}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isMenuToggled={isMenuToggled}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;