import React, { useEffect, useState } from 'react'

import WorkExpFirst from './WorkExpFirst';
import WorkExpSecond from './WorkExpSecond';

import { ReactComponent as LeftArrow } from "../../images/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../images/arrow-right.svg";

function WorkExp() {
    const [loadOpacity, setLoadOpacity] = useState('transform opacity-30 duration-700');
    const [loadHeight, setLoadHeight] = useState('bg-wood-2 rounded-2xl shadow-xl dark:bg-gray-800 w-full mx-auto p-8 transform transition-transform -translate-y-40 duration-700');

    useEffect(() => {
        setLoadOpacity('transform opacity-100 duration-700');
        setLoadHeight('bg-wood-2 rounded-2xl shadow-xl dark:bg-gray-800 w-3/4 mx-auto p-8 transform transition-transform translate-y-0 duration-700');
    }, []);

    const [workExp, setWorkExp] = useState(true);

    const handleArrow = () => {
        setWorkExp(!workExp);
    };

    return (
        <div class={loadOpacity}>
            <div class="absolute top-1/2 right-3/4 mr-52 text-4xl z-50">
                <button onClick={handleArrow}>
                    <div class="text-wood-4 hover:text-wood-3 transform hover:scale-110 transition duration-300">
                        <LeftArrow />
                    </div>
                </button>
            </div>
            <div class="absolute top-1/2 left-3/4 ml-52 text-4xl z-50">
                <button onClick={handleArrow}>
                    <div class="text-wood-4 hover:text-wood-3 transform hover:scale-110 transition duration-300">
                        <RightArrow />
                    </div>
                </button>
            </div>
            <div class={loadHeight}>
                {workExp === true ? <WorkExpFirst /> : <WorkExpSecond />}
            </div>
        </div>
    )
}

export default WorkExp