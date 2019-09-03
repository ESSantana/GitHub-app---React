import React from 'react'
import PropType from 'prop-types' 

const Search = ({handleSearch, isDisabled}) => {

    Search.PropType= {
        handleSearch: PropType.func.isRequired,
        isDisabled: PropType.bool.isRequired
    }
    return (
        <div className='search'>
            <input
                disabled={isDisabled}
                type='search'
                placeholder='Digite o user do github'
                onKeyUp={handleSearch}
                />
        </div>
    )
}
export default Search
