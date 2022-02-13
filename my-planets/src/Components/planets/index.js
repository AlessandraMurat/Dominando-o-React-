import React, { Fragment } from "react";
import Planet from "./planet";

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json') 
  let data = await response.json()
  return data;
}

class Planets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: []
    };
  }

  removeLast = () => {
    let new_planets = [...this.state.planets];
    new_planets.pop()
    this.setState(state => ({
      planets:new_planets
    }))
  };

  duplicatePlanet = () => {
    let last_planet = this.state.planets[this.state.planets.length -1]
    this.setState(state => ({
      planets:[...this.state.planets, last_planet]
    }))
  }

  componentDidMount() {
    getPlanets().then(data => {
      this.setState(state => ({
        planets: data['planets']
      }))
    })
  }

  render() {
    return (
      <Fragment>
        <h3>Planets List</h3>
        <button onClick={this.removeLast}>Remove Last</button>
        <button onClick={this.duplicatePlanet}>Duplicate Last Planet</button>
        <hr />
        {this.state.planets.map((planet, index) => (
          <Planet
            id = {planet.id}
            title={planet.title}
            description={planet.description}
            link={planet.link}
            img_url={planet.img_url}
            key = {index}
          />
        ))}
      </Fragment>
    );
  }
}

export default Planets;
