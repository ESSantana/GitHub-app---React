import React from 'react'
import propTypes from 'prop-types'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContainer = ({ 
    userInfo, 
    repos, 
    starred, 
    handleSearch, 
    getRepos, 
    getStarred 
}) => {

    AppContainer.propTypes = {
        userInfo: propTypes.object,
        repos: propTypes.array,
        starred: propTypes.array,
    }

    return (
        <div className='app'>

            <Search handleSearch={handleSearch} />

            {!!userInfo && <UserInfo
                user={userInfo} 
            />}

            {!!userInfo && <Actions
                getRepos={getRepos} getStarred={getStarred}
            />}

            {(typeof(repos) !== 'undefined' && !!repos.length) &&
                <Repos className='repo' title='Repositórios' repos={repos} />
            }
            {(typeof(starred) !== 'undefined' && !!starred.length) &&
                <Repos className='starred' title='Favoritos' repos={starred} />
            } 

        </div>
    )
}

export default AppContainer