### js 的原罪

- js 语言本身的特性，决定了该语言无法适应大型的复杂的项目
- 弱类型：某个变量可以随时更换类型
- 解释型：错误发生的时间，是在运行时

### TypeScript

ts 是 jS 的超集，是一个可选的，静态的类型系统

- 超集，集合的意思  
  就是 ts 包含 js 的所有功能，js 是 ts 的子集
- 类型系统  
  对代码中所有的标识符（变量、函数、参数、返回值）进行类型检查
- 可选的  
  在代码开发中，就是可以在 ts 文件用普通 js 的写法，选择写不写
- 静态的  
  无论时浏览器环境还是 node 环境，无法直接识别 ts 代码

  > tsc: ts -> js  
  > ts 编译器

  静态：类型检查发生的事件，在编译的时候，不是在运行时

### TS 的常识

- 2012 年微软发布的语言

### 默认情况下，TS 会做出下面几种假设：

1.假设当前的执行环境是 dom  
2.如果代码中没有使用模块化语句（import，export），便认为该代码是全局执行  
3.编译的目标代码是 ES3

### 有两种方式改变以上假设

1.使用 tsc 命令时，添加参数  
2.使用 tsconfig.json 配置文件

### 配置文件

1.使用了配置文件后，使用 tsc 命令进行编译时，不能跟上文件名了，因为这样会忽略配置文件

### @types

@types 是一个 ts 官方的类型库，其中包含了很多对 js 代码的类型描述，默认配置文件 lib 会安装默认的执行环境，如果自定义 lib 下没有相应配置，则某些语句会报错，可以通过另外安装 @types/xxx 来提供类型定义

> JQuery: 用 js 写的，没有类型检查  
> 安装@type/jquery, 为 jq 库添加类型检查

@types/node: 为 node 环境的提供类型检查，例如 lib:['es2016'] 下，console 不会报错

### 使用第三方库简化编译流程

ts-node: ts 代码直接在内存中完成编译，并同时完成运行  
nodemon: 监测文件的变化

### 基本类型约束

> TS 是一个可选的静态的类型系统！！！

### 如何进行类型约束

仅需要在变量，函数的参数，函数的返回值位置加上`:类型`  
ts 在很多场景中可以完成类型推导，自动推导  
any: 表示任意类型，ts 对此类型不做类型检查

> 如何区别数字字符串和数字，关键看怎么读？  
> 如果按照数字的方式朗读，则为数字；否则为字符串  
> 所以手机号，身份证这一类应该是字符串

### 源代码和编译结果的差异

编译结果中没有类型约束信息，ts 是静态的，在编译中生效

### 基本类型

- number: 数字
- string: 字符串
- boolean: 布尔值
- array: 数组
- object: 对象
- null & undefined

null 和 undefined 是其他所有类型的子类型，它们可以赋值给其他类型；因为类型推导上没有错误，所以使用上会造成不必要的麻烦，因此，通过添加`strictNullChecks:true`, 可以获得更加严格的空类型检查，null 和 undefined 只能赋值给自身。

### 基本类型-其他类型

- 联合类型: 多种类型选其一  
  配合类型保护进行判断  
  类型保护：当对某个变量进行类型判断后，在判断语句块中便可确定它的确切类型，typeof 可以触发基本类型保护
- void 类型：通常用于约束函数的返回值，表示该函数没有任何返回
- never 类型: 通常用于约束函数的返回值，表示该函数永远不可能结束
- 字面量类型：表示使用一个值进行约束
- 元祖类型（Tuple）: 表示一个固定长度的数组，并且数组每一个项的类型也确定
- any 类型: 可以绕过类型检查，因此，any 类型的数据可以赋值给任意类型

### 拓展类型-类型别名

对已知的一些类型定义名称，便于灵活使用

```
type 类型名称 = ...
```

### 函数的相关约束

函数重载：在函数实现之前，对函数调用的多重情况进行声明  
可选参数：可以在某些参数名后加上问号，表示该参数可以不用传递，可选参数必须在参数列表的末尾

### 拓展类型-枚举

> 拓展类型：类型别名、枚举、接口、类

枚举：通常用于约束某个变量的取值范围，看下面  
字面量和联合类型配合使用，也可以达到同样的效果  
为什么出现，解决了什么问题

#### 字面量类型的问题

- 在类型约束位置，会产生重复代码，可以使用类型别名解决问题
- 逻辑含义和真实值产生了混淆， 会导致修改当前真实值的时候，产生大量的修改
- 字面量类型不会进入编译结果

这时候，枚举就派上用场了

#### 枚举

参与编译结果
如何定义一个枚举类型：

```
enum 枚举名{
  枚举字段1 = 值1,
  枚举字段2 = 值2,
}
```

枚举会出现在编译结果中，表现为对象  
枚举的规则:

