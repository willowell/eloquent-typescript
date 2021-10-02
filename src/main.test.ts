import { greet } from './main'

test('the data is peanut butter', () => {
  expect(1).toBe(1)
})

test('greeting', () => {
  expect(greet('tout le monde')).toBe('Bonjour tout le monde !')
})
