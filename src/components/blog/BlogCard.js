import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import tempPic from '../../images/blog1_bg.jpg';
import windowsIcon from '../../images/windows.png';

function BlogCard(props) {
    return (
        <div class="transform transition duration-500 hover:scale-105 overflow-hidden shadow-lg rounded-lg h-90 w-80 cursor-pointer m-auto">
            <a href={"https://phrygian-herring-90e.notion.site/File-management-system-Part-1-ffe90d21e13a434eb4412d5e6ff604b2"} target="_blank" class="w-full block h-full">
                <img alt="blog photo" src={tempPic} class="max-h-40 w-full object-cover" />
                <div class="bg-white dark:bg-gray-800 w-full p-4 bg-opacity-50">
                    <p class=" text-wood-4 text-md font-medium">
                        {props.item.subTopic}
                    </p>
                    <p class="text-wood-4 dark:text-white text-xl font-medium mb-2">
                        {props.item.topic}
                    </p>
                    <p class="text-wood-3 dark:text-gray-300 font-light text-md" dangerouslySetInnerHTML={{__html: props.item.desc}}>
                    </p>
                    <div class="flex items-center mt-4">
                        <a href="#" class="block relative">
                            <img alt="profil" src={windowsIcon} class="mx-auto object-scale-down rounded-full h-10 w-10 " />
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