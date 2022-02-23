import React, { useState } from "react";

export default function About() {

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, updateBtnText] = useState('Toggle Dark Mode')

  const toggleDarkMode = () => {
      if(myStyle.color === 'white' && myStyle.backgroundColor === 'black') {
          setMyStyle({
            color: "black",
            backgroundColor: "white",
          })
          updateBtnText('Enable dark mode')
      } else {
        setMyStyle({
            color: "white",
            backgroundColor: "black",
            border: "1px solid white"
          })
          updateBtnText('Enable light mode')
      }
  }

  return (
    <div className="container" style={myStyle}>
      <div className="well">
        <h4>This is all about us</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          accusantium eius quo, nesciunt eum necessitatibus, sequi consequuntur
          quas non nam aut, natus error dicta unde debitis eveniet ab
          consequatur praesentium.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          accusantium eius quo, nesciunt eum necessitatibus, sequi consequuntur
          quas non nam aut, natus error dicta unde debitis eveniet ab
          consequatur praesentium.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          accusantium eius quo, nesciunt eum necessitatibus, sequi consequuntur
          quas non nam aut, natus error dicta unde debitis eveniet ab
          consequatur praesentium.
        </p>
      </div>
      <div className="container my-3">
        <button className="btn btn-primary" onClick={toggleDarkMode}>
            {btnText}
        </button>
      </div>
    </div>
  );
}
