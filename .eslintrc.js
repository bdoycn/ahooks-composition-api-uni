module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止在线上环境使用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止在线上环境出现需要审查的注释(如 TODO, FIXME 等)
    'no-warning-comments': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    /************************* 基础 ******************************/
    // 强制使用 lf 换行符
    'linebreak-style': 'lf',
    // 禁止使用 var 声明变量, 必须使用 const 或 let
    'no-var': 'error',
    // 禁止 for 中出现无限循环(如果要使用无限循环请使用 while)
    'for-direction': 'error',
    // getter 函数必须有返回值
    'getter-return': 'error',
    // 禁止将异步函数作为 Promise executor(new Promise 传入的第一个函数)
    'no-async-promise-executor': 'error',
    // 禁止与 -0 进行比较, 应该使用 Object.is(x, -0)
    'no-compare-neg-zero': 'error',
    // 留在严格模式开启
    // 禁止在条件语句中出现赋值操作符(为避免将 == 写为 = 的错误出现)
    // 如果必须要使用赋值操作符 则必须将赋值操作符用括号括起来
    // 'no-cond-assign': ['error', 'except-parens'],
    // 禁止在条件中使用常量表达式(如 true, false, void 0 等)
    'no-constant-condition': 'error',
    // 禁止在 function 定义中出现重复的参数
    'no-dupe-args': 'error',
    // 禁止在对象字面量中出现重复的键
    'no-dupe-keys': 'error',
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 'error',
    // 禁止出现空语句块(可以通过在语句块中添加注释通过此规则, 另外 catch 标签不受此规则限制)
    'no-empty': ['error', {
      allowEmptyCatch: true,
    }],
    // 禁止在正则表达式中出现空字符集
    'no-empty-character-class': 'error',
    // 禁止对 catch 中的异常对象进行重新赋值
    'no-ex-assign': 'error',
    // 禁止不必要的布尔值转换(如在条件表达式中没必要再使用 !! 或 Boolean 进行强制转换)
    'no-extra-boolean-cast': 'error',
    // 留在严格模式开启
    // 禁止不必要的括号
    // 'no-extra-parens': 'error',
    // 禁止不必要的分号
    'no-extra-semi': 'error',
    // 禁止对已声明的 function 重新声明/赋值
    'no-func-assign': 'error',
    // 禁止在嵌套语句中出现 function 声明(function 声明只能在程序或另一个函数体的顶层)
    'no-inner-declarations': 'error',
    // 禁止在 RegExp 构造函数中出现无效的正则表达式
    'no-invalid-regexp': 'error',
    // 禁止不规则的空白(如中文空格等)
    'no-irregular-whitespace': 'error',
    // 禁止将全局对象当做函数调用(如 Math, JSON)
    'no-obj-calls': 'error',
    // 禁止直接在对象上使用 Object.prototype 中的内置属性(因为对象上可能有属性会覆盖此值, 在服务端环境下还可能导致安全漏洞)
    'no-prototype-builtins': 'error',
    // 禁止在正则表达式中出现多个空格(因为直接的空格很难获取具体的空格数量, 可使用 ' {2}' 的方式表示两个空格)
    'no-regex-spaces': 'error',
    // 禁用稀疏数组(如 [,,] 此数组的 length 为 2, 但是却没有值, 很容易导致错误出现)
    'no-sparse-arrays': 'error',
    // 禁止在普通字符串中出现模板字面量占位符写法(如 '${variable}')
    'no-template-curly-in-string': 'error',
    // 禁止使用不明确的多行表达式
    'no-unexpected-multiline': 'error',
    // 禁止在 return, throw, continue, break 语句后出现不会执行的代码
    'no-unreachable': 'error',
    // 禁止在 finally 语句中出现流程控制语句(return, throw, break, continue, 因为这些语句均应该出现在 try 或 catch 中)
    'no-unsafe-finally': 'error',
    // 禁止对关系运算符(in, instanceof)的做操作符使用否定操作符(!)
    'no-unsafe-negation': 'error',
    // 留在严格模式启用
    // 禁止有 await 或 yield 的使用而可能导致出现竞态条件的赋值
    // 'require-atomic-updates': 'error',
    // 必须使用 isNaN 检查 NaN, 而不是 NaN === NaN(这是不正确的)
    'use-isnan': 'error',
    // 强制 typeof 表达式与有效的字符串进行比较(undefined, object, boolean, number, string, function, symbol, bigint)
    'valid-typeof': 'error',

    // 最佳实践
    // 数组方法的回调函数中必须有 return 语句
    'array-callback-return': 'error',
    // var 语句必须被定义在正确的块级作用域范围之内
    'block-scoped-var': 'error',
    // 不强制类方法使用 this
    'class-methods-use-this': 'off',
    // 留在严格模式启用
    // 不限制圈复杂度
    // 'complexity': ['error', 10],
    // 必须使用一致的 return 语句
    'consistent-return': ['error', { "treatUndefinedAsUnspecified": false }],
    // 无需始终使用大括号
    curly: 'off',
    // switch 语句必须有 default 分支(允许分支中没有具体代码)
    'default-case': 'error',
    // 在成员表达式中点号必须和属性在一行
    'dot-location': ['error', 'property'],
    // 强制使用点号访问成员属性
    'dot-notation': 'error',
    // 必须使用全等和全不等
    'eqeqeq': 'error',
    // 在没有对 for in 出来的值进行 hasOwnProperty 筛选的情况下, 发出警告
    'guard-for-in': 'warn',
    // 每个文件中只能有一个类
    'max-classes-per-file': ['error', 1],
    // 警告使用 alert
    'no-alert': 'warn',
    // 禁止使用 caller 和 callee(已被弃用)
    'no-caller': 'error',
    // 禁止在 case 或 default 子句中出现词法声明(因为子句中的值对整个 switch 都是可见的, 可能因变量提升导致不可预期的错误)
    // 如果要在 case 或 default 子句中使用词法声明, 应该将其包裹在块中
    'no-case-declarations': 'error',
    // 禁止使用看起来像除法的正则表达式(/=/ 应该换成 /[=]/)
    'no-div-regex': 'error',
    // 允许 return 之后继续存在 else / else-if 块
    'no-else-return': 'off',
    // 禁止出现空函数(因空函数意义不明, 可在其中添加注释以避免此规则)
    'no-empty-function': 'error',
    // 禁止使用空解构模式
    'no-empty-pattern': 'error',
    // 允许使用 == 与 != 同 null 比较(需要注意的是这里会判断两个值 null 和 undefined)
    'no-eq-null': 'off',
    // 禁用 eval
    'no-eval': 'error',
    // 禁止扩展原生对象
    'no-extend-native': 'error',
    // 禁止不必要的函数绑定(如函数中不存在 this 的时候)
    'no-extra-bind': 'error',
    // 禁止不必要的标签
    'no-extra-label': 'error',
    // case 语句可以为空
    'no-fallthrough': 'off',
    // 小数点前必须有数字
    'no-floating-decimal': 'error',
    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': 'error',
    // 允许使用较短的符号实现类型转换(需要使用各种类型的构造函数, 如 Number, String 等)
    'no-implicit-coercion': 'off',
    // 禁止在全局范围使用变量或函数声明(但是因为目前大部分都是 ES 模块, 所以暂不使用)
    'no-implicit-globals': 'off',
    // 禁止使用类似 eval 的方法
    'no-implied-eval': 'error',
    // 允许 this 关键字在类和类对象之外出现
    'no-invalid-this': 'off',
    // 禁用 __iterator__ 属性
    'no-iterator': 'error',
    // 禁用标签语句
    'no-labels': 'error',
    // 禁止出现魔术数字(应由常量取代)
    'no-magic-numbers': ['warn', {
      ignore: [-1, 0, 1],
      ignoreArrayIndexes: true,
    }],
    // 禁止出现多个冗余的空格
    'no-multi-spaces': 'error',
    // 允许使用多行字符串
    'no-multi-str': 'off',
    // 必须将 new 创建的实例对象赋值给一个变量
    'no-new': 'error',
    // 禁止使用 Function 构造函数
    'no-new-func': 'error',
    // 禁止出现原始包装实例(如使用 new String() 创建的字符串实例)
    'no-new-wrappers': 'error',
    // 禁止八进制字面量(以 0 开头的数字)
    'no-octal': 'error',
    // 禁止在字符串字面量中使用八进制转义序列
    'no-octal-escape': 'error',
    // 不允许对函数参数进行赋值
    'no-param-reassign': 'error',
    // 禁用 __proto__ 属性(应该使用 Object.getPrototypeOf 和 Object.setPrototypeOf 代替)
    'no-proto': 'error',
    // 禁止在同一作用域中多次声明同一变量
    'no-redeclare': 'error',
    // 禁止在返回语句中赋值(可以使用括号将赋值语句括起来 以避免此规则)
    'no-return-assign': 'error',
    // 禁止不必要的 return await
    'no-return-await': 'error',
    // 禁止使用 Script URL
    'no-script-url': 'error',
    // 禁止自身赋值(如 foo = foo)
    'no-self-assign': 'error',
    // 禁止自身比较(如 x === x)
    'no-self-compare': 'error',
    // 禁止逗号操作符
    'no-sequences': 'error',
    // 不允许抛出异常字面量
    'no-throw-literal': 'error',
    // 循环条件在循环中必须被改变
    'no-unmodified-loop-condition': 'error',
    // 禁止出现未使用过的表达式
    'no-unused-expressions': ['error', {
      allowShortCircuit: true, // 允许使用短路表达式
      allowTernary: true, // 允许使用三元运算符
      allowTaggedTemplates: true, // 允许使用带标签的模板字面量
    }],
    // 禁止出现未使用过的标签
    'no-unused-labels': 'error',
    // 禁止不必要的 .call 和 .apply
    'no-useless-call': 'error',
    // 禁止不必要的 catch 子句(只抛出原始错误)
    'no-useless-catch': 'error',
    // 禁止不必要的字符串拼接
    'no-useless-concat': 'error',
    // 禁止不必要的转义字符
    'no-useless-escape': 'error',
    // 禁止多余的 return 语句
    'no-useless-return': 'error',
    // 禁用 void 操作符
    'no-void': 'error',
    // 禁用 with 语句
    'no-with': 'error',
    // 在严格模式下启用
    // 必须使用 Error 对象作为 Promise 拒绝的原因
    // 'prefer-promise-reject-errors': 'error',
    // 不限制 parseInt 必须使用基数
    'radix': 'off',
    // 在 async 函数中必须存在 await 表达式
    'require-await': 'error',
    // 需要将 var 声明放在作用域的顶部
    'vars-on-top': 'error',
    // 必须将立即执行函数使用括号包裹起来
    'wrap-iife': 'error',
    // 在条件判断中需要变量在前字面量在后
    'yoda': 'error',

    // 变量声明相关
    // 不强制显示变量是否在声明语句中初始化
    'init-declarations': 'off',
    // 禁止删除变量(删除一个变量可能导致不可预期的错误)
    'no-delete-var': 'error',
    // 不允许标签与变量同名
    'no-label-var': 'error',
    // 禁止变量声明覆盖外层作用域中的变量
    'no-shadow': 'error',
    // 关键字不能被重新声明/赋值
    'no-shadow-restricted-names': 'error',
    // 禁用未声明的变量
    'no-undef': 'error',
    // 禁止将初始化变量值为 undefined(因为未初始化的值就是 undefined)
    'no-undef-init': 'error',
    // 允许使用 undefined
    'no-undefined': 'off',
    // 禁止未使用过的变量(声明的变量必须要被使用)
    'no-unused-vars': 'error',
    // 禁止在变量定义前使用它
    'no-use-before-define': 'error',


    // 风格指南
    // 不要求在数组开括号后和闭括号前的强制换行
    'array-bracket-newline': 'off',
    // 禁止在数组开括号后和闭括号前出现空格
    'array-bracket-spacing': ['error', 'never', {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    }],
    // 不要求数组元素间出现换行
    'array-element-newline': 'off',
    // 需要在代码块的开括号后和闭括号前出现空格
    'block-spacing': ['error', 'always'],
    // 大括号风格遵循 one true brace style 风格
    // 建议将注释写在块内的第一行并在下面添加一行空行
    'brace-style': ['error', '1tbs'],
    // 必须使用驼峰拼写法
    camelcase: ['error', {
      properties: 'always',
    }],
    // 必须在对象/导入/导出/函数参数中使用拖尾逗号, 而在数组中不可以使用
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    // 规定逗号在变量声明/数组字面量/对象字面量/函数参数和序列中前后空格的一致性
    // 禁止在逗号前出现空格
    // 必须在逗号后出现空格
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    // 逗号必须放置在当前行的末尾
    'comma-style': ['error', 'last'],
    // 禁止在属性访问表达式中使用空格
    'computed-property-spacing': ['error', 'never'],
    // this 的别名必须是 that
    'consistent-this': ['error', 'that'],
    // 必须在文件末尾保留一行
    'eol-last': ['error', 'always'],
    // 函数标识符和其调用之间不能存在空格
    'func-call-spacing': ['error', 'never'],
    // 函数表达式需要加上命名(因为更方便调试)
    'func-names': ['error', 'always'],
    // 如果函数内有任一参数有换行, 则要求函数括号内换行
    'function-paren-newline': ['error', 'multiline'],
    // 统一缩进为 2 个空格
    'indent': ['error', 2, {
      SwitchCase: 1, // case/default 缩进 0
    }],
    // 设置对象字面量中键值之间的空格风格
    'key-spacing': ['error', {
      beforeColon: false, // 键和冒号之间没有空格
      afterColon: true, // 冒号和值之间至少有一个空格
      mode: 'strict', // 强制冒号前后只有一个空格
    }],
    // 强制关键词前后必须有一个空格
    'keyword-spacing': ['error', {
      before: true, // 关键字前至少有一个空格
      after: true, // 关键字后至少有一个空格
    }],
    // 强制使用 unix 换行符风格
    'linebreak-style': ['error', 'unix'],
    // 类成员之间必须要有空行
    'lines-between-class-members': 'error',
    // 块语句最大可嵌套四层
    'max-depth': ['error', 4],
    // 每行最大长度为 120
    'max-len': ['error', {
      code: 100,
    }],
    // 文件的最大行数为 500 行
    'max-lines': ['error', {
      max: 300,
    }],
    // 函数的最大行数为 50 行(setup 和 render 比较长)
    // 'max-lines-per-function': ['error', {
    //   max: 50,
    // }],
    // 回调函数的最大嵌套深度为 6 层
    'max-nested-callbacks': ['error', {
      max: 6,
    }],
    // 限制函数的参数数量最大为 6 个
    'max-params': ['error', {
      max: 6,
    }],
    // 限制每一行允许的最大语句数量为 1 个
    'max-statements-per-line': ['error', {
      max: 1,
    }],
    // 构造函数必须首字母大写
    'new-cap': 'error',
    // 调用构造函数的时候必须要带括号
    'new-parens': 'error',
    // 方法链中的每个调用都需要换行
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 1, // 允许每行最多调用一次方法
    }],
    // 禁止使用 Array 构造函数(但是允许使用用来创建稀疏数组: new Array(100))
    'no-array-constructor': 'error',
    // 禁止 if 作为唯一语句出现在 else 语句块中(需要改为 else if 形式)
    'no-lonely-if': 'error',
    // 禁止混合使用不同的操作符(如果有 必须加括号)
    'no-mixed-operators': 'error',
    // 禁止使用 tab 和空格混合缩进
    'no-mixed-spaces-and-tabs': 'error',
    // 最大允许两行空行
    'no-multiple-empty-lines': ['error', {
      max: 2,
    }],
    // 禁止嵌套的三元表达式
    'no-nested-ternary': 'error',
    // 禁止使用 Object 构造函数
    'no-new-object': 'error',
    // 允许使用一元操作符 ++ 和 --
    'no-plusplus': 'off',
    // 禁用 tab
    'no-tabs': 'error',
    // 禁用可转换为更简单结构的三元表达式
    'no-unneeded-ternary': 'error',
    // 禁止属性名前出现空白
    'no-whitespace-before-property': 'error',
    // 在单个语句(if/else/while/do-while/for)中不允许换行
    'nonblock-statement-body-position': 'error',
    // 强制在花括号内使用一致的换行符
    'object-curly-newline': ['error', {
      multiline: true, // 如果属性与属性之间有换行符, 则要求有换行符
      consistent: true, // 在仅有一行的情况下 允许换行
    }],
    // 如果花括号内有值 则花括号两边内部必须有空格
    'object-curly-spacing': ['error', 'always'],
    // 如果对象有多个属性则必须放在单独的行上或一行上
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true, // 允许所有的属性放在一行上
    }],
    // 不允许一次声明多个变量
    'one-var': ['error', 'never'],
    // 尽可能的简化赋值操作(x = x + y 改为 x += y)
    'operator-assignment': ['error', 'always'],
    // 必须将操作符放置在换行符之后
    'operator-linebreak': ['error', 'before'],
    // 禁止在块内使用空行填充
    'padded-blocks': ['error', 'never'],
    // 如果 Object.assign 的第一个参数是一个对象字面量 则必须替换为对象扩展符
    'prefer-object-spread': ['error'],
    // 规定对象属性名使用引号的规则
    'quote-props': ['error', 'as-needed', {
      keywords: true, // 如果是关键字, 则需要添加引号
      unnecessary: true, // 默认不允许添加引号
      numbers: true, // 数字需要添加引号
    }],
    // 强制尽可能的使用单引号
    quotes: ['error', 'single'],
    // 不使用分号
    semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }],
    // 分号前面不能有空格 分号后面不能有空格(不是行尾的情况下)
    'semi-spacing': ['error', {
      before: false,
      after: false,
    }],
    // 分号必须出现在行尾
    'semi-style': ['error', 'first'],
    // 块语句前必须有空格
    'space-before-blocks': ['error', 'always'],
    // 禁止函数括号前出现空格, 但是匿名函数和箭头函数的括号前需要有空格
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    // 禁止小括号内出现空格
    'space-in-parens': 'error',
    // 操作符周围必须有空格
    'space-infix-ops': 'error',
    // words 一元操作符后必须有空格 nowords 一元操作符后必须不能有空格
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],
    // switch 的冒号左边必须没有空格, 右边必须有空格
    'switch-colon-spacing': ['error', {
      after: true,
      before: false,
    }],
    // 禁止模板标记和模板字面量之间有空格
    'template-tag-spacing': ['error', 'never'],


    /************************* ES6 ******************************/
    // 箭头函数根据需要强制使用/不使用大括号
    'arrow-body-style': ['error', 'as-needed'],
    // 箭头函数根据需要在参数周围强制使用小括号
    'arrow-parens': ['error', 'always'],
    // 箭头函数的箭头前后必须有空格
    'arrow-spacing': 'error',
    // 派生类的构造函数中必须调用 super 函数
    'constructor-super': 'error',
    // 强制 generator 中星号后必须有空格
    'generator-star-spacing': ['error', {
      before: false,
      after: true,
    }],
    // 禁止修改类声明的变量
    'no-class-assign': 'error',
    // 禁止在可能与比较操作符混淆的地方使用箭头函数
    'no-confusing-arrow': ['error', {
      allowParens: true, // 允许使用小括号作为防混淆的方法
    }],
    // 不允许改变 const 声明的变量
    'no-const-assign': 'error',
    // 禁止类成员中有重复的名称
    'no-dupe-class-members': 'error',
    // 禁止重复的模块导入
    'no-duplicate-imports': 'error',
    // 禁止使用 new 操作 Symbol(应该直接调用 Symbol 函数)
    'no-new-symbol': 'error',
    // 在派生类的构造函数中禁止在 super 函数调用前使用 this 或 super 关键字
    'no-this-before-super': 'error',
    // 禁止不必要的计算属性
    'no-useless-computed-key': 'error',
    // 禁止不必要的构造函数
    'no-useless-constructor': 'error',
    // 禁止无用的别名
    'no-useless-rename': 'error',
    // 不允许用 var
    'no-var': 'error',
    // 在对象字面量中必须使用简写语法
    'object-shorthand': 'error',
    // 必须使用箭头函数作为回调函数(除非函数中使用了 this 关键字)
    'prefer-arrow-callback': 'error',
    // 对于不再被修改的变量 必须使用 const 声明
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],
    // 优先使用数组和对象结构
    'prefer-destructuring': ['error', {
      // 变量解构
      VariableDeclarator: {
        array: false,
        object: true,
      },
      // 赋值表达式
      AssignmentExpression: {
        array: false,
        object: true,
      },
    }, {
        // 不应用于重命名的属性
        enforceForRenamedProperties: false,
      }],
    // 在函数中使用剩余参数而不是 arguments
    'prefer-rest-params': 'error',
    // 调用函数时使用扩展语法而非使用 apply 函数
    'prefer-spread': 'error',
    // 建议使用模板字符串而非字符串连接
    'prefer-template': 'error',
    // generator 函数内必须使用 yield 关键字
    'require-yield': 'error',
    // 强制剩余和扩展运算符与表达式之间没有空格
    'rest-spread-spacing': ['error', 'never'],
    // 不强制 import 语句的排序
    'sort-imports': 'off', // 这个的不管相对导入还是绝对导入 都会统一排序 后期会根据绝对导入在先相对导入在后的规则进行排序
    // 创建 Symbol 时必须带有描述
    'symbol-description': 'error',
    // 禁止模板表达式中的花括号内出现空格
    'template-curly-spacing': ['error', 'never'],
    // yield* 表达式中的 * 的前面必须没有空格 后面必须有空格
    'yield-star-spacing': ['error', {
      before: false,
      after: true,
    }],

    /************************* Vue ******************************/
    // 必须遵守
    // 在 JSX 中禁止出现未使用过的变量(使 no-unused-vars 检测到作为组件出现的变量, 如果不使用 jsx 可以取消该规则)
    'vue/jsx-uses-vars': 'error',
    // 只允许使用同步的计算属性(因为异步的计算属性可能导致不可预期的异常)
    'vue/no-async-in-computed-properties': 'error',
    // 禁止在同一 VM 实例中出现相同的键名
    'vue/no-dupe-keys': 'error',
    // 禁止在同一元素上出现相同属性
    'vue/no-duplicate-attributes': ['error', {
      'allowCoexistClass': true, // 允许普通的 class 和 v-bind:class 共存
      'allowCoexistStyle': true, // 允许普通的 style 和 v-bind:style 共存
    }],
    // 禁止错误的模版语法
    'vue/no-parsing-error': 'error',
    // 禁止覆盖保留值(如 $el $on 等)
    'vue/no-reserved-keys': 'error',
    // 组件的 data 属性必须是函数
    'vue/no-shared-component-data': 'error',
    // 计算属性必须是纯函数(无副作用的)
    'vue/no-side-effects-in-computed-properties': 'error',
    // 禁止在 <template> 元素上设置 key 属性(需要放在真实的元素上)
    'vue/no-template-key': 'error',
    // 禁止在 <textarea> 元素中使用 Mustache 语法(双大括号)
    'vue/no-textarea-mustache': 'error',
    // 禁止注册在模版中未使用的组件
    'vue/no-unused-components': 'error',
    // 禁止出现没有使用过的变量(如 v-for 中生成的变量)
    'vue/no-unused-vars': 'error',
    // 禁止在同一元素上使用 v-for 和 v-if
    'vue/no-use-v-if-with-v-for': 'error',
    // 必须在 <component> 组件上使用动态绑定的 is 属性
    'vue/require-component-is': 'error',
    // prop 验证的类型必须是构造函数(null 和 undefined 除外)
    'vue/require-prop-type-constructor': 'error',
    // render 函数必须始终有返回值
    'vue/require-render-return': 'error',
    // 必须在使用 v-for 的组件上使用动态绑定的 key
    'vue/require-v-for-key': 'error',
    // 对象/数组类型的 prop 的默认值必须由函数返回
    'vue/require-valid-default-prop': 'error',
    // 计算属性必须始终有返回值
    'vue/return-in-computed-property': 'error',
    // 在同一元素上存在多个同种事件绑定的时候 必须在没有修饰符的事件上使用 exact 修饰符
    'vue/use-v-on-exact': 'error',
    // 使用正确的模版根(1. 必须存在根元素 2. 根元素不能是文本 3. 只能存在一个根元素 4. 根元素不能为 tempalte 或 slot)
    'vue/valid-template-root': 'error',
    // 正确的使用 v-bind(1. 指令没有属性值 2. 指令具有无效的修饰符)
    'vue/valid-v-bind': 'error',
    // 正确的使用 v-cloak(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3.指令不可以设置属性值)
    'vue/valid-v-cloak': 'error',
    // 正确的使用 v-else-if(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3. 指令必须有属性值 4. 上一个兄弟元素必须有 v-if 或 v-else-if 指令 5. 不能在同一元素上使用 v-if 或 v-else 指令)
    'vue/valid-v-else-if': 'error',
    // 正确的使用 v-else(类似 v-else-if)
    'vue/valid-v-else': 'error',
    // 正确的使用 v-if(类似 v-else-if 但是不需要上一个兄弟元素中有特定的指令)
    'vue/valid-v-if': 'error',
    // 正确的使用 v-for(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3. 指令必须有属性值 4. 在自定义组件上必须存在 key 5. v-bind:key 的值必须是 v-for 指令定义的值)
    'vue/valid-v-for': 'error',
    // 正确的使用 v-html(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3. 指令必须有属性值)
    'vue/valid-v-html': 'error',
    // 正确的使用 v-model(1. 指令不可以设置参数 2. 指令不可以设置不支持的修饰符 3. 指令必须有属性值 4. 指令的值必须是作为LHS有效的值 5. 该指令不能用于 input 类型为 file 的元素上 6. 该指令的值不能为迭代变量)
    'vue/valid-v-model': 'error',
    // 正确的使用 v-on(1. 必须存在事件名称 2. 指令不可以设置不支持的修饰符 3. 指令必须有属性值)
    'vue/valid-v-on': 'error',
    // 正确的使用 v-once(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3. 指令不可以设置属性值)
    'vue/valid-v-once': 'error',
    // 正确的使用 v-pre(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3. 指令不可以设置属性值)
    'vue/valid-v-pre': 'error',
    // 正确的使用 v-show(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3. 指令必须有属性值)
    'vue/valid-v-show': 'error',
    // 正确的使用 v-text(1. 指令不可以设置参数 2. 指令不可以设置修饰符 3. 指令必须有属性值)
    'vue/valid-v-text': 'error',

    // 强烈推荐
    // 自定义组件上的属性名称必须使用连字符格式
    'vue/attribute-hyphenation': ['error', 'always'],
    // 单行标签的左括号前不需要换行
    // 多行标签的右括号之前需要换行
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never', // 单行元素不需要换行
      'multiline': 'always', // 多行元素需要换行
    }],
    // 开始标签和结束标签的左括号前不需要空格
    // 自闭标签的左括号(包括 /)前需要空格
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never', // 开始标签不需要空格
      'endTag': 'never', // 结束标签不需要空格
      'selfClosingTag': 'always', // 自闭标签需要空格
    }],
    // 标签必须闭合
    'vue/html-end-tags': 'error',
    // 模版中使用两个空格的缩进
    'vue/html-indent': ['error', 2, {
      'attribute': 1, // 属性缩进 1 倍
      'baseIndent': 1, // 顶级语句缩进 1 倍
      'closeBracket': 0, // 右括号缩进 0 倍
      'alignAttributesVertically': true, // 在有多行属性的情况下 所有属性应和第一个属性垂直对齐
    }],
    // 标签属性的引号必须是双引号
    'vue/html-quotes': ['error', 'double'],
    // 没有内容的元素 必须使用自动闭合
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always', // 空元素需要使用自动闭合
        'normal': 'always', // 正常的 html 元素需要使用自动闭合
        'component': 'always', // 组件需要使用自动闭合
      },
      'svg': 'always', // svg 元素需要使用自动闭合
      'math': 'always', // MathML 元素需要使用自动闭合
    }],
    // 单行元素上每行最多存在 3 个属性
    // 多行元素上每行最多存在 1 个属性
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3, // 单行元素上最多存在 3 个属性
      'multiline': {
        'max': 1, // 多行元素上最多存在 1 个属性
        'allowFirstLine': false, // 不允许属性与标签在同一行
      },
    }],
    // 多行元素的内容前后需要换行(pre/textarea/行内元素 可以不用换行)
    'vue/multiline-html-element-content-newline': ['error', {
      'ignoreWhenEmpty': true, // 在元素没有内容的时候禁止报错
      // 'ignores': ['pre', 'textarea', ...INLINE_ELEMENTS], // pre/textarea/行内元素 可以不用换行
      'allowEmptyLines': false, // 不允许内容周围有空行
    }],
    // 统一 Mustache 插值中表达式与大括号的间距为 1 个空格
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    // 组件的 name 属性值必须是大驼峰格式
    'vue/name-property-casing': ['error', 'PascalCase'],
    // 单行标签中的属性间距应该只有一个空格
    'vue/no-multi-spaces': 'error',
    // 标签属性等号周围不应该有空格
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    // 禁止在模版中声明在父作用域中已声明的变量
    'vue/no-template-shadow': 'error',
    // prop 的名称必须是小驼峰格式
    'vue/prop-name-casing': ['error', 'camelCase'],
    // 如果 prop 的 required = false 则必须存在默认值
    'vue/require-default-prop': 'error',
    // 每个 prop 都必须使用类型定义
    'vue/require-prop-types': 'error',
    // 单行元素的内容前后不需要换行
    'vue/singleline-html-element-content-newline': ['off', {
      'ignoreWhenNoAttributes': true,
      'ignoreWhenEmpty': true,
      'ignores': ['pre', 'textarea'],
    }],
    // 必须使用简写形式的 v-bind
    'vue/v-bind-style': ['error', 'shorthand'],
    // 必须使用简写形式的 v-on
    'vue/v-on-style': ['error', 'shorthand'],
    // 检测 v-slot 是否有效
    'vue/valid-v-slot': 'error',
    // 制定 v-slot 的样式
    'vue/v-slot-style': 'error',

    // 推荐
    // 标签中使用固定的属性声明顺序
    'vue/attributes-order': ['error', {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
    }],
    // 允许使用 v-html(但需要注意 xss 攻击)
    'vue/no-v-html': 'off',
    // 组件中使用固定的属性声明顺序
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'fetch',
        'asyncData',
        'setup',
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        'head',
        ['template', 'render'],
        'renderError'
      ]
    }],
    // 禁止在模版中使用 this
    'vue/this-in-template': ['error', 'never'],

    // 适用于 template 的核心规则
    // 在数组括号内使用统一的间距
    'vue/array-bracket-spacing': ['error', 'never', {
      'singleValue': false,
      'objectsInArrays': false,
      'arraysInArrays': false,
    }],
    // 箭头函数的前后必须有一个空格
    'vue/arrow-spacing': ['error', {
      'before': true,
      'after': true,
    }],
    // 语句块的前后必须有空格
    'vue/block-spacing': ['error', 'always'],
    // 使用统一的大括号风格 brace-style
    'vue/brace-style': ['error', '1tbs'],
    // 变量名强制使用驼峰写法
    'vue/camelcase': ['error', {
      'properties': 'always',
    }],
    // 必须在对象/导入/导出/函数参数的尾部使用逗号
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
    }],
    // 在成员表达式中必须在点号之前换行
    'vue/dot-location': ['error', 'property'],
    // 必须使用全等和全不等
    'vue/eqeqeq': ['error', 'always', {
      'null': 'ignore', // 不对 null 应用此规则 可以用于判断 null 和 undefined
    }],
    // 制定对象字面量中键和值之间的间距(键和冒号之前没有空格 冒号和值之间有一个空格)
    'vue/key-spacing': ['error', {
      'beforeColon': false, // 键和冒号之间没有空格
      'afterColon': true, // 冒号和值之间至少有一个空格
      'mode': 'strict', // 强制冒号前后只有一个空格
    }],
    // 关键字前后必须有一个空格
    'vue/keyword-spacing': ['error', {
      'before': true, // 关键字前至少有一个空格
      'after': true, // 关键字后至少有一个空格
    }],
    // 禁止出现空解构
    'vue/no-empty-pattern': 'error',
    // 花括号内的间距必须一致
    'vue/object-curly-spacing': ['error', 'always'],
    // 制定 script 的缩进为两个空格
    'vue/script-indent': ['error', 2, {
      'baseIndent': 0, // 顶级语句缩进 0
      'switchCase': 1, // case/default 缩进 0
    }],
    // 运算符周围需要有空格
    'vue/space-infix-ops': ['error', {
      'int32Hint': false,
    }],
    // 制定一元表达式前后空格
    'space-unary-ops': ['error', {
      'words': true,
      'nonwords': false,
    }],


    // 其他
    // 模版中的元素名称必须使用 kebab-case 格式
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    // 组件名必须与文件名相同
    'vue/match-component-file-name': ['error', {
      'extensions': ['vue', 'jsx'],
      'shouldMatchCase': false,
    }],
    // 禁止使用 scope 属性
    'vue/no-deprecated-scope-attribute': 'error',
    // 必须直接导出组件
    'vue/require-direct-export': 'error',
    // 规定模版中函数的调用方式(没有参数的情况下 不加小括号)
    'vue/v-on-function-call': ['error', 'never'],
  },
}
