import React, { useState } from 'react'
import axios from 'axios'
import AppContainer from './Components/appcontainer'


const App = () => {

  const [state, setState] = useState({
    userInfo: null,
    repos: [],
    starred: []
  })


  function handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      axios.get('https://api.github.com/users/' + value)
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
        })
    }
  }

  function getRepos(type) {
    axios.get(`https://api.github.com/users/${state.userInfo.login}/${type}`).then(result => {
      let x = state;
      x.repos = result.data.map((resu) => [{
          name: resu.data.name,
          link: resu.data.html_url
      }])
      // x.repos = [{
      //   name: result.data[0].name,
      //   link: result.data[0].html_url
      // }];
      setState(x);
    })
  }

  return (
    <AppContainer
      userInfo={state.userInfo}
      repos={state.repos}
      starred={state.starred}
      handleSearch={handleSearch}
      getRepos={() => getRepos('repos')}
      getStarred={() => getRepos('starred')}
    />
  )
}
export default App