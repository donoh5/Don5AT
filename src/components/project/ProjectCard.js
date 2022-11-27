import React, { useEffect } from 'react'


function ProjectCard(props) {
    const [initStyle, setInitStyle] = React.useState("transform transition duration-500 scale-0 mb-6 2xl:mb-0 overflow-hidden shadow-lg rounded-lg h-60 2xl:h-auto w-80 3xl:w-96 cursor-pointer m-auto");

    useEffect(() => {
        setTimeout(function () {
            setInitStyle("transform transition duration-500 scale-110 mb-6 2xl:mb-0 overflow-hidden shadow-lg rounded-lg h-60 2xl:h-auto w-80 3xl:w-96 cursor-pointer m-auto");

            setTimeout(function () {
                setInitStyle("transform transition duration-500 hover:scale-105 mb-6 2xl:mb-0 overflow-hidden shadow-lg rounded-lg h-60 2xl:h-auto w-80 3xl:w-96 cursor-pointer m-auto");
            }, 500);
        }, props.item.time);
    }, []);

    return (
        <div class={initStyle}>
            <a href={""} target="_blank" class="w-full block h-full">
                <div class="h-40 w-full object-cover">
                    <img alt="blog photo" src={props.item.img} class="h-40 w-full object-cover" />
                </div>
                <div class="bg-white dark:bg-gray-800 w-full h-56 p-4 bg-opacity-50">
                    <p class="text-wood-1 text-md font-medium">
                        {props.item.status}
                    </p>
                    <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        {props.item.title}
                    </p>
                    <p class="text-gray-400 dark:text-gray-300 font-light text-md invisible 2xl:visible -mt-20 2xl:-mt-0">
                        {props.item.desc}
                    </p>
                    {props.item.needBr ? <br /> : null}<br/>
                    <div class="flex items-center mt-4">
                        <div class="flex flex-col justify-between text-sm">
                            <p class="text-gray-600">
                                {props.item.skills}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProjectCard