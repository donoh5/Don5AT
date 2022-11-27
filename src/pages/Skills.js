import React, { useState, useEffect } from 'react'

import FrontEnd from '../components/skills/FrontEnd';
import BackEnd from '../components/skills/BackEnd';
import Database from '../components/skills/Database';
import Others from '../components/skills/Others';

import { ReactComponent as LeftArrow } from "../images/arrow-left.svg";
import { ReactComponent as RightArrow } from "../images/arrow-right.svg";

function Skills() {
    const [partList, setPartList] = useState(["Frontend", "Backend", "Database", "Others"]);
    const [part, setPart] = useState(0);
    const [partPrev, setPartPrev] = useState(3);
    const [partNext, setPartNext] = useState(1);

    const [partAnimation1, setPartAnimation1] = useState("absolute text-left mt-1 left-1/4 -ml-36 mb-20 transform opacity-100 duration-300");
    const [partAnimation2, setPartAnimation2] = useState("absolute text-right mt-1 right-1/4 -mr-36 mb-20 transform opacity-100 duration-300");
    const [partAnimation3, setPartAnimation3] = useState("text-center mb-20 transform opacity-100 duration-300");

    const handleArrow = (direction) => {
        if(direction === "left") {
            setPartAnimation2("absolute text-right mt-1 right-1/4 -mr-36 mb-20 transform opacity-0 duration-300");

            setTimeout(function(){
                setPartAnimation3("text-center mb-20 transform opacity-0 duration-300");
            }, 100);

            setTimeout(function(){
                setPartNext(partNext === 0 ? 3 : partNext - 1);
                setPartAnimation1("absolute text-left mt-1 left-1/4 -ml-36 mb-20 transform opacity-0 duration-300");
                setPartAnimation2("absolute text-right mt-1 right-1/4 -mr-36 mb-20 transform opacity-100 duration-300");
            }, 200);

            setTimeout(function(){
                setPart(partPrev);
                setPartAnimation3("text-center mb-20 transform opacity-100 duration-300");
            }, 300);

            setTimeout(function(){
                setPartPrev(partPrev === 0 ? 3 : partPrev - 1);
                setPartAnimation1("absolute text-left mt-1 left-1/4 -ml-36 mb-20 transform opacity-100 duration-300");
            }, 400);
        } else {
            setPartAnimation1("absolute text-left mt-1 left-1/4 -ml-36 mb-20 transform opacity-0 duration-300");

            setTimeout(function(){
                setPartAnimation3("text-center mb-20 transform opacity-0 duration-300");
            }, 100);

            setTimeout(function(){
                setPartPrev(partPrev === 3 ? 0 : partPrev + 1);
                setPartAnimation2("absolute text-right mt-1 right-1/4 -mr-36 mb-20 transform opacity-0 duration-300");
                setPartAnimation1("absolute text-left mt-1 left-1/4 -ml-36 mb-20 transform opacity-100 duration-300");
            }, 200);

            setTimeout(function(){
                setPart(partNext);
                setPartAnimation3("text-center mb-20 transform opacity-100 duration-300");
            }, 300);

            setTimeout(function(){
                setPartNext(partNext === 3 ? 0 : partNext + 1);
                setPartAnimation2("absolute text-right mt-1 right-1/4 -mr-36 mb-20 transform opacity-100 duration-300");
            }, 400);
        }
    };

    const [initStyle, setInitStyle] = useState("container px-5 pt-14 2xl:py-24 mx-auto transform transition duration-500 -translate-y-192");

    useEffect(() => {
        setInitStyle("container px-5 pt-14 2xl:py-24 mx-auto transform transition duration-500 translate-y-0");
    }, []);

    return (
        <section class="text-gray-600 body-font">
            <div class={initStyle}>
                <div class="absolute right-1/2 mr-48 z-50">
                    <button onClick={() => handleArrow("left")}>
                        <div class="text-wood-4 hover:text-wood-3 transform hover:scale-110 transition duration-300">
                            <LeftArrow />
                        </div>
                    </button>
                </div>
                <div class="absolute left-1/2 ml-48 z-50">
                    <button onClick={() => handleArrow("right")}>
                        <div class="text-wood-4 hover:text-wood-3 transform hover:scale-110 transition duration-300">
                            <RightArrow />
                        </div>
                    </button>
                </div>
                <div class={partAnimation1}>
                    <h1 class="text-lg 2xl:text-xl font-medium text-center title-font text-opacity-70 text-gray-900 mb-4">{partList[partPrev]}</h1>
                </div>
                <div class={partAnimation2}>
                    <h1 class="text-lg 2xl:text-xl font-medium text-center title-font text-gray-900 mb-4">{partList[partNext]}</h1>
                </div>
                <div class={partAnimation3}>
                    <h1 class="sm:text-2xl 2xl:text-3xl font-medium text-center title-font text-opacity-70 text-gray-900 mb-4">{partList[part]}</h1>
                </div>
            </div>
            {part === 0 ? <FrontEnd /> : part === 1 ? <BackEnd /> : part === 2 ? <Database /> : <Others />}
        </section>
    )
}

export default Skills