import { JSX, useEffect, useState } from "react";

type ProgressBarProps = {
  isLoading: boolean;
};

const ProgressBar = ({ isLoading }: ProgressBarProps): JSX.Element => {
  const [progress, setProgress] = useState(5);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev: number) => Math.min(prev + 5, 95)); // La barra avanza hasta un 90% antes de completar
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div
          className="progress-bar"
          data-testid="progress-bar"
          style={{
            width: `${progress}%`,
            transition: "width 0.3s ease-in-out",
            backgroundColor: "red",
            height: "4px",
          }}
        >
          &nbsp;
        </div>
      ) : null}
    </>
  );
};

export default ProgressBar;
