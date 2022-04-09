import React from 'react'
const Header = ({theme, handleThemeChange, handlePageChange}) => {
    return (
    <div className="header" style={{transition: "background-color 0.1s linear, color 0.1s linear", backgroundColor: theme.colors.primary, color: theme.colors.text}}>
        <div className="logo" onClick={() => handlePageChange("random")}><i className="fa-solid fa-earth-americas"></i><p>Where in the World?</p></div>
        <button style={{transition: "background-color 0.1s linear, color 0.1s linear", backgroundColor: theme.colors.primary, color: theme.colors.text}} className="theme-toggle-button" onClick={handleThemeChange}><i className={theme.name==="light" ? "fa-regular fa-moon" : "fa-solid fa-moon"}></i><p>Dark Mode</p></button>
    </div>
    )
}

export default Header