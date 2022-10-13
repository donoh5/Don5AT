import React from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as FolderIcon } from "../../images/folder.svg";

function Icon() {
    return (
        <Link to="/">
            <span class="h-6 w-6 text-gray-300 mx-auto hover:text-white transition-colors duration-200">
                <FolderIcon />
            </span>
        </Link>
    )
}

export default Icon