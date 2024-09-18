import React from 'react';
import './Roadmap.css';

const Roadmap = () => {
  const milestones = [
    {
      day: '12',
      month: 'AUG',
      year: '2024',
      title: 'İlk iş günü',
    },
    {
      day: '**',
      month: '***',
      year: '****',
      title: 'İlk satış',
    },
    {
      day: '**',
      month: '***',
      year: '****',
      title: 'İlk 10 satış',
    },
    {
      day: '**',
      month: '***',
      year: '****',
      title: 'ilk 50 satış',
    },
    {
      day: '**',
      month: '***',
      year: '****',
      title: 'İlk 100 satış',
    },
  ];

  return (
    <section id="timeline">
      {milestones.map((milestone, index) => (
        <article key={index}>
          <div className="inner">
            <span className="date">
              <span className="day">{milestone.day}<sup>th</sup></span>
              <span className="month">{milestone.month}</span>
              <span className="year">{milestone.year}</span>
            </span>
            <h2>{milestone.title}</h2>
            <p className='empty'></p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Roadmap;
