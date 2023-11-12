import React from 'react';
import { HistoryElement } from '../model/types';
import { History } from '../model/history.store';
import { Card, List, Typography } from 'antd';
import { HistoryItem } from './history-item';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

interface HistoryProps {
 model: History<HistoryElement>;
}

export const HistoryList = observer(({ model }: HistoryProps): JSX.Element => {
 return (
  <Card>
   <Typography.Title>Search history</Typography.Title>
   <List
    className='demo-loadmore-list'
    itemLayout='horizontal'
    dataSource={toJS(model.historyElements)}
    renderItem={item => <HistoryItem item={item} onDelete={model.remove} />}
   />
  </Card>
 );
});
