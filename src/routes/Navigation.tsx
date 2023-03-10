import { BrowserRouter, Navigate } from "react-router-dom"
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import Logo from '../assets/react.svg';
import { ShoppingPage } from "../componentPatterns/pages/ShoppingPage";
import {LazyPage1,LazyPage2,LazyPage3} from '../lazyload/pages'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={Logo} alt = "React Logo"/>
                    
                    <ul>
                        <li>
                            <NavLink to={'/'} className={({isActive})=>isActive ? 'nav-active' : ''}>Shopping</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to={'/lazy2'} className={({isActive})=>isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to={'/lazy3'} className={({isActive})=>isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
                        </li>
                    </ul>
                </nav>
                
            <Routes>
                <Route path="/" element={<ShoppingPage/>}/>
                <Route path="lazy2" element={<LazyPage2/>}/>
                <Route path="lazy3" element={<LazyPage3/>}/>

                <Route path="/*" element={<Navigate to="/lazy1" replace/>}/>
            </Routes>
            </div>
        </BrowserRouter>
    )
}
