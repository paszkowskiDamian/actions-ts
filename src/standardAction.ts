interface BaseAction<T>{
    type: T;
}

interface Payload<P> {
    payload: P;
}

interface Meta<M> {
    meta: M;
}

interface ActionError<E> {
    error: E;
}

type ActionWithPayload<A, P = undefined> = P extends undefined ? A : A & A & Payload<P>
type ActionWithMeta<A, M = undefined> = M extends undefined ? A : A & Meta<M>
type ActionWithError<A, E = undefined> = E extends undefined ? A : A & ActionError<E>

export type StandardAction<T, P = undefined, E = undefined, M = undefined> =
ActionWithError<
    ActionWithMeta<
        ActionWithPayload<
            BaseAction<T>,
        P>,
    M>,
E>

export function createAction<T,P = undefined,E = undefined,M = undefined>
(type: T, payload?: P, error?: E, meta?: M): StandardAction<T,P,E,M> {
  const action = { type }
  const actionWithPayload = payload !== undefined ? {...action, payload} : action
  const actionWithError = error !==undefined ? {...actionWithPayload, error} : actionWithPayload
  const actionWithMeta = meta !== undefined ? {...actionWithError, meta} : actionWithError

  return actionWithMeta as StandardAction<T,P,E,M>
}


