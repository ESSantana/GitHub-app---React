import React from 'react'
import PropTypes from 'prop-types'

const UserInfo = ({user}) => {

    user.PropTypes = {
        user: PropTypes.shape({
            photo: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            login: PropTypes.string.isRequired,
            repos: PropTypes.number.isRequired,
            followers: PropTypes.number.isRequired,
            following: PropTypes.number.isRequired,
        })
    }
    
    return (
        <div className='user-info'>
            <img src={user.photo} alt='' />
            <div>
                <h1>
                  <a href={`http://github.com/${user.login}`} target='_blank' rel='noopener noreferrer'>
                    {user.username}
                  </a>
                </h1>
            </div>
            <ul className='repos-info'>
                <li>-Repositorios: {user.repos}</li>
                <li>-Seguidores: {user.followers}</li>
                <li>-Seguindo: {user.following}</li>
            </ul>
        </div>
    )
}

export default UserInfo
