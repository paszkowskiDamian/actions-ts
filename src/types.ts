export type ActionType = string;

export interface BaseAction<T extends string> {
  type: T;
}

export interface Payload<P> {
  payload: P;
}

export interface Meta<M> {
  meta: M;
}

export interface ActionError<E> {
  error: E;
}
