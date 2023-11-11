import { makeAutoObservable } from 'mobx';

export class SearchByCityModel {
 public searchValue = '';
 public onSearch;
 constructor(onSearch: (value: string) => void) {
  makeAutoObservable(this);
  this.onSearch = onSearch;
 }

 setSearchValue(newSearchValue: string) {
  this.searchValue = newSearchValue;
 }
}
