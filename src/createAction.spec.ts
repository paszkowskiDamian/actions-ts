import { createAction } from './createAction';

describe('createAction', () => {
  it('should create base action', () => {
    const action: { type: 'BASE_ACTION' } = createAction('BASE_ACTION');

    expect(action).toEqual({ type: 'BASE_ACTION' });
  });

  it('should create action with payload', () => {
    const action: {
      type: 'ACTION';
      payload: { id: number };
    } = createAction('ACTION', { id: 1 });

    expect(action).toEqual({ type: 'ACTION', payload: { id: 1 } });
  });

  it('should create action with error', () => {
    const action: { type: 'ACTION'; error: boolean } = createAction('ACTION', undefined, true);

    expect(action).toEqual({ type: 'ACTION', error: true });
  });

  it('should create action with meta', () => {
    const action: {
      type: 'ACTION';
      meta: { isFetched: boolean };
    } = createAction('ACTION', undefined, undefined, { isFetched: true });

    expect(action).toEqual({ type: 'ACTION', meta: { isFetched: true } });
  });

  it('should create action with all properties', () => {
    const action: {
      type: 'ACTION';
      payload: { id: number };
      error: boolean,
      meta: { isFetched: boolean };
    } = createAction('ACTION', { id: 1 }, false, { isFetched: true });

    expect(action).toEqual({
      type: 'ACTION',
      payload: { id: 1 },
      error: false,
      meta: { isFetched: true },
    });
  });
});
