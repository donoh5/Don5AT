import React, { useEffect, useState } from 'react'

import profilePic from '../../images/profile.jpg';

function Profile() {
    const [loadOpacity, setLoadOpacity] = useState('transform opacity-30 duration-700');
    const [loadHeight, setLoadHeight] = useState('xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded-2xl shadow-2xl transform transition-transform -translate-y-24 duration-700');
    const [loadHeight2, setLoadHeight2] = useState('flex flex-col text-center w-full transform transition-transform -translate-y-40 duration-1000');

    useEffect(() => {
        setLoadOpacity('transform opacity-100 duration-700');
        setLoadHeight('xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded-2xl shadow-2xl transform transition-transform translate-y-0 duration-700');
        setLoadHeight2('flex flex-col text-center w-full transform transition-transform translate-y-0 duration-1000');
    }, []);

    return (
        <div class={loadOpacity}>
            <img class={loadHeight} alt="Don" src={profilePic} />
            <div class={loadHeight2}>
                <h1 class="text-3xl font-bold title-font mb-4 text-wood-4">Donguk Oh</h1>
                <h1 class="text-xl font-medium title-font mb-4 text-wood-4">Full-stack Developer / Windows App Developer</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Experienced Windows-based application development with 9 months of internship experience with a large ERP System company in South Korea. Extending myself as a web full stack developer, with MERN technology stack and SpringBoot framework. Strong at debugging and solving problems.</p>
            </div>
        </div>
    )
}

export default Profile