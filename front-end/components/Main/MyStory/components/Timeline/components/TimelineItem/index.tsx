import React from 'react';

interface TimelineItemProps {
  title: string;
  description: string;
}

//Styled Components
import {
  BoxTimelineItem,
  Title,
  Description
} from './styles';

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description }) => {
  return (
    <BoxTimelineItem>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </BoxTimelineItem>
  );
};

export default TimelineItem;
