import { React, useState, lazy, Suspense, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import { Transition } from '@headlessui/react';
import Works from './Works/works';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaArrowAltCircleUp,
} from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import Service from './Service/service';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import './index.css';
import Skills from './Skills/Skills'

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [start, setStart] = useState(0);

  const {ref,inView} = useInView()

  const animation = useAnimation()

  const variant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.7 }
  };

  useEffect(()=>{
    if(inView){
      animation.start('visible')
    }
    if(!inView){
      animation.start('hidden')
    }

  },[animation,inView])

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <header id="header" className="">
        {/* <video width={"100%"}  muted autoPlay playsInline loop className="hidden md:block">
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
        <nav id="navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                <div className="hidden md:block ml-[20%] nav-lists">
                  <div className="ml-10 flex items-baseline space-x-4 text-white">
                    <a href="#" className="text-white px-3 py-2  font-medium">
                      Home
                    </a>

                    <a
                      href="#services"
                      className="text-white px-3 py-2 font-medium"
                    >
                      Services
                    </a>

                    <a
                      href="#skills"
                      className="text-white px-3 py-2 font-medium"
                    >
                      Skills
                    </a>

                    <a
                      href="#works"
                      className="text-white px-3 py-2  font-medium"
                    >
                      Projects
                    </a>

                    <a
                      href="#about"
                      className="text-white px-3 py-2 font-medium"
                    >
                      About
                    </a>

                    <a
                      href=""
                      className="text-gray-300  rounded-md text-sm font-medium absolute left-[85%]"
                    >
                      <button class=" bg-slate-600 p-[10px] transition ease-in-out delay-150 rounded-[5px] text-white">
                        {' '}
                        Contact
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-slate-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                    href="#"
                    className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="#services"
                    className="text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Services
                  </a>

                  <a
                    href="#skills"
                    className="text-white  block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Skills
                  </a>

                  <a
                    href="#works"
                    className="text-white  block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Projects
                  </a>

                  <a
                    href="#about"
                    className="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    About
                  </a>

                  <a
                    href="#contact"
                    className="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            )}
          </Transition>
        </nav>
        <main
          className="text-white  md:ml-[10px] xl:ml-[5.8%]  xl:w-[80%] h-[70vh]"
          style={{ height: 'fit-content', padding: '10% 0%' }}
        >
          <TypeAnimation
            sequence={['Hi, I am Estifanos Gashawtena', 1000]}
            repeat={Infinity}
            cursor={true}
            className="p-5 text-center text-[45px] font-bold md:ml-[100px]"
          />
          <p className="mt-[1%] p-5 md:p-8 xl:w-[90%] xl:p-5 xl:ml-[10%] text-center xl:text-[22px] italic">
            " The public is more familiar with bad design than good design. It
            is, in effect, conditioned to prefer bad design, because that is
            what it lives with. The new becomes threatening, the old reassuring
            "
          </p>
          <p className="mt-[1%] md:mt-0 xl:w-[90%] xl:ml-[10%] text-center xl:text-[22px]">
            - Paul Rand
          </p>
          <div
            id="home"
            className="social mt-[6%] md:mt-[1%]  xl:mt-[3%] xl:w-[90%] xl:ml-[10%] text-center xl:text-[22px] flex justify-center gap-3"
          >
            <a href="https://facebook.com/estif.magna.7" target={'_blank'}>
              <FaFacebookSquare />
            </a>
            <a href="https://instagram.com/estif.magna.7" target={'_blank'}>
              <FaInstagram />
            </a>
            <a href="https://t.me/estif1727" target={'_blank'}>
              <FaTelegram />
            </a>
            <a href="https://twitter.com/estif2717" target={'_blank'}>
              <FaTwitter />
            </a>
            <a href="https://github.com/Estifanos12" target={'_blank'}>
              <BsGithub />
            </a>
          </div>
        </main>
      </header>
      <div className="backToTop" id="back">
        {' '}
        {showTopBtn && (
          <FaArrowAltCircleUp size={45} onClick={goToTop} color="white" className='cursor-pointer' />
        )}{' '}
      </div>

      <body ref={ref} className="bg-[#0B243A]">
        <div className="service-wrapper"  id="services">
          <motion.div className="big-device-service xl:block"
            animate={animation}
            initial = "hidden"
            variants={variant}
          >
            <Service />
          </motion.div>
      
        </div>

        <div className="skills-wrapper" id="skills">
          <Skills />
        </div>

        <div className="works-wrapper"  id="works">
          <Works />
        </div>
      </body>
      
    </div>
  );
};

export default Portfolio;
