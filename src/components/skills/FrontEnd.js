import React, { useEffect, useState } from 'react'

import { ReactComponent as Tailwind } from "../../images/skills/tailwindcss.svg";
import { ReactComponent as ReactIcon } from "../../images/skills/react.svg";
import { ReactComponent as Html } from "../../images/skills/html5.svg";

function FrontEnd() {
    const [loadHeight, setLoadHeight] = useState('flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0');
    const [loadHeight2, setLoadHeight2] = useState('flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0');
    const [loadHeight3, setLoadHeight3] = useState('flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0');
    
    useEffect(() => {
        setTimeout(function () {
            setLoadHeight("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 -translate-y-24");
            setLoadHeight2("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 -translate-y-24");
            setLoadHeight3("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 -translate-y-24");
        }, 100);

        setTimeout(function () {
            setLoadHeight("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0");
        }, 400);

        setTimeout(function () {
            setLoadHeight2("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0");
        }, 500);

        setTimeout(function () {
            setLoadHeight3("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0");
        }, 600);
    }, []);

    return (
        <div class="flex flex-wrap items-center justify-center">
            <div class={loadHeight}>
                <div class="relative text-white px-6 pb-6 mt-10">
                        <ReactIcon />
                    <div class="flex justify-between my-3">
                        <span class="block font-semibold text-xl">
                            React
                        </span>
                    </div>
                    <span class="block opacity-75">
                        <div class="grid w-full h-1 grid-cols-10 gap-2 mt-3">
                            <div class="h-full col-span-2 bg-wood-4 rounded">
                            </div>
                            <div class="h-full col-span-2 bg-wood-4 rounded">
                            </div>
                            <div class="h-full col-span-2 bg-wood-4 rounded">
                            </div>
                            <div class="h-full col-span-2 bg-wood-4 rounded">
                            </div>
                            <div class="h-full col-span-2 bg-wood-2 rounded dark:bg-dark-1">
                            </div>
                        </div>
                    </span>
                </div>
            </div>


            <div class={loadHeight2}>
                <div class="relative text-white px-6 pb-6 mt-10">
                    <Tailwind />
                    <div class="flex justify-between my-3">
                        <span class="block font-semibold text-xl">
                            Tailwind CSS
                        </span>
                    </div>
                    <span class="block opacity-75">
                        <div class="grid w-full h-1 grid-cols-10 gap-2 mt-3">
                            <div class="h-full col-span-2 bg-wood-4 rounded">
                            </div>
                            <div class="h-full col-span-2 bg-wood-4 rounded">
                            </div>
                            <div class="h-full col-span-2 bg-wood-4 rounded">
                            </div>
                            <div class="h-full col-span-2 bg-wood-2 rounded dark:bg-dark-1">
                            </div>
                            <div class="h-full col-span-2 bg-wood-2 rounded dark:bg-dark-1">
                            </div>
                        </div>
                    </span>
                </div>
            </div>


            <div class={loadHeight3}>
                <div class="relative text-white px-6 pb-6 mt-10">
                    <Html />
                    <div class="flex justify-between my-3">
                        <span class="block font-semibold text-xl">
                            HTML
                        </span>
                    </div>
                    <span class="block opacity-75">
                        <div class="grid w-full h-1 grid-cols-10 gap-2 mt-3">
                            <div class="h-full col-span-2 bg-wood-4 rounded">
                            </div>
                            <div class="h-full col-span-2 bg-wood-4 rounded">
                            </div>
                            <div class="h-full col-span-2 bg-wood-4 rounded">
                            </div>
                            <div class="h-full col-span-2 bg-wood-2 rounded dark:bg-dark-1">
                            </div>
                            <div class="h-full col-span-2 bg-wood-2 rounded dark:bg-dark-1">
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FrontEnd