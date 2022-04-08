import React from 'react'
import { useState } from 'react'
const FilterMenu = ({theme, filters, setFilters}) => {
    const [regionDropdownVisible, setRegionDropdownVisible] = useState(false);
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    return (
        <div className="filter-menu">
            <div className="input-wrapper">
                <i className="fas fa-search"></i>
                <input onChange = {(e) => setFilters({...filters, search: e.target.value})} value={filters.search} type="text" name="search" id="search" placeholder="Search for a country..."></input>
            </div>
            <div onClick={() => {setRegionDropdownVisible(regionDropdownVisible ? false : true)}}className="show-dropdown-button">
                <p>Filter by Region <i className={regionDropdownVisible ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></p>
                {regionDropdownVisible ? <ul className="region-dropdown">
                    <li onClick={() => setFilters({...filters,region: ""})} region="">All</li>
                    {regions.map((region, index) => <li onClick={() => setFilters({...filters, region: region})} key={index} region={region}>{region}</li>)}
                </ul> : null}
            </div>

        </div>
    )
}

export default FilterMenu