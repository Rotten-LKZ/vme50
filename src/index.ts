import data from './data'

interface Options {
  console?: boolean
  type?: 'warn' | 'error'
  returnUndefined?: boolean
  resultType?: 'text' | 'image'
}

interface OptionsReturnUndefinedTrue extends Options {
  returnUndefined?: true
}

interface OptionsReturnUndefinedFalse extends Options {
  returnUndefined?: false
}

const defualtOptions: Options = {
  console: false,
  type: 'error',
  returnUndefined: true,
  resultType: 'text',
}

interface Vme50 {
  (options?: OptionsReturnUndefinedTrue): string | undefined
  (options?: OptionsReturnUndefinedFalse): string
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

function vme50Fun(options: OptionsReturnUndefinedTrue): string | undefined
function vme50Fun(options: OptionsReturnUndefinedFalse): string
function vme50Fun(options: Options = defualtOptions): string | undefined {
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
}

/**
 * V我50
 */
const vme50: Vme50 = vme50Fun as unknown as Vme50

vme50.text = vme50Text
vme50.image = vme50Image

export default vme50
