import React from "react"
import {MdDeveloperMode} from 'react-icons/md'
import {FaAppStoreIos} from 'react-icons/fa'
import {SiAdobeindesign} from 'react-icons/si'
import { TypeAnimation } from "react-type-animation"
import './service.css'

const Service = ()=>{
    return(
        <div className="service text-white xl:pt-[8%]">
            
                <div className="title text-center text-[33px] font-bold xl:text-[42px] pt-[20%] pb-[20%] xl:mb-[6%] xl:p-0">
                <TypeAnimation
                    sequence={['Service Provide For Clients', 1000]}
                    repeat={Infinity}
                    cursor={true}
                    className=""
                />
                </div>

                <div className="service-wrapper flex gap-10 ml-[5%] mr-[5%] flex-cols flex-wrap xl:flex-nowrap">
                    <div className="user-interface flex flex-col justify-center items-center">
                            <SiAdobeindesign color="" size={"230"} />
                            <p className="p-[10%] text-[20px] font-bold text-center">UI/UX Design</p>
                            <div className="description">
                                <p className="text-center">Provide websites that look modern,minimalistic and easy on the eye.</p>
                            </div>
                    </div>

                    <div className="web-development flex flex-col justify-center items-center">
                            <MdDeveloperMode color="" size={"240"} />
                            <p className="p-[10%] text-[20px] font-bold text-center">Web Development</p>
                            <div className="description">
                                <p className="text-center">I can provide a full fledged web app which looks great and feels great to naviagate around.</p>
                            </div>
                    </div>

                    <div className="mobile-app flex flex-col justify-center items-center" >
                            <FaAppStoreIos color="" size={"240"} />
                            <p className="p-[10%] text-[20px] font-bold text-center">Mobile Application Development</p>
                            <div className="description">
                                <p className="text-center">Creating Mobile apps that feel native and provide great value and experience.</p>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Service