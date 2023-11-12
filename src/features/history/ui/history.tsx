import React from 'react';
import { HistoryElement } from '../model/types';
import { History } from '../model/history.store';
import { Card, List, Typography } from 'antd';
import { HistoryItem } from './history-item';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

interface HistoryProps {
 model: History<HistoryElement>;
 onClick: (cityName: string) => void;
}

export const HistoryList = observer(({ model, onClick }: HistoryProps): JSX.Element => {
 const handleClick = (cityName: string) => {
  model.setActive(cityName);
  onClick(cityName);
 };

 return (
  <Card>
   <Typography.Title>Search history</Typography.Title>
   <List
    itemLayout='horizontal'
    dataSource={toJS(model.historyElements)}
    renderItem={item => <HistoryItem item={item} onDelete={model.remove} onClick={handleClick} />}
   />
  </Card>
 );
});
