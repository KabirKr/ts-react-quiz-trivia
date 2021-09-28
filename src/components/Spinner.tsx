import spinnerSvg from "../images/spinner.svg";

const Spinner = () => (
  <>
    <p>Loading Questions...</p>
    <img src={spinnerSvg} alt="loading" />
  </>
);

export default Spinner;
