import React from 'react';
import {useSelector} from "react-redux";

function Menu() {
    const {menu} = useSelector(state => state)

    return (
        <ul className={menu ? "activeMenu" : "hiddenMenu"}>
            <li>Main Page</li>
            <li>About Page</li>
            <li>Contacts Page</li>
        </ul>
    );
}

export default Menu;