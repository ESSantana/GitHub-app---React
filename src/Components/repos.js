import React from 'react'
import propTypes from 'prop-types'

const Repos = ({className, title, repos}) => {

    Repos.propTypes = {
        className: propTypes.string,
        title: propTypes.string.isRequired,
        repos: propTypes.array
    }
        
    return (
        <div className={className}>
            <h2>{title}:</h2>
            <ul>
                {repos.map((repo, index) =>(
                    <li key={index}><a href={repo.link} target='_blank' rel='noopener noreferrer'>{repo.name}</a></li>
                    ))} 
            </ul>
        </div>
    )
}

export default Repos