- 枚举字段的值可以是字符串或数字
- 数字枚举的值会自动自增
- 被数字枚举约束的变量，可以直接被赋值为数字
- 数字枚举的编译结果和字符串枚举有差异

最佳实践：

- 尽量不要在一个枚举中既出现字符串字段，又出现数字字段
- 使用枚举时，尽量使用枚举字段的名称，不要使用真实值

#### 数字枚举的位运算（位枚举）

### 接口和类型兼容性

### 拓展类型-接口

> 扩展类型：类型别名、枚举、接口、类

TypeScript 的接口: 用于约束类、对象、函数的契约（标准）  
契约（标准）的形式：

- API 文档，弱标准
- 代码约束，强标准

```
interface 接口名 ...
```

和类型别名一样，代码不会出现在编译结果中，与类型别名最大区别是接口可以约束类

1.接口约束对象  
2.接口约束函数

**接口可以继承**

```
class xxx extends xxx {

}
interface A extends B {}
```

可以通过接口之间的继承，实现多种接口的组合  
使用类目别名可以实现类似的效果，需要同意`&`，它叫做交叉类型  
它们的区别是：

- 子接口不能覆盖父接口的成员（不同类型）
- 交叉类型会把相同成员的类型进行交叉（新版已经不行了，会变成 never 类型）

**readonly**

只读修饰符, 也不在编译结果中

### 类型兼容性

B->A, 如果能完成赋值，则 A 和 B 类型兼容

鸭子辨型法（子结构辨型法）：目标类型需要某一些特征，赋值的类型只要能满足该特征即可（会嘎嘎叫会游泳就是鸭子）

- 基本类型：完全匹配
- 对象类型： 鸭子辨型法  
  类型断言  
  当直接使用对象字面量进行赋值的时候，会进行更严格的类型判断
- 函数类型：  
  一切无比自然（记性兼容，符合开发习惯，提供开发效率）  
  **参数**：可以传递给目标函数的参数可以少，但不可以多  
  **返回值**：要求返回，必须返回，不要求时随意

### 模块化

| 配置名称            | 含义                               |
| ------------------- | ---------------------------------- |
| module              | 设置编译结果中使用的模块化标准     |
| moduleResolution    | 设置解析模块的模式                 |
| noImplicitUsestrict | 编译结果中不包含"use strict"       |
| removeComments      | 编译结果移除注释                   |
| noEmitOnError       | 错误时不生成编译结果               |
| esModuleInterop     | 启用 es 模块化交互，非 es 模块导出 |

> 前端领域中的模块化标准：ES6、commonjs

> ts 中如何书写模块化语句  
> 编译结果中的模块化

#### TS 中如何书写模块化语句

TS 导入和导出模块，统一使用 ES6 的模块化标准

#### 编译结果中的模块化

可配置，在配置文件中 "module"  
TS 中的模块化在编译结果中：

- 如果编译结果的模块化标准是 ES6，没有区别
- 如果编译结果的模块化是 commonjs，导出的声明会变成一个 exports 属性，默认导出也会变成 exports 的 default 属性

#### 如何在 TS 中书写 commonjs 的导入导出

(早就不这样写啰)

#### 模块解析（旧视频内容）

模块解析：应该从什么位置寻找模块  
TS 中，有两种模块解析策略

- classic：经典策略，已经不用了呢
- node：node 解析策略（唯一的变化，是将 js 替换成 ts）
  - 相对路径`require("./xxx")`
  - 绝对路径`require("xxx")`

### TS 中的类

> 面向对象思想

**属性**  
跟 js 不一样，得使用属性列表来描述类中的属性，不然会报错

**属性的初始化检查**

```
// tsconfig.json
"strictPropertyInitialization": true
```

属性的初始化位置

- 构造函数中
- 属性默认值

**属性可以修饰为可选的**

**属性也可以修饰为只读的**

**使用访问修饰符**

访问修饰符可以控制类中的属性访问权限

- public
- private
- protected

Symbol: js 里面实现私有

**属性简写**

如果某个属性，通过构造函数的参数传递，并且不做任何处理的赋值给该属性，可以进行用访问修饰符简写

**访问器**

作用：用于控制属性的读取和赋值 set get

### 泛型

使用时才确定类型的类型

有时，书写函数时，会丢失一些类型信息（多个位置的类型应该保持一致或有关联的信息）  
泛型：附属与函数、类、接口、类型别名之上的类型  
泛型相当于一个类型变量，在定义时，无法预知具体的类型，可以用该变量来代替，只有调用时，才确定它的类型

很多时候，TS 会智能地根据传递参数进行类型推导  
但如果无法完成推导，且又没有传递具体的类型，则默认为~~空对象~~（unknown 新版）  
泛型可以设置默认值

#### 在函数中使用泛型

在函数名后书写`<泛型名称>`

#### 类、接口、类型别名中使用泛型

直接名称之后写`<泛型名称>`

#### 泛型约束

用于现实泛型的取值

#### 多泛型
