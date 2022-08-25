import "./Skills.css"
import { TypeAnimation } from "react-type-animation"
import {SiHtml5,SiCss3,SiJavascript,SiReact,SiVuedotjs,SiNodedotjs,SiExpress,SiMysql,SiMongodb,SiPhp} from "react-icons/si"
import { Line, Circle } from 'rc-progress';
import { useInView } from 'react-intersection-observer'
import { useState,useEffect } from "react";

const Skills = ()=>{

    return(
        <div className="skills text-white xl:pt-[5%] flex flex-col justify-center items-center">
                <div className="title">
                    <TypeAnimation
                        sequence={['Skills and Experiences', 1000]}
                        repeat={Infinity}
                        cursor={true}
                        className=" text-center text-[33px] font-bold xl:text-[42px] pt-[20%] pb-[20%] xl:mb-[2%] xl:p-0"
                    />
                    </div> 

                    <div className="skill-experience  ml-3 mr-3 grid grid-cols-1 xl:grid-cols-2 xl:gap-20">
                        <div className="skill bg-[#0b243a] grid grid-cols-2 md:grid-cols-4 xl:grid-cols-3 xl:ml-10 xl:mt-10 xl:gap-5 ">
                        <div className="html flex justify-center items-center flex-col m-0 xl:m-6">
                            <SiHtml5 size={90} className= "m-10"/>
                            <p className="m-2">HTML</p>
                        </div>

                        <div className="css flex justify-center items-center flex-col m-0 xl:m-6">
                            <SiCss3 size={90} className= "m-10"/ >
                            <p className="m-2">CSS</p>
                        </div>

                        <div className="javascript flex justify-center items-center flex-col m-0 xl:m-6">
                            <SiJavascript size={90} className= "m-10"/ >
                            <p className="m-2">JavaScript</p>
                        </div>

                        <div className="react flex justify-center items-center flex-col m-0 xl:m-6">
                            <SiReact size={90} className= "m-10" / >
                            <p className="m-2">React</p>
                        </div>
                        <div className="vue flex justify-center items-center flex-col m-0 xl:m-6">
                            <SiVuedotjs size={90} className= "m-10" / >
                            <p className="m-2">Vue Js</p>
                        </div>

                         <div className="php flex justify-center items-center flex-col m-0 xl:m-6">
                            <SiPhp size={90} className= "m-10"/>
                            <p className="m-2">PHP</p>
                        </div>

                        <div className="node flex justify-center items-center flex-col m-0 xl:m-6">
                            <SiNodedotjs size={90} className= "m-10"/ >
                            <p className="m-2">Node JS</p>
                        </div>

                        <div className="express flex justify-center items-center flex-col m-0 xl:m-6">
                            <SiExpress size={90} className= "m-10"/ >
                            <p className="m-2">Express JS</p>
                        </div>

                        <div className="sql  flex justify-center items-center flex-col m-0 xl:m-6">
                            <SiMysql size={90} className= "m-10" / >
                            <p className="m-2">MySQL</p>
                        </div>
                        <div className="mongodb flex justify-center items-center flex-col m-0 xl:m-6">
                            <SiMongodb size={90} className= "m-10" / >
                            <p className="m-2">Mongo DB</p>
                        </div>
   
                    </div>
                    <div className="experience-wrapper p-6 mt-20 xl:mt-20 xl:h-fit xl:mr-10 xl:p-10" >
                            <div className="experience">
                                <h1 className="text-center font-bold text-[30px]">Experience through my journey !</h1>
                                <div className="front-end flex gap-10 items-center mt-20 mb-20">
                                    <p className="font-bold text-lg">Front-End Technologies</p>
                                    <Line percent={60} strokeWidth={4} strokeColor="#D3D3D3" />
                                </div>
                                <div className="front-end flex gap-10 items-center mt-20 mb-20">
                                    <p className="font-bold text-lg">Back-End Technologies</p>
                                    <Line percent={40} strokeWidth={4} strokeColor="#D3D3D3" />
                                </div>
                                <div className="front-end flex gap-10 items-center mt-20 mb-20">
                                    <p className="font-bold text-lg">Other Technologies</p>
                                    <Line percent={10} strokeWidth={4} strokeColor="#D3D3D3" />
                                </div>
                            </div>
                    </div>
                    </div>
            </div>
    )
}

export default Skills