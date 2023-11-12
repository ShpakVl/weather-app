import React from 'react';
import { HistoryElement } from '../model/types';
import { History } from '../model/history.store';
import { List } from 'antd';
import { HistoryItem } from './history-item';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { StyledCard } from '@/shared/ui/styled-card';

interface HistoryProps {
 model: History<HistoryElement>;
 onClick: (cityName: string) => void;
}

export const HistoryList = observer(({ model, onClick }: HistoryProps): JSX.Element => {
 const handleClick = (cityName: string) => {
  if (model.getActive()?.id !== cityName) {
   model.setActive(cityName);
   onClick(cityName);
  }
 };

 return (
  <StyledCard title='Search history'>
   <List
    itemLayout='horizontal'
    dataSource={toJS(model.historyElements)}
    renderItem={item => <HistoryItem item={item} onDelete={model.remove} onClick={handleClick} />}
   />
  </StyledCard>
 );
});
