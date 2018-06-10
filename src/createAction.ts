import { StandardAction } from './standardAction';
import { ActionType } from './types';

export function createAction<T extends ActionType,P = undefined,E = undefined,M = undefined>
(type: T, payload?: P, error?: E, meta?: M): StandardAction<T,P,E,M> {
  const action = { type }
  const actionWithPayload = payload !== undefined ? {...action, payload} : action
  const actionWithError = error !==undefined ? {...actionWithPayload, error} : actionWithPayload
  const actionWithMeta = meta !== undefined ? {...actionWithError, meta} : actionWithError

  return actionWithMeta as StandardAction<T,P,E,M>
}
