import React, { FC } from 'react';
import { Calendar } from 'antd';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formatDate } from '../utils/date';

export const EventCalendar: FC<{ events: IEvent[] }> = (props) => {
  const dateCellRender = (value: Moment) => {
    const eventFormatDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(
      (ev) => ev.date === eventFormatDate
    );
    return (
      <div>
        {currentDayEvents.map((ev, index) => (
          <div key={index}>{ev.description}</div>
        ))}
      </div>
    );
  };
  return <Calendar dateCellRender={dateCellRender} />;
};
