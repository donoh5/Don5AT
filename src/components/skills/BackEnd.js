import React, { useEffect, useState } from 'react'

import { ReactComponent as DotNet } from "../../images/skills/dot-net.svg";
import { ReactComponent as Spring } from "../../images/skills/spring.svg";
import { ReactComponent as NodeJS } from "../../images/skills/node-dot-js.svg";
import { ReactComponent as CSharp } from "../../images/skills/csharp.svg";
import { ReactComponent as Java } from "../../images/skills/java.svg";
import { ReactComponent as JavaScript } from "../../images/skills/javascript.svg";
import { ReactComponent as Python } from "../../images/skills/python.svg";


function BackEnd() {
    const [loadHeight, setLoadHeight] = useState('flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0');
    const [loadHeight2, setLoadHeight2] = useState('flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0');
    const [loadHeight3, setLoadHeight3] = useState('flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0');
    const [loadHeight4, setLoadHeight4] = useState('flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0');
    const [loadHeight5, setLoadHeight5] = useState('flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0');
    const [loadHeight6, setLoadHeight6] = useState('flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0');
    const [loadHeight7, setLoadHeight7] = useState('flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0');
    
    useEffect(() => {
        setTimeout(function () {
            setLoadHeight("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 -translate-y-24");
            setLoadHeight2("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 -translate-y-24");
            setLoadHeight3("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 -translate-y-24");    setLoadHeight3("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 -translate-y-24");
            setLoadHeight4("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 -translate-y-24");
            setLoadHeight5("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 -translate-y-24");
            setLoadHeight6("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 -translate-y-24");
            setLoadHeight7("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 -translate-y-24");
        }, 100);

        setTimeout(function () {
            setLoadHeight7("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0");
        }, 400);

        setTimeout(function () {
            setLoadHeight4("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0");
        }, 500);

        setTimeout(function () {
            setLoadHeight5("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0");
        }, 600);

        setTimeout(function () {
            setLoadHeight6("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0");
        }, 700);

        setTimeout(function () {
            setLoadHeight("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0");
        }, 800);

        setTimeout(function () {
            setLoadHeight2("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0");
        }, 900);

        setTimeout(function () {
            setLoadHeight3("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-60 h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0");
        }, 1000);
    }, []);

    return (
        <>
        <div class="flex flex-wrap items-center justify-center">
            <div class={loadHeight}>
                <div class="relative text-white px-6 pb-6 mt-10">
                    <DotNet />
                    <div class="flex justify-between my-3">
                        <span class="block font-semibold text-xl">
                            .Net
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
                    <Spring />
                    <div class="flex justify-between my-3">
                        <span class="block font-semibold text-xl">
                            Springboot
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
                    <NodeJS />
                    <div class="flex justify-between my-3">
                        <span class="block font-semibold text-xl">
                            NodeJS
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
        </div>

        <div class="flex flex-wrap items-center justify-center mt-12">
            <div class={loadHeight4}>
                <div class="relative text-white px-6 pb-6 mt-10">
                    <div class="m-auto w-14 h-14 -mt-3 -mb-1 animate-pulse">
                        <CSharp />
                    </div>
                    <div class="flex justify-between my-3">
                        <span class="block font-semibold text-xl">
                            C#
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
                            <div class="h-full col-span-2 bg-wood-4 rounded">
                            </div>
                        </div>
                    </span>
                </div>
            </div>
            
            <div class={loadHeight5}>
                <div class="relative text-white px-6 pb-6 mt-10">
                    <Java />
                    <div class="flex justify-between my-3">
                        <span class="block font-semibold text-xl">
                            Java
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

            <div class={loadHeight6}>
                <div class="relative text-white px-6 pb-6 mt-10">
                    <JavaScript />
                    <div class="flex justify-between my-3">
                        <span class="block font-semibold text-xl">
                            Javascript
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
        </div>

        <div class="flex flex-wrap items-center justify-center mt-12">
            <div class="flex-shrink-0 mx-4 -mb-6 relative w-60 h-40 max-w-xs opacity-0">
            </div>
            
            <div class={loadHeight7}>
                <div class="relative text-white px-6 pb-6 mt-10">
                    <Python />
                    <div class="flex justify-between my-3">
                        <span class="block font-semibold text-xl">
                            Python
                        </span>
                    </div>
                    <span class="block opacity-75">
                        <div class="grid w-full h-1 grid-cols-10 gap-2 mt-3">
                            <div class="h-full col-span-2 bg-wood-4 rounded">
                            </div>
                            <div class="h-full col-span-2 bg-wood-4 rounded">
                            </div>
                            <div class="h-full col-span-2 bg-wood-2 rounded dark:bg-dark-1">
                            </div>
                            <div class="h-full col-span-2 bg-wood-2 rounded dark:bg-dark-1">
                            </div>
                            <div class="h-full col-span-2 bg-wood-2 rounded dark:bg-dark-1">
                            </div>
                        </div>
                    </span>
                </div>
            </div>

            <div class="flex-shrink-0 mx-4 -mb-6 relative w-60 h-40 max-w-xs opacity-0">
            </div>
        </div>
        </>
    )
}

export default BackEnd