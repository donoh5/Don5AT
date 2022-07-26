import React, { useEffect, useState } from 'react'

import { ReactComponent as Azure } from "../../images/skills/microsoftazure.svg";

function Others() {
    const [loadHeight, setLoadHeight] = useState('flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-52 h-36 2xl:w-60 2xl:h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0');

    useEffect(() => {
        setTimeout(function () {
            setLoadHeight("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-52 h-36 2xl:w-60 2xl:h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 -translate-y-16");
        }, 100);

        setTimeout(function () {
            setLoadHeight("flex-shrink-0 mx-4 -mb-6 relative overflow-hidden w-52 h-36 2xl:w-60 2xl:h-40 bg-wood-3 rounded-lg max-w-xs shadow-lg transform hover:scale-110 duration-300 translate-y-0");
        }, 400);
    }, []);

    return (
        <div class="flex flex-wrap items-center justify-center">
            <div class="flex-shrink-0 mx-4 -mb-6 relative w-52 h-36 2xl:w-60 2xl:h-40 max-w-xs opacity-0">
            </div>

            <div class={loadHeight}>
                <div class="relative text-white px-6 pb-6 mt-10">
                    <div class="m-auto w-16 h-16 -mt-6 2xl:-mt-3 -mb-3 animate-pulse transform scale-90 2xl:scale-100">
                        <Azure />
                    </div>
                    <div class="flex justify-between my-3">
                        <span class="block font-semibold text-xl">
                            Azure
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

            <div class="flex-shrink-0 mx-4 -mb-6 relative w-52 h-36 2xl:w-60 2xl:h-40 max-w-xs opacity-0">
            </div>
        </div>
    )
}

export default Others