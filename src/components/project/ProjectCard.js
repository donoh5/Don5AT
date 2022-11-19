import React, { useEffect } from 'react'


function ProjectCard(props) {
    const [initStyle, setInitStyle] = React.useState("transform transition duration-500 scale-0 overflow-hidden shadow-lg rounded-lg h-90 w-80 cursor-pointer m-auto");

    useEffect(() => {
        setTimeout(function () {
            setInitStyle("transform transition duration-500 scale-110 overflow-hidden shadow-lg rounded-lg h-90 w-80 cursor-pointer m-auto");

            setTimeout(function () {
                setInitStyle("transform transition duration-500 hover:scale-105 overflow-hidden shadow-lg rounded-lg h-96 w-80 cursor-pointer m-auto");
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
                    <p class="text-gray-400 dark:text-gray-300 font-light text-md">
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