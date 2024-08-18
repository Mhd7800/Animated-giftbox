import React from 'react';
import './Roadmap.css';

const Roadmap = () => {
  return (
    <section id="timeline">
      <article>
        <div className="inner">
          <span className="date">
            <span className="day">12<sup>th</sup></span>
            <span className="month">AUG</span>
            <span className="year">2024</span>
          </span>
          <h2>İlk iş günü</h2>
          <p className="empty"></p>
        </div>
      </article>
      <article>
        <div className="inner">
          <span className="date">
            <span className="day">**<sup>th</sup></span>
            <span className="month">***</span>
            <span className="year">****</span>
          </span>
          <h2>İlk satış</h2>
          <p className="empty"></p>
        </div>
      </article>
      <article>
        <div className="inner">
          <span className="date">
            <span className="day">**<sup>th</sup></span>
            <span className="month">***</span>
            <span className="year">****</span>
          </span>
          <h2>İlk 10 satış</h2>
          <p className="empty"></p>
        </div>
      </article>
      <article>
        <div className="inner">
          <span className="date">
            <span className="day">**<sup>th</sup></span>
            <span className="month">***</span>
            <span className="year">****</span>
          </span>
          <h2>ilk 50 satış</h2>
          <p className="empty"></p>
        </div>
      </article>
      <article>
        <div className="inner">
          <span className="date">
            <span className="day">**<sup>th</sup></span>
            <span className="month">***</span>
            <span className="year">****</span>
          </span>
          <h2>İlk 100 satış</h2>
        </div>
      </article>
    </section>
  );
}

export default Roadmap;
