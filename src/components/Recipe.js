import React from 'react';

class Recipe extends React.Component {
  render() {
    return (
      <li className="menu-recipe">
        <p className="recipe">Recipe: {this.props.data.attributes.title}</p>
        <p className="recipe">Prep time: {this.props.data.attributes.preparationTime}</p>
      </li>
    )
  }
}

export default Recipe
