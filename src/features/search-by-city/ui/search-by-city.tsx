import React from 'react';
import { Input } from 'antd';
import { observer } from 'mobx-react-lite';
import { searchInputWidth } from '@/shared/lib';
import { SearchByCityModel } from '../model/search-by-city.model';

interface SearchByCityProps {
 model: SearchByCityModel;
}

export const SearchByCity = observer(({ model }: SearchByCityProps): JSX.Element => {
 return (
  <Input.Search
   onChange={({ target }) => model.setSearchValue(target.value)}
   value={model.searchValue}
   onSearch={model.onSearch}
   style={{ width: searchInputWidth }}
  />
 );
});
