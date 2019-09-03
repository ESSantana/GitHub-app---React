import React from 'react'
import propTypes from 'prop-types'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import '../dist/css/style.css'

const AppContainer = ({ 
    userInfo, 
    repos, 
    starred, 
    handleSearch, 
    getRepos, 
    getStarred,
    isFetching,
    showRepo,
    showStarred
}) => {

    AppContainer.propTypes = {
        userInfo: propTypes.object,
        repos: propTypes.array,
        starred: propTypes.array,
        handleSearch: propTypes.func,
        getRepos:propTypes.func,
        getStarred: propTypes.func,
        isFetching: propTypes.bool
    }

    return (
        <div className='app'>

            <Search isDisabled={isFetching} handleSearch={handleSearch} />

            {isFetching && <div>Carregando ...</div>}
            
            {!!userInfo && <UserInfo
                user={userInfo} 
            />}

            {!!userInfo && <Actions
                getRepos={getRepos} getStarred={getStarred}
            />}

            {(typeof(repos) !== 'undefined' && !!repos.length) && showRepo &&
                <Repos className='repos' title='Repositórios' repos={repos}/>
            }
            {(typeof(starred) !== 'undefined' && !!starred.length) && showStarred && 
                <Repos className='starred' title='Favoritos' repos={starred}/>
            } 

        </div>
    )
}

export default AppContainer