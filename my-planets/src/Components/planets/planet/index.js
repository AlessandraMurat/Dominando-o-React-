import React from "react";
import GrayImg from "../../shared/gray-img";
import DescriptionWithLink from "../../shared/DescriptionWithLink";

import {Link} from 'react-router-dom'

const Planet = (props) => {
  return (
    <div>
      <Link to={`/planet/${props.id}`} ><h4>{props.name}</h4></Link>
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} gray={props.gray} />
    </div>
  );
};

export default Planet;
