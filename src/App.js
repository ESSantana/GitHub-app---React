import React, { useState } from 'react'
import axios from 'axios'
import AppContainer from './Components/appcontainer'

const App = () => {

  const [state, setState] = useState({
    userInfo: null,
    repos: [],
    starred: [],
    showRepo: false,
    showStarred: false
  })

  const [isFetching, setIsFetching] = useState(false)

  function getGitApiUrl(username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  function handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {

      setIsFetching(true)

      setState({
        userInfo: null,
        repos: [],
        starred: [],
      })

      axios.get(getGitApiUrl(value))
        .then(response => {
          setState({
            userInfo: {
              photo: response.data.avatar_url,
              login: response.data.login,
              username: response.data.name,
              repos: response.data.public_repos,
              followers: response.data.followers,
              following: response.data.following
            }
          })
        }).then(() => {
          setIsFetching(false)
        })
    }
  }

  function getRepos(type) {
    axios.get(getGitApiUrl(state.userInfo.login, type)).then(result => {
      setState({
        ...state,
        showRepo: type === 'repos' ? true : false, 
        showStarred: type === 'starred' ? true : false, 
        [type]: result.data.map((repo) => {
          return {
            name: repo.name,
            link: repo.html_url
          }
        })
      })
    })
  }
  
  return (
    <AppContainer
      {...state}
      isFetching={isFetching}
      handleSearch={handleSearch}
      getRepos={() => getRepos('repos')}
      getStarred={() => getRepos('starred')}
    />
  )
}
export default App