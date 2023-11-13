import { flow, makeAutoObservable } from 'mobx';

type Query<Params extends any[], Response> = (...params: Params) => Promise<Response>;
type OnError<Error> = (error: Error) => void;

//@ RequestHandler
//* Provide standard methods for comfortable work with Api calls
//* - ARGUMENTS -
//* query -> api request callback
//* onError -> callback to handle errors in request (ex. show notification)
//* - METHODS -
//* fetch -> generator function to handle Api calls
//* isLoading -> is request loading
//* isError -> is request failed
//* data -> response
//* error -> request error object

export class RequestHandler<Params extends any[], Response, Error> {
 public isLoading = false;
 public isError = false;
 public data?: Response = undefined;
 public error?: Error = undefined;

 private query?: Query<Params, Response> = undefined;
 private onError?: OnError<Error> = undefined;

 constructor(query: Query<Params, Response>, onError: OnError<Error>) {
  this.query = query;
  makeAutoObservable(this, { fetch: flow });
  this.onError = onError;
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
   this.onError?.(err);
   this.error = err as Error;
  } finally {
   this.isLoading = false;
  }
  return this.data;
 }
}
