describe('map', () => {
  it('should set a value with key foo and value bar', () => {
    const map = new Map()

    map.set('foo', 'bar')

    expect(map.size).toBe(1)
  })

  it('should set some value and get it', () => {
    const map = new Map()

    map.set('foo', 'bar')
    const actual = map.get('foo')

    expect(actual).toBe('bar')
  })

  it('should tell me the size', () => {
    const map = new Map([
      ['foo', 'bar'],
      ['key', 'value']
    ])

    expect(map.size).toBe(2)
  })

  it('should check that it has some value', () => {
    const map = new Map([
      ['foo', 'bar'],
      ['key', 'value']
    ])

    expect(map.has('buzz')).toBe(false)
  })

  it('should check that it has some value after deleting a value', () => {
    const map = new Map([
      ['foo', 'bar'],
      ['key', 'value']
    ])

    map.delete('key')

    expect(map.has('key')).toBe(false)
  })

  it('should delete all values', () => {
    const map = new Map([
      ['foo', 'bar'],
      ['key', 'value']
    ])

    map.clear()

    expect(map.size).toEqual(0)
  })

  it('should execute a callback for each value', () => {
    const myMap = new Map([
      ['foo', 'bar'],
      ['key', 'value']
    ])
    const callback = jest.fn()

    myMap.forEach(callback)

    expect(callback).toBeCalledTimes(2)
  })

  it('should be transformed to an array', () => {
    const map = new Map([
      ['foo', 'bar'],
      ['key', 'value']
    ])
    const actual = Array.from(map)
    expect(actual).toBeInstanceOf(Array)
  })

  it('should be iterated with a for loop', () => {})
})
