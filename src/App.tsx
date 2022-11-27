import React, { useState } from 'react'
import "./App.css"


// const Circle = (props: any): JSX.Element => {
//   const { clientX, clientY } = props;
//   console.log(clientX, clientY);
//   return (
//     <div className={`circle`} style={{
//       top: `${clientY}px`,
//       left: `${clientX}px`
//     }}></div>
//   )
// }
function App() {
  const [point, setPoint] = useState({
    x: null,
    y: null
  })
  const addCircle = (clientX: Number, clientY: Number): void => {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.top = `${clientY}px`;
    circle.style.left = `${clientX}px`;
    // console.log(clientX, clientY);
    const z = document.getElementById("App");
    if (z === null) return;
    z.appendChild(circle);
  }

  return (
    <div id="App" className="App" onMouseMove={(e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      console.log(clientX, clientY);
      addCircle(clientX, clientY)
    }}>
    </div>
  )
}

export default App
