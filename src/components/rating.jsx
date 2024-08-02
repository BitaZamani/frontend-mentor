import { ReactSVG } from "react-svg";
import "./style.css";
import { useState } from "react";
import Submition from "./submition";
const Rating = () => {
  const [rate, setRate] = useState("");
  const [submitted, setSubmitted] = useState(true);
  const handleSelect = (e) => {
    setRate(e.target.value);
  };
  const handleSubmit = () => {
    if (rate) setSubmitted(false);
    else alert("Please rate us");
  };
  return (
    <main className="container">
      {submitted ? (
        <>
          <ReactSVG className="star-icon" src="src\assets\icon-star.svg" />
          <h2 className="poppins-bold header">How did we do?</h2>
          <p className="poppins-regular">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="rate-btns-box">
            <input
              type="radio"
              value={1}
              id="one"
              name="rate"
              className="poppins-bold"
              onChange={handleSelect}
            />
            <label htmlFor="one">1</label>
            <input
              type="radio"
              value={2}
              id="two"
              name="rate"
              className="poppins-bold"
              onClick={handleSelect}
            />
            <label htmlFor="two">2</label>
            <input
              type="radio"
              value={3}
              id="three"
              name="rate"
              className="poppins-bold"
              onClick={handleSelect}
            />
            <label htmlFor="three">3</label>
            <input
              type="radio"
              value={4}
              id="four"
              name="rate"
              className="poppins-bold"
              onClick={handleSelect}
            />
            <label htmlFor="four">4</label>
            <input
              type="radio"
              value={5}
              id="five"
              name="rate"
              className="poppins-bold"
              onClick={handleSelect}
            />
            <label htmlFor="five">5</label>
          </div>
          <button
            type="submit"
            className="submit-btn poppins-regular"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </>
      ) : (
        <Submition rate={rate} />
      )}
    </main>
  );
};

export default Rating;
