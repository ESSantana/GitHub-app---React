import React from 'react'
import propTypes from 'prop-types'

const Actions = ({getStarred,getRepos}) => {

    Actions.propTypes = {
        getRepos: propTypes.func,
        getStarred: propTypes.func
    }
    
    return (
        <div className='actions'>
            <button onClick={getRepos}>Ver Repositorios</button>
            <button onClick={getStarred}>Ver Favoritos</button>
        </div>
    )
}

export default Actions
