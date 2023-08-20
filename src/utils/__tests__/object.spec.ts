import { pick } from '../object'

describe('utils/object', () => {
  it('should properly pick properties from given object', () => {
    const obj = {
      first: '1',
      second: '2',
      third: '3'
    }
    expect(pick(obj, ['second', 'third'])).toEqual({
      second: '2',
      third: '3'
    })
  })
})
