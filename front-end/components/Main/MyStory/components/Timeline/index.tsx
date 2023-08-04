import React from 'react';
import TimelineItem from './components/TimelineItem';

interface TimelineProps {
  items: { title: string; description: string }[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <TimelineItem key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default Timeline;
