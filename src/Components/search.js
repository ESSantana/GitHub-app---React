import React from 'react'
import PropType from 'prop-types'

const Search = ({handleSearch}) => {

    Search.PropType= {
        handleSearch: PropType.func.isRequired
    }
    return (
        <div className='search'>
            <input
                defaultValue='ESSantana'
                type='search'
                placeholder='digite o nome do user no github'
                onKeyUp={handleSearch}
                />
        </div>
    )
}
export default Search
