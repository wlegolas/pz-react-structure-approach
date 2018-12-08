import * as actions from '../actions';

describe('Users -> actions', () => {
  it('should dispatch the currection action', () => {
    expect(actions.search('test'))
      .with.state({ todos: [] })
      .to.dispatch.actions([{ type: '', payload: { text: 'test' } }])
  })
})
