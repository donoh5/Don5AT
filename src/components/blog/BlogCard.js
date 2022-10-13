import React from 'react'

import tempPic from '../../images/blog1_bg.jpg';
import windowsIcon from '../../images/windows.png';

function BlogCard() {
    return (
        <div class="transition ease-in-out hover:scale-110 duration-300 overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a href="#" class="w-full block h-full">
                <img alt="blog photo" src={tempPic} class="max-h-40 w-full object-cover" />
                <div class="bg-white dark:bg-gray-800 w-full p-4 bg-opacity-50">
                    <p class=" text-wood-4 text-md font-medium">
                        Emerging trends
                    </p>
                    <p class="text-wood-4 dark:text-white text-xl font-medium mb-2">
                        File management system 1
                    </p>
                    <p class="text-wood-3 dark:text-gray-300 font-light text-md">
                        - C# Winform <br/>
                        - Google Drive API
                    </p>
                    <div class="flex items-center mt-4">
                        <a href="#" class="block relative">
                            <img alt="profil" src={windowsIcon} class="mx-auto object-scale-down rounded-full h-10 w-10 " />
                        </a>
                        <div class="flex flex-col justify-between ml-4 text-sm">
                            <p class="text-gray-800 dark:text-white">
                                Donguk Oh
                            </p>
                            <p class="text-gray-400 dark:text-gray-300">
                                15 Oct. 2022
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default BlogCard