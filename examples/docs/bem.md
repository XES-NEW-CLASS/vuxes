# Bem 规范

为了编写可维护的css，该项目采用 Bem 的规范编写css，一方面为了扁平化css，另一方面也可以从样式中看出明显的dom结构

BEM 代表 `block`(块) ， `element` 和 `modifier`(修饰符)

```css
.block { /* styles */ }
.block__element { /* styles */ }
.block--modifier { /* styles */ }
```

一个块就是一个组件，一个按钮可以是一个块。在 BEM 中，块被写为像 class 的名字一样，如下所示：

```css
.button { /* styles */ }
```

元素，直接举例说明

```css
.button__icon { /* styles */ }
.button__text { /* styles */ }
```

有一件事你需要了解。永远不应该链式命名 BEM 元素。 如果你的 class 最终像这样 .form__row__input，你做的事情是非常错误的。有两种方法可以绕过长长的 BEM 链式命名。 他们是：

- 只把子子元素链接到有意义的块
- 创建新的块来保存元素

```html
<!-- 例一 -->
<article class="article">
  <header class="article__header">
    <h1 class="article__title"></h1>
  </header>
</article>

<!-- 例二 -->
<section class="comments">
  <h2 class="comments__title"></h2>
  <article class="comment">
    <h3 class="comment-title"></h3>
  </article>
  <article class="comment">
    <h3 class="comment-title"></h3>
  </article>
</section>

<!-- 例三 -->
<div class="block">
  <h3 class="block__title"></h3>
  <ul class="block__list">
    <li class="block__item">
      <h3 class="item__title"></h3>
    </li>
  </ul>
</div>
```

修饰符是改变某个块的外观的标志。要使用修饰符，可以将 `--modifier` 添加到块中。

```css
/* 禁用状态 */
.button--disable { /* styles */ }
/* 点击状态 */
.button--active { /* styles */ }
```

具体文档参考 [编写模块化CSS：BEM](https://www.w3cplus.com/css/css-architecture-1.html)
