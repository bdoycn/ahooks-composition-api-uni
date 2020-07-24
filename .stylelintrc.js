module.exports = {
  extends: [
    'stylelint-config-rational-order'
  ],
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    /*********************************** 排序 ***********************************/
    'order/order': [
      'custom-properties', // 自定义属性
      'dollar-variables', // 美元变量
      'at-variables', // at 变量(less)
      {
        type: 'at-rule',
        name: 'mixin',
      }, // 声明 @mixin
      {
        type: 'rule',
        selector: /^%[\w-]+$/,
      }, // 声明占位符
      {
        type: 'at-rule',
        name: 'extend',
      }, // 继承 @extend
      {
        type: 'at-rule',
        name: 'include',
      }, // 引用 mixin
      'declarations', // css 声明
      'rules', // 嵌套的规则
      'at-rules', // atKeyword 嵌套的规则
    ],
    "order/properties-order": [],
    "plugin/rational-order": [true, {
      "border-in-box-model": false,
      "empty-line-between-groups": false,
    }],

    /*********************************** 风格 ***********************************/
    // 十六进制颜色必须使用小写
    'color-hex-case': 'lower',
    // 十六进制颜色必须使用 6 位的数字长度
    'color-hex-length': 'long',
    // 字体名称周围最好不要加上引号
    // 函数中引用网址需要添加引号
    'function-url-quotes': 'always',
    // 函数名必须小写
    'function-name-case': 'lower',
    // 禁止在数字中尾随 0
    'number-no-trailing-zeros': true,
    // 字符串周围必须使用单引号
    'string-quotes': 'single',
    // 单位名必须小写
    'unit-case': 'lower',
    // 关键字必须小写
    'value-keyword-case': 'lower',
    // 值列表的逗号后必须有空格
    'value-list-comma-space-after': 'always-single-line',
    // 值列表的逗号前不能有空格
    'value-list-comma-space-before': 'never',
    // 值列表中的不能有空行
    'value-list-max-empty-lines': 0,
    // 属性名必须小写
    'property-case': 'lower',
    // 声明的爆炸后不允许出现空格
    'declaration-bang-space-after': 'never',
    // 声明的爆炸前必须有空格
    'declaration-bang-space-before': 'always',
    // 声明的冒号后如果有多行属性 则必须换行
    'declaration-colon-newline-after': 'always-multi-line',
    // 声明的冒号后必须有一个空格
    'declaration-colon-space-after': 'always',
    // 声明的冒号前不能有空格
    'declaration-colon-space-before': 'never',
    // 声明块的分号后必须换行
    'declaration-block-semicolon-newline-after': 'always',
    // 声明快的分号前不能换行
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    // 声明块的分号后只允许在单行下有一个空格
    'declaration-block-semicolon-space-after': 'always-single-line',
    // 声明块的分号前不允许有空格
    'declaration-block-semicolon-space-before': 'never',
    // 声明块的末尾必须有分号
    'declaration-block-trailing-semicolon': 'always',
    // 块关闭前不允许有空行
    'block-closing-brace-empty-line-before': 'never',
    // 块的右括号后必须有换行符
    'block-closing-brace-newline-after': ['always', {
      ignoreAtRules: ['if', 'else'],
    }],
    // 块的右括号前必须有换行符
    'block-closing-brace-newline-before': 'always',
    // 块的右括号前不能有空格
    // 暂无属性支持
    // 多行块的右括号前不能有空格
    'block-closing-brace-space-before': 'always-single-line',
    // 块的左括号后必须有换行符
    'block-opening-brace-newline-after': 'always',
    // 块的左括号前必须有一个空格
    'block-opening-brace-space-before': 'always',
    // 属性选择器的方括号内不能有空格
    'selector-attribute-brackets-space-inside': 'never',
    // 属性选择器的运算符后不能有空格
    'selector-attribute-operator-space-after': 'never',
    // 属性选择器的运算符前不能有空格
    'selector-attribute-operator-space-before': 'never',
    // 属性选择器的属性值不能加引号
    'selector-attribute-quotes': 'never',
    // 组合选择器后必须有空格
    'selector-combinator-space-after': 'always',
    // 组合选择器前必须有空格
    'selector-combinator-space-before': 'always',
    // 后代选择器之间只能有一个空格
    'selector-descendant-combinator-no-non-space': true,
    // 伪类选择器必须小写
    'selector-pseudo-class-case': 'lower',
    // 伪类选择器的括号中不能有空格
    'selector-pseudo-class-parentheses-space-inside': 'never',
    // 伪元素选择器必须小写
    'selector-pseudo-element-case': 'lower',
    // 伪元素选择器必须使用双冒号
    'selector-pseudo-element-colon-notation': 'double',
    // 类型选择器必须使用小写
    'selector-type-case': 'lower',
    // 选择器列表的逗号后必须有空格
    'selector-list-comma-space-after': 'always-single-line',
    // 选择器列表的逗号前不能有空格
    'selector-list-comma-space-before': 'never',
    // 媒体函数中的冒号后需要有空格
    'media-feature-colon-space-after': 'always',
    // 媒体函数中的冒号前不能有空格
    'media-feature-colon-space-before': 'never',
    // 媒体函数中的特征名称必须小写
    'media-feature-name-case': 'lower',
    // 媒体函数的括号内不能有空格
    'media-feature-parentheses-space-inside': 'never',
    // 媒体函数中的范围运算符后必须有空格
    'media-feature-range-operator-space-after': 'always',
    // 媒体函数中的范围运算符前必须有空格
    'media-feature-range-operator-space-before': 'always',
    // AT 规则名必须使用小写
    'at-rule-name-case': 'lower',
    // AT 规则名后必须有一个空格
    'at-rule-name-space-after': 'always',
    // AT 规则的分号后必须有换行符
    'at-rule-semicolon-newline-after': 'always',
    // AT 规则的分号前不能有空格
    'at-rule-semicolon-space-before': 'never',
    // 星号注释的前后必须有空格
    'comment-whitespace-inside': 'always',
    // 缩进为 2 个空格
    'indentation': 2,
    // 指定 unix 风格的换行符
    'linebreaks': 'unix',
    // 限制最大空行数为 2
    'max-empty-lines': 2,
    // 限制一行最大的长度为 100
    'max-line-length': 100,
    // 禁止行尾空格
    'no-eol-whitespace': true,
    // 禁止第一行为空
    'no-empty-first-line': true,
    // 允许使用颜色名
    "color-named": 'always-where-possible',
  }
}
