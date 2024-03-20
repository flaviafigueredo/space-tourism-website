import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';
import Logo from '/assets/shared/logo.svg';
import './header.css';

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const closeMenu = () => {
        setOpenMenu(false);
    }
    
    return (
        <header className='header'>
            <div className="logo">
                <img src={Logo} alt="Logo Space Tourism" />
            </div>

            <hr />

            <nav>
                <ul className="menu">
                    <li>
                        <NavLink to="/"  activeclassname="active">
                            <span>00</span> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/destination" activeclassname="active">
                            <span>01</span> Destination
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/crew" activeclassname="active">
                            <span>02</span> Crew
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/technology" activeclassname="active">
                            <span>03</span> Technology
                        </NavLink>
                    </li>
                </ul>

                <Menu className="mobile-menu" right width={"60%"} isOpen={openMenu} onStateChange={(state) => setOpenMenu(state.isOpen)}>
                    <NavLink to="/" activeclassname="active" onClick={closeMenu}>
                        <span>00</span> Home
                    </NavLink>
                    <NavLink to="/destination" activeclassname="active" onClick={closeMenu}>
                        <span>01</span> Destination
                    </NavLink>
                    <NavLink to="/crew" activeclassname="active" onClick={closeMenu}>
                        <span>02</span> Crew
                    </NavLink>
                    <NavLink to="/technology" activeclassname="active" onClick={closeMenu}>
                        <span>03</span> Technology
                    </NavLink>
                </Menu>
            </nav>
        </header>
    );
};