import { ActionError, ActionType, BaseAction, Meta, Payload } from './types';

type ActionWithPayload<A, P = undefined> = P extends undefined ? A : A & A & Payload<P>;
type ActionWithMeta<A, M = undefined> = M extends undefined ? A : A & Meta<M>;
type ActionWithError<A, E = undefined> = E extends undefined ? A : A & ActionError<E>;

export type StandardAction<T extends ActionType, P = undefined, E = undefined, M = undefined> = ActionWithError<
  ActionWithMeta<ActionWithPayload<BaseAction<T>, P>, M>,
  E
>;
