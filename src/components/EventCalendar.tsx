import React, { FC } from 'react';
import { Calendar } from 'antd';
import { IEvent } from '../models/IEvent';

export const EventCalendar: FC<{ events: IEvent[] }> = () => {
  return <Calendar />;
};
