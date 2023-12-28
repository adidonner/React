import React from "react";
import Details from "../ContentArea/Details/Details";
import Skills from "../ContentArea/Skills/Skills";
import Header from "./Header/Header";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="layout">
			<header>
                <Header/>
            </header>
           <div>
             <Details/>
           </div>
           <div>
            <Skills/> 

           </div>
            
        </div>
    );
}

export default Layout;
