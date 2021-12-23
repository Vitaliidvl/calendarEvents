import React, { FC, useState } from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { Moment } from 'moment';
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const EventForm: FC<{
  guests: IUser[];
  submit: (event: IEvent) => void;
}> = (props) => {
  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };

  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  } as IEvent);

  const { user } = useTypedSelector((state) => state.auth);

  const submitForm = () => {
    props.submit({ ...event, author: user.username });
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Event Description"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
          value={event.description}
        />
      </Form.Item>
      <FormItem
        label="Event Date"
        name="date"
        rules={[
          rules.required(),
          rules.isDateAfter('This is date after, you can not set this date!'),
        ]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </FormItem>
      <Form.Item label="Choose guest" name="guest" rules={[rules.required()]}>
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {props.guests.map((guest) => (
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};
