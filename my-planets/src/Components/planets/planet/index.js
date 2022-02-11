import React from "react";
import GrayImg from "../../shared/gray-img";
import DescriptionWithLink from "../../shared/DescriptionWithLink";

const Planet = (props) => {
  /* método 1 renderizando fora do jsx
    const names = ['a', 'b', 'c', 'd', 'e', 'f']
    const satellites = names.map((n) => 

        <li>Satélite {n} </li>
    )

    */

  // método 2 renderizando dentro do jsx
  const names = ["a", "b", "c", "d", "e", "f"];

  let title;
  if (props.title_with_underline)
    title = (
      <h4>
        <u>{props.title}</u>
      </h4>
    );
  else <h4>{props.title}</h4>;

  return (
    <div>
      {title}
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} gray={props.gray} />
      <h4>Satélites</h4>

      {/* método 1
            <ul>{satellites}</ul> */}

            
      {/* método 2  */}
      <ul>
        {names.map((n) => (
          <li>Satélite {n} </li>
        ))}
      </ul>

      <hr />
    </div>
  );
};

export default Planet;
