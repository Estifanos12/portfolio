import "./Skills.css"
import { TypeAnimation } from "react-type-animation"
import {SiHtml5,SiCss3,SiJavascript,SiReact,SiVuedotjs,SiNodedotjs,SiExpress,SiMysql,SiMongodb,SiPhp} from "react-icons/si"

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
                    <div className="skill grid grid-cols-2 gap-10 md:grid-cols-4 ml-3 mr-3 xl:grid-cols-5 xl:gap-5">

                        <div className="html flex justify-center items-center flex-col m-0 xl:m-10">
                            <SiHtml5 size={90} className= "m-10"/>
                            <p className="m-2">HTML</p>
                        </div>

                        <div className="css flex justify-center items-center flex-col m-0 xl:m-10">
                            <SiCss3 size={90} className= "m-10"/ >
                            <p className="m-2">CSS</p>
                        </div>

                        <div className="javascript flex justify-center items-center flex-col m-0 xl:m-10">
                            <SiJavascript size={90} className= "m-10"/ >
                            <p className="m-2">JavaScript</p>
                        </div>

                        <div className="react flex justify-center items-center flex-col m-0 xl:m-10">
                            <SiReact size={90} className= "m-10" / >
                            <p className="m-2">React</p>
                        </div>
                        <div className="vue flex justify-center items-center flex-col m-0 xl:m-10">
                            <SiVuedotjs size={90} className= "m-10" / >
                            <p className="m-2">Vue Js</p>
                        </div>

                         <div className="php flex justify-center items-center flex-col m-0 xl:m-10">
                            <SiPhp size={90} className= "m-10"/>
                            <p className="m-2">PHP</p>
                        </div>

                        <div className="node flex justify-center items-center flex-col m-0 xl:m-10">
                            <SiNodedotjs size={90} className= "m-10"/ >
                            <p className="m-2">Node JS</p>
                        </div>

                        <div className="express flex justify-center items-center flex-col m-0 xl:m-10">
                            <SiExpress size={90} className= "m-10"/ >
                            <p className="m-2">Express JS</p>
                        </div>

                        <div className="sql  flex justify-center items-center flex-col m-0 xl:m-10">
                            <SiMysql size={90} className= "m-10" / >
                            <p className="m-2">MySQL</p>
                        </div>
                        <div className="mongodb flex justify-center items-center flex-col m-0 xl:m-10">
                            <SiMongodb size={90} className= "m-10" / >
                            <p className="m-2">Mongo DB</p>
                        </div>
   
                    </div>
                </div>
            </div>
    )
}

export default Skills