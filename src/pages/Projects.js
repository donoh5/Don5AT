import React from 'react'

function Projects() {
    return (
        <section class="">
            <div class="container px-12 py-12 mx-auto">
                <h1 class="text-3xl font-semibold text-center text-wood-4 capitalize lg:text-4xl"> Projects
                </h1>


                <div class="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
                    <button
                        class="h-12 px-8 py-2 -mb-px text-sm text-center text-wood-1 bg-transparent border-b-2 border-wood-4 sm:text-base whitespace-nowrap focus:outline-none">
                        All
                    </button>

                    <button
                        class="h-12 px-8 py-2 -mb-px text-sm text-center text-wood-1 bg-transparent border-b-2 border-gray-200 sm:text-base whitespace-nowrap cursor-base focus:outline-none hover:border-wood-3">
                        Web Fullstack
                    </button>

                    <button
                        class="h-12 px-8 py-2 -mb-px text-sm text-center text-wood-1 bg-transparent border-b-2 border-gray-200 sm:text-base whitespace-nowrap cursor-base focus:outline-none hover:border-wood-3">
                        Windwos app
                    </button>

                    <button
                        class="h-12 px-8 py-2 -mb-px text-sm text-center text-wood-1 bg-transparent border-b-2 border-gray-200 sm:text-base whitespace-nowrap cursor-base focus:outline-none hover:border-wood-3">
                        Others
                    </button>
                </div>

                <section class="mt-8 space-y-8 lg:mt-12">
                    <section class="lg:flex lg:items-center">
                        <div class="lg:w-1/2 ">
                            <p class="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
                            <h2 class="mt-2 text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Block
                                of Ui kit collections</h2>
                        </div>

                        <div class="mt-4 lg:w-1/2 lg:mt-0">
                            <img class="object-cover w-full h-64 rounded-lg md:h-96"
                                src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                alt="" />
                        </div>
                    </section>

                    <section class="lg:flex lg:items-center">
                        <div class="lg:w-1/2 ">
                            <p class="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Wareframe</p>
                            <h2 class="mt-2 text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Best
                                free website layout </h2>
                        </div>

                        <div class="mt-4 lg:w-1/2 lg:mt-0">
                            <img class="object-cover w-full h-64 rounded-lg md:h-96"
                                src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                                alt="" />
                        </div>
                    </section>
                </section>
            </div>
        </section>
    )
}

export default Projects