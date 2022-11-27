import React, {useEffect, useState} from 'react'

import { init, send } from 'emailjs-com';

import { ReactComponent as LinkedIn } from "../images/linkedin.svg";
import { ReactComponent as GitHub } from "../images/github.svg";

function Contact() {
    const [email, setEmail] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        init('Te8fGqWnXOL9RMfo5');
    }, []);

    const handleChange = (e) => {
        setEmail({
            ...email,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        send('service_zvlrl3f', 'template_aygd3wa', email)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        alert('Message sent!');
    };

    const [initStyle, setInitStyle] = useState("text-gray-600 body-font relative transform transition duration-1000 -translate-y-192");

    useEffect(() => {
        setInitStyle("text-gray-600 body-font relative transform transition duration-1000 translate-y-0");
    }, []);
    
    return (
        <section class={initStyle}>
            <div class="container px-5 2xl:py-24 py-12 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Me</h1>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto -mt-10 2xl:-mt-0">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" onChange={handleChange} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-wood-1 focus:bg-white focus:ring-2 focus:ring-wood-3 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" onChange={handleChange} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-wood-1 focus:bg-white focus:ring-2 focus:ring-wood-3 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" onChange={handleChange} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-wood-1 focus:bg-white focus:ring-2 focus:ring-wood-3 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <button onClick={handleSubmit} class="flex mx-auto text-white bg-wood-3 border-0 py-2 px-8 focus:outline-none hover:bg-wood-1 rounded text-lg">Send Message</button>
                        </div>
                        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <a class="text-wood-4">okdonguk0@gmail.com</a>
                            <p class="leading-normal my-5">Calgary, AB
                                <br />(403) 471-0572
                            </p>
                            <span class="inline-flex">
                                <a class="text-gray-500" href='https://www.linkedin.com/in/donguk-oh-2a1285200/' target='_blank'>
                                    <LinkedIn />
                                </a>
                                <a class="ml-4 text-gray-500" href='https://github.com/donoh5' target='_blank'>
                                    <GitHub />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact