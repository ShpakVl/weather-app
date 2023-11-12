import React from 'react';
import { Button, List } from 'antd';
import { History } from '../model/history.store';
import { HistoryElement } from '../model/types';
import { observer } from 'mobx-react-lite';
import * as module from 'module';

interface HistoryItemProps {
 item: HistoryElement;
 onDelete: History['remove'];
 onClick: History['setActive'];
}

export const HistoryItem = ({ item, onDelete, onClick }: HistoryItemProps): JSX.Element => {
 return (
  <List.Item
   actions={[
    <Button key='deleteButton' onClick={() => onDelete(item.id)}>
     Remove
    </Button>,
   ]}
   onClick={() => onClick(item.id)}>
   <List.Item.Meta title={item.label} />
  </List.Item>
 );
};
