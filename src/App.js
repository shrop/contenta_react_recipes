import React, { Component } from 'react';
import { buildApi, get } from 'redux-bees';
import Recipe from './components/Recipe';

class App extends Component {
  constructor () {
    super()
    this.state = {
      recipes: []
    };
    const apiEndpoints = {
      getRecipes: { method: get, path: '/recipes' }
    };
    const config = {
      baseUrl: 'https://dev-contentacms.pantheonsite.io/api'
    };
    const api = buildApi(apiEndpoints, config);
    api.getRecipes()
    .then(data => this.setState({ recipes: data.body.data }));
  }

  render() {
    return (
      <div className="App">
          <ul className="list-of-recipes">
            {
              Object
                .keys(this.state.recipes)
                .map(key => <Recipe key={key} index={key} data={this.state.recipes[key]} />)
            }
          </ul>
      </div>
    );
  }
}

export default App;
