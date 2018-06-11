import { createAction } from './createAction';
// import { StandardAction } from './standardAction';
import { ActionType } from './types';

// type ActionCreator<T extends ActionType, P = undefined, E = undefined, M = undefined> =
//   M extends undefined
//     ? E extends undefined
//       ? P extends undefined
//         ? (payload?: P, error?: E, meta?: M) => StandardAction<T,P,E,M>
//         : (payload: P, error?: E, meta?: M) => StandardAction<T,P,E,M>
//       : (payload: P, error: E, meta?: M) => StandardAction<T,P,E,M>
//     : (payload: P, error: E, meta: M) => StandardAction<T,P,E,M>

export function createActionCreator<P = undefined, E = undefined, M = undefined>(type: ActionType): any{
  return (payload: P, error: E,meta: M) => createAction(type, payload, error, meta)
}

// const a = createActionCreator<{id: string}>('HELLO')({id: 'ds'})
