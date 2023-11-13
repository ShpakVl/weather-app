import { makeAutoObservable } from 'mobx';

//SearchByCityModel
//* Model to handle input value, onChange
//* accept onSearch button click handler request as param
//* onSearch -> input value
//* setSearchValue -> setInput value

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
