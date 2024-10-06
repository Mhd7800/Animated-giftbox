import React, { useEffect, useRef, useState, useCallback } from "react";
import TimelineObserver from "react-timeline-animation";
import { fireConfetti } from "./confetti";
import "../../src/style.css";

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  // Updated callback for the third step to include logging
  const someCallback = useCallback(() => {
    setMessage1("First day");
    callback();  // Log the callback being fired
    console.log("First milestone reached: First day");
  }, [callback]);

  const someCallback2 = useCallback(() => {
    setMessage2("First sale");
    console.log("Second milestone reached: First sale");
  }, []);

  // Updated callback for the third milestone
  const someCallback3 = useCallback(() => {
    setMessage3("First 10 sales");
    fireConfetti();  // Trigger confetti
    console.log("Third milestone reached: First 10 sales - Confetti triggered!");
  }, []);

  // Attach observers to each timeline and circle
  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);

    // Log any observer attachment errors
    if (!circle3.current) {
      console.error("circle3 observer not attached!");
    }
  }, [setObserver, someCallback, someCallback2, someCallback3]);

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          12 AUG
        </div>
        <div className="message">{message1}</div>
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          26 AUG
        </div>
        <div className="message">{message2}</div>
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className="circle">
          01 OCT
        </div>
        <div className="message">{message3}</div>
      </div>
    </div>
  );
};

export default function Roadmap() {
  const onCallback = () => {
    console.log("Callback function executed.");
  };

  return (
    <div className="App">
      <h1>Let's see your evolution so far</h1>
      <div className="stub1">⬇️ scroll to start ⬇️</div>
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="black"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <div className="stub2"></div>
    </div>
  );
}
