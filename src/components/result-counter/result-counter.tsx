import { JSX } from "react";
import "./result-counter.css";

type ResultCounterProps = {
  counter: number;
};

const ResultCounter = ({ counter }: ResultCounterProps): JSX.Element => {
  return (
    <div className="result-counter" data-testid="result-counter">
      {counter} RESULTS
    </div>
  );
};

export default ResultCounter;
