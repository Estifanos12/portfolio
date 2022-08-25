import { MdDeveloperMode } from 'react-icons/md';
import { FaAppStoreIos } from 'react-icons/fa';
import { SiAdobeindesign } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import ReactCardFlip from 'react-card-flip';
import './works.css';
import AASTU_PROJECT from './AASTU.png';
import { React, useState } from 'react';

const Works = () => {
  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);
  const [flipped3, setFlipped3] = useState(false);

  const handleClick1 = () => {
    setFlipped1(!flipped1);
  };
  const handleClick2 = () => {
    setFlipped2(!flipped2);
  };
  const handleClick3 = () => {
    setFlipped3(!flipped3);
  };
  return (
    <div className="work text-white xl:pt-[5%] flex flex-col justify-center items-center">
      <div className="title">
        <TypeAnimation
          sequence={['Projects That I Have Done So Far', 1000]}
          repeat={Infinity}
          cursor={true}
          className=" text-center text-[33px] font-bold xl:text-[42px] pt-[20%] pb-[20%] xl:mb-[2%] xl:p-0"
        />
      </div>
      <div className="projects grid grid-cols-1 xl:grid-cols-3 xl:mt-[3%] xl:gap-[75px]">
        <div onClick={handleClick1} className="project w-fit h-[500px] xl:p-7">
          <ReactCardFlip
            isFlipped={flipped1}
            containerClassName="flip-container"
            flipDirection="horizontal"
          >
            <div className="front" key="front">
              <img src={AASTU_PROJECT} alt="" />
              <p>
                AASTU GEBETA is a delivery platform that build for students at
                Addis Ababa Science and Technology University{' '}
              </p>
            </div>
            <div className="back" key="back">
              <a href="#">View in Github</a>
              <a href="#">View in Site</a>
            </div>
          </ReactCardFlip>
        </div>
        <div
          onClick={handleClick2}
          className="project w-fit h-[500px] xl:p-7 mt-10 xl:mt-0"
        >
          <ReactCardFlip
            isFlipped={flipped2}
            containerClassName="flip-container"
            flipDirection="horizontal"
          >
            <div className="front" key="front">
              <img src={AASTU_PROJECT} alt="" />
              <p>
                AASTU GEBETA is a delivery platform that build for students at
                Addis Ababa Science and Technology University{' '}
              </p>
            </div>
            <div className="back" key="back">
              <a href="#">View in Github</a>
              <a href="#">View in Site</a>
            </div>
          </ReactCardFlip>
        </div>
        <div
          onClick={handleClick3}
          className="project w-fit h-[500px] xl:p-7 mt-10 xl:mt-0"
        >
          <ReactCardFlip
            isFlipped={flipped3}
            containerClassName="flip-container"
            flipDirection="horizontal"
          >
            <div className="front" key="front">
              <img src={AASTU_PROJECT} alt="" />
              <p>
                AASTU GEBETA is a delivery platform that build for students at
                Addis Ababa Science and Technology University{' '}
              </p>
            </div>
            <div className="back" key="back">
              <a href="#">View in Github</a>
              <a href="#">View in Site</a>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </div>
  );
};

export default Works;
