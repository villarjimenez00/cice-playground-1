import { arrayMapFilter } from './exercise-6'
import { TestScheduler } from 'rxjs/testing'
import { mergeMapTo } from 'rxjs/operators'

describe('exercise-2', () => {
  it('should return even numbers from given array after multiply each item by three', async () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected)
    })
    testScheduler.run(({ expectObservable, cold }) => {
      const values = {
        x: 6
      }

      const source = '(a|)'
      const result = '(x|)'
      const actual = cold(source).pipe(mergeMapTo(arrayMapFilter([1, 2, 3])))

      expectObservable(actual).toBe(result, values)
    })
  })
})
