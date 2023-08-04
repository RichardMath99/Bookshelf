import React from 'react';
import {
  ContainerTimeline,
} from './styles';

import TimelineItem from './components/TimelineItem';


interface TimelineProps {
  items: { title: string; description: string }[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <ContainerTimeline>
      {items.map((item, index) => (
        <TimelineItem key={index} title={item.title} description={item.description} />
      ))}
    </ContainerTimeline>
  );
};

export default Timeline;
