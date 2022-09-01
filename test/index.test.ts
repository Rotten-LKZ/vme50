// @ts-nocheck
import data from '../src/data'
import vme50, { vme50Text, vme50Image } from '../src'

describe('test vme50 function', () => {
  const isThursday = new Date().getDay() === 4

  if (isThursday) {
    test('throw Error on Thursday', () => {
      expect(() => {
        vme50()
      }).toThrowError('Error: Crazy Thursday need ￥50')
    })
    
    test('return a string from data.ts with resultType=text', () => {
      expect(data.texts.includes(vme50({ type: 'warn', resultType: 'text' }))).toBeTruthy()
    })

    test('return a string from data.ts with resultType=image', () => {
      expect(data.images.includes(vme50({ type: 'warn', resultType: 'image' }))).toBeTruthy()
    })
  } else {
    test('return undefined when it is not Thursday', () => {
      expect(vme50()).toBeUndefined()
    })
  }
})

describe('test vme50Text', () => {
  test('return a string from data.ts', () => {
    expect(data.texts.includes(vme50Text())).toBeTruthy()
  })
})

describe('test vme50Image', () => {
  test('return a string from data.ts', () => {
    expect(data.images.includes(vme50Image())).toBeTruthy()
  })
})
