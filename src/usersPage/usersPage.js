import React from 'react';
import Header from "../pages/header/Header"
import SideMenu from './usersPageParts'
import {CreateFooter} from "../aboutUs&Footer/aboutUs&Footer";
import './usersPage.css';



export default function UsersPage(){
    return (
        <div>
            <div>
            <Header/>
            </div>
            <div className="users-page">
            <SideMenu/>
            </div>
            <div>
                <></>
            </div>
            <CreateFooter/>
        </div>
    )
}


