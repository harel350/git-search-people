import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import '../searchBox/searchBox.css'

interface SearchBoxProps{
    onSearch: Function,
}

const SearchBox:React.FC<SearchBoxProps> = ({onSearch})=>{
    const [searchUesr, setSearchUser] = useState('')
    function onSearchHandle() {
        fetch(`https://api.github.com/users/${searchUesr}`)
            .then((resData) => {
                
                if (resData.status !== 200) {
                    return Promise.reject('user not found')
                }
                else {
                    return resData.json()
                }
            })
            .then(data => onSearch(data))
            .catch(err => console.error(err))
    }
    return (
        <div className="searchBoxContainer">
            <FontAwesomeIcon color="blue" icon={faSearch} />
            <input type="text" className="searchInput" placeholder="Search GitHub username…" onChange={(e) => setSearchUser(e.target.value)} value={searchUesr} />
            <button className="searchBtn" onClick={onSearchHandle}>Search</button>
        </div>
    )
}

export default SearchBox