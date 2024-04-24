function NestedLinkButton(content, linkPath) {
    return NestedLink(content, linkPath, "btn btn-primary")
}
function NestedLink(content, linkPath, classes = "") {
    // The `onClick=" "` is crucial for allowing this link to be clicked even when it's inside a <Link>
    return (
        // Though this hyperlink itself will not get hit under normal circumstances...
        //   These 'rel' options are to cover the "_blank" vulnerability: https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
        //   The 'href' is there so the show-link-path-on-hover browser functionality will work
        <a href={linkPath} className={classes} rel="noopener noreferrer" onClick={(e) => {
            e.preventDefault(); e.stopPropagation();
            openInNewTab(linkPath)
        }}>{content}</a>
    );
}

const openInNewTab = (url) => {
    // Use 'noopener,noreferrer' and nullify the opener to cover the "_blank" vulnerability: https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}

const openLink = (url) => {
    window.open(url, "_self")
    let element = document.getElementById("subpageTitle");
    console.log(element);
    element.scrollIntoView({behavior:"smooth", inline:"nearest"});
}


//
// function HeaderView() {
//     const location = useLocation();
//     console.log(location.pathname);
//     return <span>Path : {location.pathname}</span>
// }

export { NestedLinkButton, NestedLink, openInNewTab, openLink }