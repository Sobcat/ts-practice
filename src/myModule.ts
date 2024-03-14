export const name = 'dai'
export function Name() {}

//如何在 TS 中书写 commonjs 的导入导出
//原始写法，但无法获取类型检查
// module.exports = {
//   age: 12,
// }
//改成
// export = {
//   age: 12,
// }
