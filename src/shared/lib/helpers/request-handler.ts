import { flow, makeAutoObservable } from 'mobx';

type Query<Params extends any[], Response> = (...params: Params) => Promise<Response>;

export class RequestHandler<Params extends any[], Response, Error> {
 public isLoading = false;
 public isError = false;
 public data?: Response = undefined;
 public error?: Error = undefined;

 private query?: Query<Params, Response> = undefined;

 constructor(query: Query<Params, Response>) {
  this.query = query;
  makeAutoObservable(this, { fetch: flow });
 }

 public *fetch(this, ...params: Params) {
  try {
   this.isLoading = true;
   this.isError = false;
   this.error = undefined;

   this.data = yield this.query?.(...params);
  } catch (err: unknown) {
   this.isError = true;
   this.data = undefined;

   this.error = err as Error;
  } finally {
   this.isLoading = false;
  }
  return this.data;
 }
}
