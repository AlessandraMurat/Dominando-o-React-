import React from 'react'
import GreyImg from '../../shared/grey-img';
import DescriptionWithLink from '../../shared/DescriptionWithLink';

const Planet = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <DescriptionWithLink description = {props.description} link = {props.link}/>
            <GreyImg img_url = {props.img_url}/>
         

           
            
        </div>
    );
}

export default Planet;