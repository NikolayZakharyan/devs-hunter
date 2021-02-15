import React from 'react';
import Header from "../pages/header/Header"
import SideMenu from './usersPageParts'
// import {CreateFooter} from "../aboutUs&Footer/aboutUs&Footer";
import './usersPage.css';
import Navbar from '../components/navbar/Navbar';



export default function UsersPage({user}){
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="users-page">
                <SideMenu user={user }/>
            </div>
            <div>
                <></>
            </div>
            {/* <CreateFooter/> */}
        </div>
    )
}


