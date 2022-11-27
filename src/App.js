import React, { useState } from 'react';

import Navbar from './components/general/Navbar';
import Welcome from './pages/Welcome';

function App() {
    const [page, setPage] = useState(false);

    if (page || window.location.pathname !== "/") {
        return (
            <div class="bg-wood-pattern bg-wood-5 fixed w-screen">
                <div class="invisible lg:visible">
                    <Navbar />
                </div>
                <div class="visible lg:invisible absolute top-1/3">
                    <p class="text-center w-screen text-2xl text-wood-4 font-bold">
                        Please view this website on a larger screen.
                    </p>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <Welcome setPage={setPage} />
            </div>
        );
    }
}

export default App;
