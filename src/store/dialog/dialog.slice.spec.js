import reducer, {hide, show} from './dialog.slice'

test('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({visible: false, dialog: undefined})
})
test('should return visible true', () => {
    expect(reducer({visible: false, dialog: undefined}, show)).toEqual({visible:true})
    expect(reducer({visible: true, dialog: 'test'}, hide)).toEqual({visible: false, dialog: undefined})
})
