import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from './components/general/Navbar';
import Welcome from './pages/Welcome';

function App() {
    const location = useLocation();
    const [page, setPage] = useState(false);

    if(page || location.pathname !== "/"){return (
        <div class="bg-wood-pattern bg-wood-5 fixed w-screen">
            <Navbar />
        </div>
    );
    }
    else{
        return (
            <div class="invisible lg:visible">
                <Welcome setPage={setPage} />
            </div>
        );
    }
}

export default App;
