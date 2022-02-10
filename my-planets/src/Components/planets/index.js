import React, {Fragment} from 'react'
import Planet from './planet';

const Planets = () => {
    return (
        <Fragment>
            <h3>Planets List</h3>
            <hr/>
            <Planet title="Mercúrio"
                    description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. "
                link = "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                    img_url ="https://www.mapadomeuceu.com.br/wp-content/uploads/2020/10/planeta-mercurio-pr%C3%B3ximo-ao-sol.jpg"
            />
             <Planet title="Júpiter"
                    description="Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol.[11] Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. "
                    link = "https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)"
                    img_url ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkbOKIrtPLCnK8gYPjYSAiS4GSWqotqW9FLA&usqp=CAU"
            />
           
        

        </Fragment>
    );
}

export default Planets;