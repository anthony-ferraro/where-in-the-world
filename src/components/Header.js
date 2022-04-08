import React from 'react'
const Header = ({theme, handleThemeChange}) => {
    return (
    <div className="header">
        <div><i className="fa-solid fa-earth-americas"></i><p>Where in the World?</p></div>
        <button className="theme-toggle-button" onClick={handleThemeChange}><i className={theme==="light" ? "fa-regular fa-moon" : "fa-solid fa-moon"}></i><p>Dark Mode</p></button>
    </div>
    )
}

export default Header