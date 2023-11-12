import { makeAutoObservable } from 'mobx';

interface HistoryElement {
 id: string;
}
type HistoryElementId = HistoryElement['id'];

export class History<T extends HistoryElement = HistoryElement> {
 private elements: T[] = [];

 constructor() {
  makeAutoObservable(this, {}, { autoBind: true });
 }

 public add(element: T) {
  if (!this.get(element.id)) this.elements.unshift(element);
  else this.setActive(element.id);
 }
 public get historyElements() {
  return this.elements;
 }
 public get(elementId: HistoryElementId) {
  return this.elements.find(element => element.id === elementId);
 }

 public remove(elementId: HistoryElementId) {
  this.elements = this.elements.filter(item => item.id !== elementId);
 }

 public getActive() {
  return this.elements[0];
 }

 public setActive(elementId: HistoryElementId) {
  const target = this.get(elementId);

  if (target) {
   this.remove(elementId);
   this.add(target);
  }
 }
}
