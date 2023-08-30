import { useState } from "react";
import "./App.css";
import logo from "./images/logo.svg";

function App() {
  return (
    <div>
      <Header></Header>
    </div>
  );
}

function Header() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  function handleResult(value) {
    setResult(value);
  }
  console.log(result);
  function handleSubmit(e) {
    e.preventDefault();
    if (!height || !weight) return;
    const bmi = Math.round((weight / (height * height)) * 703);
    const addBMI = { height: height, weight: weight, bmi: bmi };
    handleResult(addBMI);
    setHeight("");
    setWeight("");
  }
  return (
    <header className="header">
      <div className="color-box"></div>
      <div className="title-box">
        <img src={logo} alt="logo"></img>
        <h1>Body Mass Index Calculator</h1>
        <p>
          Better understand your weight in relation to your height using our
          body mass index (BMI) calculator. While BMI is not the sole
          determinant of a healthy weight, it offers a valuable starting point
          to evaluate your overall health and well-being.
        </p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Enter your details below</h2>
        {/* <div className="radio-container">
          <div>
            <input type="radio" value="Metric"></input>
            <labe>Metric</labe>
          </div>
          <div>
            <input type="radio" value="Imperial"></input>
            <label>Imperial</label>
          </div>
        </div> */}
        <div className="measurement">
          <div className="height">
            <label>Height</label>
            <input
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              type="text"
              placeholder="0"
            ></input>
            <div>inch</div>
          </div>
          <div className="weight">
            <label>Weight</label>
            <input
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              type="text"
              placeholder="0"
            ></input>
            <div>Pound</div>
          </div>
        </div>
        <button type="submit" className="form-btn">
          Calculate
        </button>
        {result ? (
          <div className="results">
            <h4>Here are your results!</h4>
            <p>
              Your Height is {result?.height} inches, Your Weight is{" "}
              {result?.weight} lbs, Your BMI is {result?.bmi}%.
            </p>
          </div>
        ) : (
          <div className="results">
            <h4>Welcome!</h4>
            <p>Enter your height and weight to calculate your BMI.</p>
          </div>
        )}
      </form>
    </header>
  );
}

export default App;
