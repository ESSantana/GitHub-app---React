import React from 'react'

const Actions = ({getStarred,getRepos}) => {
    
    return (
        <div className='actions'>
            <button onClick={getRepos}>Ver Repositorios</button>
            <button onClick={getStarred}>Ver Favoritos</button>
        </div>
    )
}

export default Actions
