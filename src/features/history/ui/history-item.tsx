import React from 'react';
import { Button, List } from 'antd';
import { HistoryModel } from '../model/history.store';
import { HistoryElement } from '../model/types';
import { StyledHistoryItem } from './styles';

interface HistoryItemProps {
 item: HistoryElement;
 onDelete: HistoryModel['remove'];
 onClick: HistoryModel['setActive'];
}

export const HistoryItem = ({ item, onDelete, onClick }: HistoryItemProps): JSX.Element => {
 return (
  <StyledHistoryItem
   actions={[
    <Button
     key='deleteButton'
     onClick={e => {
      e.stopPropagation();
      onDelete(item.id);
     }}>
     Remove
    </Button>,
   ]}
   onClick={() => onClick(item.id)}>
   <List.Item.Meta title={item.label} />
  </StyledHistoryItem>
 );
};
