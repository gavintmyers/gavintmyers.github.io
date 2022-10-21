// import React from 'react';
import './Portfolio.css'
import livy_thumbnail from "./livy_thumbnail.png";
import scryglass_thumbnail from "./scryglass_thumbnail.svg";
// import ReactTooltip from "react-tooltip";
// import {
//     Link
// } from "react-router-dom";
import {
    NestedLinkButton,
    openLink
} from './utils'

function Portfolio() {
    return (
        <div className="Portfolio container">
            <header className="Portfolio-header">
                <p>
                    This is a sort of Portfolio?
                </p>
            </header>
            <div className="row g-4">
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="card Portfolio-card" onClick={
                        (e) => { e.preventDefault(); openLink("http://localhost:3000/scryglass")
                    }}>
                        <img src={scryglass_thumbnail} margin-left="10" className="card-img-top Portfolio-card-thumbnail" alt="..."
                             data-tip="'Crystal ball icon' attribution:<br>
                         by 'Lorc' at https://game-icons.net/1x1/lorc/crystal-ball.html<br>
                         License: CC BY 3.0">
                        </img>

                        <div className="card-body">
                            <h1 className="card-title">Scryglass Ruby Tool</h1>
                            <p className="card-text">With supporting text below as a natural lead-in to additional
                                content.</p>
                            {/*<a href="https://github.com/annkissam/scryglass#readme" className="btn btn-primary" onClick=" ">Github</a>*/}
                            {NestedLinkButton("Github", "https://github.com/annkissam/scryglass#readme")}
                            {' '}
                            {NestedLinkButton("Rubygems.org", "https://rubygems.org/gems/scryglass")}
                        </div>
                    </div>

                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="card Portfolio-card" onClick={
                        (e) => {e.preventDefault(); openLink("http://localhost:3000/livy")
                    }}>
                        <img src={livy_thumbnail} className="card-img-top Portfolio-card-thumbnail" alt="this?"></img>

                        <div className="card-body">
                            <h1 className="card-title">.livy Bash Tool</h1>
                            <p className="card-text">With supporting text below as a natural lead-in to additional
                                content.</p>
                            {NestedLinkButton("Github", "#")}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="card Portfolio-card">
                        <img src={livy_thumbnail} className="card-img-top Portfolio-card-thumbnail" alt="this?"></img>

                        <div className="card-body">
                            <h1 className="card-title">.livy Bash Tool</h1>
                            <p className="card-text">With supporting text below as a natural lead-in to additional
                                content.</p>
                            {NestedLinkButton("Github", "#")}
                        </div>
                    </div>
                </div>
            </div>
            {/*<body>*/}
            {/*    <a*/}
            {/*        className="App-link"*/}
            {/*        href="https://github.com/annkissam/scryglass#readme"*/}
            {/*        target="_blank" // opens in new tab*/}
            {/*        rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*        Scryglass Ruby Tool*/}
            {/*    </a>*/}
            {/*    {' '} that i made /!* or can use &nbsp; *!/*/}
            {/*    <br/><br/>*/}
            <div>
                [Other projects to fill out]

            </div>
            {/*</body>*/}
        </div>
    );
}

export default Portfolio;
