import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Replace this with your real WhatsApp number.
  // Use country code without + or spaces.
  const whatsappNumber = "919403033133";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");

        if (!sectionId) return;

        const sectionHeight = current.clientHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  // Close mobile menu
  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-50 flex w-full items-center py-5 ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex min-w-0 items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
            setActive("");
            closeMenu();
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="h-9 w-9 shrink-0 object-contain"
          />

          <p className="max-w-[190px] truncate text-[16px] font-bold text-white sm:max-w-none sm:text-[18px]">
            {config.html.title}
          </p>
        </Link>

        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="hidden items-center gap-6 sm:flex">

          {/* Navigation Links */}
          <ul className="flex list-none flex-row items-center gap-7">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`cursor-pointer text-[17px] font-medium transition-colors duration-200 ${
                  active === nav.id
                    ? "text-white"
                    : "text-secondary"
                } hover:text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download="Sumit-Sadafule-Resume.pdf"
            className="flex items-center gap-2 rounded-lg bg-[#915EFF] px-4 py-2 text-[15px] font-semibold text-white shadow-[0_0_15px_rgba(145,94,255,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#7c4dff] hover:shadow-[0_0_25px_rgba(145,94,255,0.7)]"
          >
            {/* Download Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
              />
            </svg>

            Resume
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact me on WhatsApp"
            className="flex items-center justify-center rounded-lg bg-[#25D366] p-2.5 text-white shadow-[0_0_15px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]"
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M20.52 3.48A11.82 11.82 0 0012.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.59 5.93L.1 24l6.35-1.66a11.87 11.87 0 005.6 1.42h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.15-3.41-8.41zM12.06 21.77h-.01a9.86 9.86 0 01-5.03-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.83 9.83 0 01-1.51-5.25c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 017 2.9 9.84 9.84 0 012.89 7c0 5.44-4.43 9.87-9.87 9.87zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
            </svg>
          </a>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <div className="flex flex-1 items-center justify-end sm:hidden">

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Dropdown */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[220px] rounded-xl p-6 shadow-xl`}
          >
            <ul className="flex flex-1 list-none flex-col items-start gap-5">

              {/* Mobile Navigation Links */}
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium transition-colors ${
                    active === nav.id
                      ? "text-white"
                      : "text-secondary"
                  } hover:text-white`}
                  onClick={closeMenu}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              {/* Mobile Resume */}
              <li className="w-full">
                <a
                  href="/resume.pdf"
                  download="Sumit-Sadafule-Resume.pdf"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#915EFF] px-4 py-3 font-semibold text-white transition-all hover:bg-[#7c4dff]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                    />
                  </svg>

                  Download Resume
                </a>
              </li>

              {/* Mobile WhatsApp */}
              <li className="w-full">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 font-semibold text-white transition-all hover:bg-[#20bd5a]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M20.52 3.48A11.82 11.82 0 0012.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.59 5.93L.1 24l6.35-1.66a11.87 11.87 0 005.6 1.42h.01c6.55 0 11.87-5.32 11.87-11.87 0-3.17-1.23-6.15-3.41-8.41zM12.06 21.77h-.01a9.86 9.86 0 01-5.03-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.83 9.83 0 01-1.51-5.25c0-5.44 4.43-9.87 9.88-9.87a9.8 9.8 0 017 2.9 9.84 9.84 0 012.89 7c0 5.44-4.43 9.87-9.87 9.87zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                  </svg>

                  WhatsApp
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;