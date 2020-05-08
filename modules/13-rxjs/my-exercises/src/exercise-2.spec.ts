import { evenNumbers } from './exercise-2'
import { TestScheduler } from 'rxjs/testing'
import { mergeMapTo } from 'rxjs/operators'

describe('exercise-2', () => {
  it('should return even numbers from given array', async () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })
    testScheduler.run(({ expectObservable, cold }) => {
      const values = {
        a: 1,
        x: 2
      }

      const source = '(a|)'
      const result = '(x|)'
      const actual = cold(source, values).pipe(mergeMapTo(evenNumbers([1, 2, 3])))

      expectObservable(actual).toBe(result, values)
    })
  })
})
