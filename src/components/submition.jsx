import { ReactSVG } from "react-svg";
import "./style.css";
const Submition = ({ rate }) => {
  return (
    <main>
      <ReactSVG
        className="thank-you-icon"
        src="src\assets\illustration-thank-you.svg"
      />
      <section className="text-section">
        <p className="rate-score poppins-regular">
          You selected {rate} out of 5.
        </p>
        <h1 className="poppins-bold thanks-text">Thank you!</h1>
        <p className="poppins-regular thank-paragraph">
          We appreciate you taking the time to give a rating. If you ever need
          more support, dont hesitate to get in touch!
        </p>
      </section>
    </main>
  );
};

export default Submition;
