# vme50

疯狂星期四，v me 50

## 来源

当然就是网上热火的 V 我 50 了。然后就想着收集一下表情包、文案放到仓库里，也是一个很无聊的项目……

之后会稍微写个后端，这样就可以直接调用 API 来调用这个仓库了。欢迎各位 PR 添加文案以及图片地址！[数据链接](./src/data.ts)

周四调用 vme50 的时候会报错：

> Error: Crazy Thursday need ￥50

## 文档

*打包的时候有带 `.d.ts` 文件，理论上支持 `TypeScript` 这里就只展示 `TypeScript` 代码示例*

### 安装

```bash
npm install vme50
```

### vme50

```typescript
import vme50 from 'vme50'

// 如果今天是星期四，你会收获一条报错：Error: Crazy Thursday need ￥50
// 并且返回疯狂星期四文案一篇
vme50()
```

`vme50(options?: Options)` 接收 `options` 作为可选参数，参数声明如下

```typescript
interface Options {
  console?: boolean              // 默认为 false
  type?: 'warn' | 'error'        // 默认为 error
  returnUndefined?: boolean      // 默认为 true
  resultType?: 'text' | 'image'  // 默认为 text
}
```

1. 若 `type` 参数为 `warn`，则在星期四的时候会调用 `console.warn('Warning: Crazy Thursday need ￥50')`，此时 `console` 参数的值将忽略
2. 若 `type` 参数为 `error` 且 `console` 为 `false` 在星期四将会直接 `throw 'Error: Crazy Thursday need ￥50'`，若 `console` 为 `true` 则只会 `console.error('Error: Crazy Thursday need ￥50')`
3. 若 `returnUndefined` 参数为 `true` 则不在星期四的时候将会返回 `undefined`，若为 `false` 会根据 `resultType` 返回文案或图片链接
4. 若 `resultType` 参数为 `text`，将会返回文案，为 `image` 将会返回图片链接
5. 请注意，如果函数已经 `throw` 了之后肯定就没有返回值了，即当星期四的时候 `console` 为 `true` 且 `type` 为 `error` 时，`returnUndefined` 和 `resultType` 都是没有用的

### vme50Text 和 vme50Image

```typescript
import { vme50Text, vme50Image } from 'vme50'

console.log(vme50Text())  // 随机返回一条疯狂星期四文案
console.log(vme50Image()) // 随机返回一条疯狂星期四图片链接
```
