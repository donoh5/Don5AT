import React, { useState } from 'react';

import Navbar from './components/general/Navbar';
import Welcome from './pages/Welcome';

function App() {
    const [page, setPage] = useState(false);

    if(page){return (
        <div class="bg-wood-pattern bg-wood-5">
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