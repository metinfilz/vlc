import reducer, {show, hide} from './slice.dialog'

describe('dialog reducer', () => {
  it('', () => {
    expect(reducer(undefined, {type: 'unknown'}))
      .toEqual({
        visible: false,
        dialog: undefined
      })
    expect(reducer(undefined, show('test')))
      .toEqual({
        visible: true,
        dialog: 'test'
      })
    expect(reducer(undefined, hide()))
      .toEqual({
        visible: false,
        dialog: undefined
      })
  })
})
