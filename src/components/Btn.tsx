import React from 'react';

interface Props {
  start: () => void;
  wait: () => void;
  reset: () => void;
  status: boolean;
}

export const Btn: React.FC<Props> = ({
  start,
  wait,
  reset,
  status,
}) => {
  return (
    <div className="d-flex justify-content-center">
      <button
        className="btn btn-primary"
        type="button"
        onClick={start}
      >
        {status ? 'Start' : 'Stop'}
      </button>
      <button
        className="btn btn-primary mx-1"
        type="button"
        onClick={wait}
      >
        Wait
      </button>
      <button
        className="btn btn-primary"
        type="button"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};
