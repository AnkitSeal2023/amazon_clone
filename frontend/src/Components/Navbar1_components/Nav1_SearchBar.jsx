import React from "react";
import NavbarDropdownCategories from "./data.jsx";

export default function Nav1_SearchBar({locationData}) {
    let [searchBarSelectWidth, setSearchBarSelectWidth] = React.useState(50)
    function handleSelectChange() {
        var selected = document.getElementById("search-bar-dropdown");
        var index = selected.selectedIndex;
        var innertext = document.getElementById("search-bar-dropdown").options[index].innerText;
        setSearchBarSelectWidth(() => {
            var l = innertext.length
            if (l > 8)
                return l * 9
            return 70
        })
        console.log(searchBarSelectWidth)
    }

    return (
        <div className="nav1-search-bar">
            <select id="nav1-search-bar-dropdown" onChange={handleSelectChange} defaultValue="item 0" style={{ width: `${searchBarSelectWidth}px` }}>
                <option value="item 0" >All</option>
                <NavbarDropdownCategories />
            </select>
            <input type="text" id="nav1-search-bar-input" placeholder="Search Amazon.in" />
            <button id="nav1-search-button" onMouseDown={() => document.getElementById("search-button").style.padding = `25px`} onMouseUp={() => document.getElementById("search-button").style.padding = `0px`} onClick={() => console.log("Hi")}>
            </button>
        </div>
    )
}