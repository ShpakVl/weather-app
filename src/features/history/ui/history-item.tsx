import React from 'react';
import { Button, List } from 'antd';
import { History } from '../model/history.store';
import { HistoryElement } from '../model/types';

interface HistoryItemProps {
 item: HistoryElement;
 onDelete: History['remove'];
}

export const HistoryItem = ({ item, onDelete }: HistoryItemProps): JSX.Element => {
 return (
  <List.Item
   actions={[
    <Button key='deleteButton' onClick={() => onDelete(item.id)}>
     Remove
    </Button>,
   ]}>
   <List.Item.Meta title={item.label} />
  </List.Item>
 );
};
