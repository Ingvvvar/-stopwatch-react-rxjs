import React from 'react';

interface Props {
  time: number;
}

export const Display: React.FC<Props> = ({ time }) => {
  const hour = `0${Math.floor((time / (1000 * 60 * 60)) % 24)}`;
  const min = `0${Math.floor(time / 6000)}`;
  const sec = `0${Math.floor((time / 100) % 60)}`;

  return (
    <div className="d-flex justify-content-center fs-3">
      <span>{`${hour.slice(-2)}: `}</span>
      <span>{`${min.slice(-2)}: `}</span>
      <span>{sec.slice(-2)}</span>
    </div>
  );
};
