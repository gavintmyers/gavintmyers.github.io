import './Home.css'
import React from "react";
import logo from "./moon.png";
import {NestedLinkButton, openLink} from "./utils";
// import scryglass_thumbnail from "./scryglass_thumbnail.svg";
import { useLocation } from 'react-router-dom'

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

var navCardTitles = {
    'portfolio': 'Portfolio',
    'about_me': 'About Me',
    'resume': 'Resumé', // TODO: make accents random
    'contact': 'Contact',
}

function NavCard({cardKey}) {
    var cardTitle = navCardTitles[cardKey]
    let cardClasses = "card Home-navcard align-self-center";
    if (useLocation().pathname === `/${cardKey}`) {
        cardClasses += " Home-navcard-active"
    }

    return (
        <div className={cardClasses} onClick={
            (e) => { e.preventDefault(); openLink(`http://localhost:3000/${cardKey}`)
            }}>
            <div className="card-body">
                <h1 className="card-title">{cardTitle}</h1>
            </div>
        </div>
    )
}

function Home() {
    return (
        <div className="home">
            <header className="Home-header center">
                <br/>
                <img src={logo} className="Moon-image" alt="logo" />
                <br/>
                <br/>

                {/*<code>Gavin Myers personal site</code>*/}
                {/*<code>(in progress)</code>*/}
                <b>Gavin Myers personal site</b> (in progress)
                <br/>
                <br/>
                <br/>
                <div className="Home-navbox d-flex flex-column content">
                    <NavCard cardKey={'portfolio'} />
                    <NavCard cardKey={'about_me'} />
                    <NavCard cardKey={'resume'} />
                    <NavCard cardKey={'contact'} />
                </div>
                <br/>
            </header>
        </div>
    );
}

export default Home;
