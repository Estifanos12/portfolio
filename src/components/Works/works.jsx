import React from 'react'
import {MdDeveloperMode} from 'react-icons/md'
import {FaAppStoreIos} from 'react-icons/fa'
import {SiAdobeindesign} from 'react-icons/si'
import { TypeAnimation } from "react-type-animation"

const Works = ()=>{
    return(
        <div className="skills text-white xl:pt-[5%] flex flex-col justify-center items-center">
        <div className="title">
            <TypeAnimation
                sequence={['Projects That I Have Done So Far', 1000]}
                repeat={Infinity}
                cursor={true}
                className=" text-center text-[33px] font-bold xl:text-[42px] pt-[20%] pb-[20%] xl:mb-[2%] xl:p-0"
            />
            </div> 
            

    </div>
    )
}

export default Works