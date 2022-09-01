import data from './data'

interface Options {
  console?: boolean
  type?: 'warn' | 'error'
  returnUndefined?: boolean
  resultType?: 'text' | 'image'
}

const defualtOptions: Options = {
  console: false,
  type: 'error',
  returnUndefined: true,
  resultType: 'text',
}

interface Vme50 {
  (options?: Options): string | undefined
  image: () => string
  text: () => string
}

/**
 * 生成随机数
 */
function ran(max: number, min: number = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 获取随机 vme50 文本
 */
export function vme50Text() {
  return data.texts[ran(data.texts.length - 1)]
}

/**
 * 获取随机 vme50 图片链接
 */
export function vme50Image() {
  return data.images[ran(data.images.length - 1)]
}

/**
 * V我50
 */
const vme50: Vme50 = function(options: Options = defualtOptions): string | undefined {
  for (const key in options) {
    // @ts-ignore
    options[key] = options[key] ?? defualtOptions[key]
  }

  const isThursday = new Date().getDay() === 4

  if (isThursday) {
    if (options.type === 'error') {
      if (options.console)
      console.error('Error: Crazy Thursday need ￥50')
      else
      throw 'Error: Crazy Thursday need ￥50'
    } else if (options.type === 'warn') {
      console.warn('Warning: Crazy Thursday need ￥50')
    }
  }

  if (options.returnUndefined && !isThursday) return undefined
  if (options.resultType === 'text') return vme50Text()
  if (options.resultType === 'image') return vme50Image()
} as unknown as Vme50

vme50.text = vme50Text
vme50.image = vme50Image

export default vme50
