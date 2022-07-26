import React, { useEffect, useState } from 'react'

import saitLogo from '../../images/sait.png';

function Education() {
    const [loadOpacity, setLoadOpacity] = useState('transform opacity-30 duration-700 -mt-10 2xl:-mt-0');
    const [loadHeight, setLoadHeight] = useState('object-cover object-center rounded-2xl shadow-2xl transform transition-transform -translate-y-24 duration-700');
    const [loadHeight2, setLoadHeight2] = useState('flex flex-col text-center w-full transform transition-transform -translate-y-40 duration-1000');

    useEffect(() => {
        setLoadOpacity('transform opacity-100 duration-700 -mt-10 2xl:-mt-0');
        setLoadHeight('object-cover object-center transform transition-transform translate-y-0 duration-700');
        setLoadHeight2('flex flex-col text-center w-full transform transition-transform translate-y-0 duration-1000');
    }, []);

    return (
        <div>
            <div class={loadOpacity}>
                <div class="w-1/6 block mx-auto mb-10">
                    <img class={loadHeight} alt="SAIT" src={saitLogo} />
                </div>
                <div class={loadHeight2}>
                    <h1 class="text-3xl font-bold title-font mb-4 text-wood-4">SAIT (Calgary, AB)</h1>
                    <h1 class="text-xl font-medium title-font mb-4 text-wood-4">Software Development Diploma</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">May 2021 - Dec 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Education