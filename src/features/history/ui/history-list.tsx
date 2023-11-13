import React from 'react';
import { HistoryElement } from '../model/types';
import { HistoryModel } from '../model/history.store';
import { HistoryItem } from './history-item';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { StyledCard } from '@/shared/ui/styled-card';
import { StyledList } from '@/features/history/ui/styles';

interface HistoryProps {
 model: HistoryModel<HistoryElement>;
 searchCity: (cityName: string) => void;
}

export const HistoryList = observer(({ model, searchCity }: HistoryProps): JSX.Element => {
 const handleClick = (cityName: string) => {
  model.setActive(cityName);
  searchCity(cityName);
 };

 const onDeleteClick = (cityName: string) => {
  const isActive = model.getActive()?.id === cityName;
  model.remove(cityName);

  if (isActive && model.historyElements.length) {
   searchCity(model.getActive()?.id);
  }
 };

 return (
  <StyledCard title='Search history'>
   <StyledList
    itemLayout='horizontal'
    dataSource={toJS(model.historyElements)}
    renderItem={item => <HistoryItem item={item as HistoryElement} onDelete={onDeleteClick} onClick={handleClick} />}
   />
  </StyledCard>
 );
});
