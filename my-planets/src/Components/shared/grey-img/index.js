import React, {Fragment} from 'react'
import './style.css'

const GreyImg= (props) => {
    return (
        <Fragment>
            <img class='greys-img' src={props.img_url} alt="" />
        </Fragment>
    );
}

export default GreyImg;