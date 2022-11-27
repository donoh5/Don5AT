import React, { useEffect, useState } from 'react'

function OtherExp() {
    const [loadOpacity, setLoadOpacity] = useState('transform opacity-30 duration-700 -mt-10 2xl:-mt-0');
    const [loadHeight, setLoadHeight] = useState('bg-wood-2 rounded-2xl shadow-xl dark:bg-gray-800 w-full mx-auto p-8 transform transition-transform -translate-y-40 duration-700');

    useEffect(() => {
        setLoadOpacity('transform opacity-100 duration-700 -mt-10 2xl:-mt-0');
        setLoadHeight('bg-wood-2 rounded-2xl shadow-xl dark:bg-gray-800 w-3/4 mx-auto p-8 transform transition-transform translate-y-0 duration-700');
    }, []);

    return (
        <div>
            <div class={loadOpacity}>
                <div class={loadHeight}>
                    <h2 class="text-center">Calgary’s Biggest Hackathon</h2>
                    <p class="text-gray-600 dark:text-white w-full m-auto text-center text-xl">
                    Participated in Hackathon for promoting Calgary’s downtown and completed and demonstrated a small web service.<br />
                        <p class="font-bold text-base text-left">
                            <br />•	Development was completed by constantly communicating with 10 team members for 48 hours.
                            <br />•	Developed a function to automatically post data from the web to Instagram, Twitter, Facebook, and e-mail immediately.
                            <br />•	Improved ability to solve problems faster.
                            <br />•	To complete the development in a short and limited time, learned how to communicate more effectively with the team.
                        </p>
                    </p>
                    <div class="flex items-center justify-center mt-8">
                        <div class="flex ml-2 items-center justify-center">
                            <span class="text-wood-4 text-md ml-2">
                                Calgary, AB, Canada &#40;Jul. 2022&#41;
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherExp