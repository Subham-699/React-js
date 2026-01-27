import { useState } from "react";
import "./App.css";

const App = () => { 
  const [count, setCount] = useState(0);
  const word1 = "Class";
  const word2 = "React JS";

  // const handleClick = ()=>{
  //  setCount(prevCount => prevCount + 1);
  // }

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        {/* <button onClick={handleClick}> */}
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          count is {count}
        </button>
      </div>

      <h1>Greetings</h1>
      <div>
        <p>
          Hello {word1}, Is {word2} easy ?
        </p>
      </div>
    </>
  );
}

export default App;