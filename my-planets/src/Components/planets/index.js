import React, { Fragment } from "react";
import Planet from "./planet";

class Planets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [
        {
          title: "Mercúrio",
          description:
            "Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. ",
          link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
          img_url:
            "https://www.mapadomeuceu.com.br/wp-content/uploads/2020/10/planeta-mercurio-pr%C3%B3ximo-ao-sol.jpg",
        },
        {
          title: "Júpiter",
          description:
            "Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol.[11] Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. ",
          link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkbOKIrtPLCnK8gYPjYSAiS4GSWqotqW9FLA&usqp=CAU",
        },
        {
          title: "Júpiter",
          description:
            "Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol.[11] Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. ",
          link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkbOKIrtPLCnK8gYPjYSAiS4GSWqotqW9FLA&usqp=CAU",
        },
      ],
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

  render() {
    return (
      <Fragment>
        <h3>Planets List</h3>
        <button onClick={this.removeLast}>Remove Last</button>
        <button onClick={this.duplicatePlanet}>Duplicate Last Planet</button>
        <hr />
        {this.state.planets.map((planet) => (
          <Planet
            title={planet.title}
            description={planet.description}
            link={planet.link}
            img_url={planet.img_url}
          />
        ))}
      </Fragment>
    );
  }
}

export default Planets;
