import React, { useEffect, useState } from 'react';
import {
  interval, buffer, fromEvent, Subject, takeUntil, throttleTime,
} from 'rxjs';
import { filter } from 'rxjs/operators';
import './App.scss';
import { Btn } from './components/Btn';
import { Display } from './components/Display';

export const App: React.FC = () => {
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);

  useEffect(() => {
    const unsubscribe = new Subject();

    interval(10)
      .pipe(takeUntil(unsubscribe))
      .subscribe(() => {
        if (timeOn) {
          setTime(val => val + 1);
        }
      });

    return () => {
      unsubscribe.next(0);
      unsubscribe.complete();
    };
  }, [timeOn]);

  const handleStartStop = () => {
    if (!timeOn) {
      setTimeOn(true);
    } else {
      setTime(0);
      setTimeOn(false);
    }
  };

  const handleWait = () => {
    const clicks$ = fromEvent(document, 'click');

    clicks$.pipe(
      buffer(clicks$.pipe(throttleTime(300))),
      filter(clickArray => clickArray.length > 1),
    )

      .subscribe(() => setTimeOn(false));
  };

  const handleReset = () => {
    setTime(0);
  };

  return (
    <>
      <Display time={time} />
      <Btn
        start={handleStartStop}
        wait={handleWait}
        reset={handleReset}
      />
    </>
  );
};
