import React, {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import windowsIcon from '../../images/windows.png';

function BlogCard(props) {
    const [initStyle, setInitStyle] = React.useState("transform transition duration-500 scale-0 overflow-hidden shadow-lg rounded-lg h-auto w-80 3xl:w-96 cursor-pointer m-auto");
    
    useEffect(() => {
        setInitStyle("transform transition duration-500 scale-110 overflow-hidden shadow-lg rounded-lg h-auto w-80 3xl:w-96 cursor-pointer m-auto");

        setTimeout(function () {
            setInitStyle("transform transition duration-500 hover:scale-105 overflow-hidden shadow-lg rounded-lg h-auto w-80 3xl:w-96 cursor-pointer m-auto");
        }, 500);
    }, []);

    return (
        <div class={initStyle}>
            <a href={props.item.link} target="_blank" class="w-full block h-full">
                <div class="h-32 2xl:h-40 w-full object-cover">
                    <img alt="blog photo" src={props.item.img} class="h-32 2xl:h-40 w-full object-cover" />
                </div>
                <div class="bg-white dark:bg-gray-800 w-full p-4 bg-opacity-50">
                    <p class=" text-wood-4 text-md font-medium">
                        {props.item.subTopic}
                    </p>
                    <p class="text-wood-4 dark:text-white text-xl font-medium mb-2">
                        {props.item.topic}
                    </p>
                    <p class="text-wood-3 invisible 2xl:visible h-0 2xl:h-auto dark:text-gray-300 font-light text-md" dangerouslySetInnerHTML={{__html: props.item.desc}}>
                    </p>
                    <div class="flex items-center mt-4">
                        <a href="#" class="block relative">
                            <img alt="profil" src={windowsIcon} class="mx-auto object-scale-down rounded-full h-10 w-10" />
                        </a>
                        <div class="flex flex-col justify-between ml-4 text-sm">
                            <p class="text-gray-800 dark:text-white">
                                {props.item.author}
                            </p>
                            <p class="text-gray-400 dark:text-gray-300">
                                {props.item.date}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default BlogCard