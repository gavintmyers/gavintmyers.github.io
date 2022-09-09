import './Portfolio.css';

function Portfolio() {
    return (
        <div className="Portfolio">
            <header className="Portfolio-header">
                <p>
                    This is a sort of Portfolio?
                </p>
            </header>
            {/*<body>*/}
                <a
                    className="App-link"
                    href="https://github.com/annkissam/scryglass#readme"
                    target="_blank" // opens in new tab
                    rel="noopener noreferrer"
                >
                    Scryglass Ruby Tool
                </a>
                {' '} that i made {/* or can use &nbsp; */}
                <br/><br/>
                [Other projects to fill out]
            {/*</body>*/}
        </div>
    );
}

export default Portfolio;
