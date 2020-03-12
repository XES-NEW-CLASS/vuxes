/* eslint-disable */
/**
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version {{version}}
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * 模块处理，支持：Node，AMD，浏览器全局变量
 * root 指代全局变量
 * factory 指代下面的 Popper
 */
; (function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. 注册一个匿名模块
    define(factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. 不支持严格的 CommonJS, 但是支持类似 Node 这样支持 module.exports 的类 CommonJS 环境
    module.exports = factory();
  } else {
    // 浏览器的全局变量，root指代window
    root.Popper = factory();
  }
}(this, function () {

  'use strict';

  // 全局变量，浏览器环境
  var root = window;

  // default options
  var DEFAULTS = {
    // popper 位置
    placement: 'bottom',
    // 是否开启 GPU 加速
    gpuAcceleration: true,

    // 根据给定的像素值将 popper 从原位置进行偏移（可以是负值）
    offset: 0,

    // popper 的边界元素
    boundariesElement: 'viewport',

    // popper 与边界元素的最小距离
    boundariesPadding: 5,

    // popper 会尝试以如下顺序防止溢出，默认情况下他可能在边界元素的左边界和上边界出现溢出
    preventOverflowOrder: ['left', 'right', 'top', 'bottom'],

    // 改变 popper 位置时的选项，默认是翻转到对称面上
    flipBehavior: 'flip',

    // 箭头元素
    arrowElement: '[x-arrow]',

    // 箭头偏移量
    arrowOffset: 0,

    // popper 偏移值的修饰符，用来在偏移值应用到 popper 之前进行修改
    modifiers: ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],

    // 忽略的函数
    modifiersIgnored: [],

    // 绝对定位
    forceAbsolute: false
  };

  /**
   * 创建 Popper.js 的实例
   * @constructor Popper
   * @param {HTMLElement} reference - 用来定位popper的相关元素
   * @param {HTMLElement|Object} popper
   *      用来作为 popper 的HTML元素，或者用来生成 popper 的配置
   * @param {String} [popper.tagName='div']  生成的 popper 的标签名
   * @param {Array} [popper.classNames=['popper']]  给生成的 popper 添加的类名数组
   * @param {Array} [popper.attributes]  通过 `attr:value` 的形式给 popper 添加属性
   * @param {HTMLElement|String} [popper.parent=window.document.body] 父元素的HTML元素或者查询字符串
   * @param {String} [popper.content=''] popper 的内容，可以是文本、HTML或者结点；如果不是文本，应当将 `contentType` 设置为 `html` 或者 `node`
   * @param {String} [popper.contentType='text'] 如果是 `html` 内容会变当做 HTML 解析；如果是 `node` 会原样插入
   * @param {String} [popper.arrowTagName='div'] 箭头元素的标签名
   * @param {Array} [popper.arrowClassNames='popper__arrow'] 应用于箭头元素的类名数组
   * @param {String} [popper.arrowAttributes=['x-arrow']] 应用于箭头元素的属性
   * @param {Object} options
   * @param {String} [options.placement=bottom]
   *      popper 放置位置，可接受如下值: `top(-start, -end), right(-start, -end), bottom(-start, -right),
   *      left(-start, -end)`
   *
   * @param {HTMLElement|String} [options.arrowElement='[x-arrow]']
   *      用于 popper 的箭头的 DOM 结点，或者用来获取该节点的 CSS 选择器
   *      它应当是父级 Popper 的孩子节点
   *      Popper.js 会给该元素添加必须的样式来和它相关的元素对其
   *      默认情况下，他会寻找 popper 子结点中包含 `x-arrow` 属性的结点
   *
   * @param {Boolean} [options.gpuAcceleration=true]
   *      当这一属性被设置为 true 时，popper 的位置将通过 CSS3 的 translate3d 来改变
   *      这样会让浏览器使用 GPU 来加速渲染过程
   *      如果设置为 false，popper 将通过 `top` 和 `left` 属性来定位，不使用 GPU
   *
   * @param {Number} [options.offset=0]
   *      popper 偏移的像素值（可以是负数）
   *
   * @param {String|Element} [options.boundariesElement='viewport']
   *      用来定义 popper 边界的元素
   *      popper 绝不会超出该边界（除非允许 `keepTogether`）
   *
   * @param {Number} [options.boundariesPadding=5]
   *      Additional padding for the boundaries
   *
   * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
   *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
   *      this means that the last ones will never overflow
   *
   * @param {String|Array} [options.flipBehavior='flip']
   *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
   *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
   *      its axis (`right - left`, `top - bottom`).
   *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
   *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
   *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
   *
   * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
   *      List of functions used to modify the data before they are applied to the popper, add your custom functions
   *      to this array to edit the offsets and placement.
   *      The function should reflect the @params and @returns of preventOverflow
   *
   * @param {Array} [options.modifiersIgnored=[]]
   *      Put here any built-in modifier name you want to exclude from the modifiers list
   *      The function should reflect the @params and @returns of preventOverflow
   *
   * @param {Boolean} [options.removeOnDestroy=false]
   *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
   */
  function Popper (reference, popper, options) {
    // 保存相关元素的引用，如果是 jQuery 实例，则取[0]，即获得原始的 HTML 结点
    this._reference = reference.jquery ? reference[0] : reference;
    // 状态初始化
    this.state = {};

    // 如果 popper 变量是一个用来配置的对象，就通过解析它来生成 HTMLElement， 如果没有指定就生成一个默认的 popper
    // 判断是否定义了 popper
    var isNotDefined = typeof popper === 'undefined' || popper === null;
    // 判断 popper 是不是对象
    var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
    if (isNotDefined || isConfig) { // 如果没有定义并且有配置对象
      // 通过该配置生成，或者生成一个默认的
      this._popper = this.parse(isConfig ? popper : {});
    }
    else { // 否则使用给定的 HTMLElement 作为 popper
      this._popper = popper.jquery ? popper[0] : popper;
    }

    // 合并默认选项和传参的选项生成新的选项
    this._options = Object.assign({}, DEFAULTS, options);

    // 重新生成修饰符列表
    this._options.modifiers = this._options.modifiers.map(function (modifier) {
      // 移除忽略的修饰符
      if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return;

      // 将设置 x-placement 提到最前面，因为它会被用来给 popper 增加边距
      // 而边距将被用来计算正确的 popper 的偏移
      if (modifier === 'applyStyle') {
        this._popper.setAttribute('x-placement', this._options.placement);
      }

      // 返回内置的修饰符或者自定义的
      return this.modifiers[modifier] || modifier;
    }.bind(this));

    // make sure to apply the popper position before any computation
    this.state.position = this._getPosition(this._popper, this._reference);
    setStyle(this._popper, { position: this.state.position, top: 0 });

    // fire the first update to position the popper in the right place
    this.update();

    // setup event listeners, they will take care of update the position in specific situations
    this._setupEventListeners();
    return this;
  }


  //
  // Methods
  //
  /**
   * 销毁 popper
   * @method
   * @memberof Popper
   */
  Popper.prototype.destroy = function () {
    this._popper.removeAttribute('x-placement');
    this._popper.style.left = '';
    this._popper.style.position = '';
    this._popper.style.top = '';
    this._popper.style[getSupportedPropertyName('transform')] = '';
    this._removeEventListeners();

    // remove the popper if user explicity asked for the deletion on destroy
    if (this._options.removeOnDestroy) {
      this._popper.remove();
    }
    return this;
  };

  /**
   * 更新 popper 的位置，计算新的偏移并引用新的样式
   * @method
   * @memberof Popper
   */
  Popper.prototype.update = function () {
    var data = { instance: this, styles: {} };

    // store placement inside the data object, modifiers will be able to edit `placement` if needed
    // and refer to _originalPlacement to know the original value
    data.placement = this._options.placement;
    data._originalPlacement = this._options.placement;

    // compute the popper and reference offsets and put them inside data.offsets
    data.offsets = this._getOffsets(this._popper, this._reference, data.placement);

    // get boundaries
    data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);

    data = this.runModifiers(data, this._options.modifiers);

    if (typeof this.state.updateCallback === 'function') {
      this.state.updateCallback(data);
    }
  };

  /**
   * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
   * @method
   * @memberof Popper
   * @param {Function} callback
   */
  Popper.prototype.onCreate = function (callback) {
    // the createCallbacks return as first argument the popper instance
    callback(this);
    return this;
  };

  /**
   * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
   * used to style popper and its arrow.
   * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
   * @method
   * @memberof Popper
   * @param {Function} callback
   */
  Popper.prototype.onUpdate = function (callback) {
    this.state.updateCallback = callback;
    return this;
  };

  /**
   * Helper used to generate poppers from a configuration file
   * @method
   * @memberof Popper
   * @param config {Object} configuration
   * @returns {HTMLElement} popper
   */
  Popper.prototype.parse = function (config) {
    var defaultConfig = {
      tagName: 'div',
      classNames: ['popper'],
      attributes: [],
      parent: root.document.body,
      content: '',
      contentType: 'text',
      arrowTagName: 'div',
      arrowClassNames: ['popper__arrow'],
      arrowAttributes: ['x-arrow']
    };
    config = Object.assign({}, defaultConfig, config);

    var d = root.document;

    var popper = d.createElement(config.tagName);
    addClassNames(popper, config.classNames);
    addAttributes(popper, config.attributes);
    if (config.contentType === 'node') {
      popper.appendChild(config.content.jquery ? config.content[0] : config.content);
    } else if (config.contentType === 'html') {
      popper.innerHTML = config.content;
    } else {
      popper.textContent = config.content;
    }

    if (config.arrowTagName) {
      var arrow = d.createElement(config.arrowTagName);
      addClassNames(arrow, config.arrowClassNames);
      addAttributes(arrow, config.arrowAttributes);
      popper.appendChild(arrow);
    }

    var parent = config.parent.jquery ? config.parent[0] : config.parent;

    // if the given parent is a string, use it to match an element
    // if more than one element is matched, the first one will be used as parent
    // if no elements are matched, the script will throw an error
    if (typeof parent === 'string') {
      parent = d.querySelectorAll(config.parent);
      if (parent.length > 1) {
        console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
      }
      if (parent.length === 0) {
        throw 'ERROR: the given `parent` doesn\'t exists!';
      }
      parent = parent[0];
    }
    // if the given parent is a DOM nodes list or an array of nodes with more than one element,
    // the first one will be used as parent
    if (parent.length > 1 && parent instanceof Element === false) {
      console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
      parent = parent[0];
    }

    // append the generated popper to its parent
    parent.appendChild(popper);

    return popper;

    /**
     * Adds class names to the given element
     * @function
     * @ignore
     * @param {HTMLElement} target
     * @param {Array} classes
     */
    function addClassNames (element, classNames) {
      classNames.forEach(function (className) {
        element.classList.add(className);
      });
    }

    /**
     * Adds attributes to the given element
     * @function
     * @ignore
     * @param {HTMLElement} target
     * @param {Array} attributes
     * @example
     * addAttributes(element, [ 'data-info:foobar' ]);
     */
    function addAttributes (element, attributes) {
      attributes.forEach(function (attribute) {
        element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
      });
    }

  };

  /**
   * Helper used to get the position which will be applied to the popper
   * @method
   * @memberof Popper
   * @param config {HTMLElement} popper element
   * @param reference {HTMLElement} reference element
   * @returns {String} position
   */
  Popper.prototype._getPosition = function (popper, reference) {
    var container = getOffsetParent(reference);

    if (this._options.forceAbsolute) {
      return 'absolute';
    }

    // Decide if the popper will be fixed
    // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
    var isParentFixed = isFixed(reference, container);
    return isParentFixed ? 'fixed' : 'absolute';
  };

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper
   * @access private
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  Popper.prototype._getOffsets = function (popper, reference, placement) {
    placement = placement.split('-')[0];
    var popperOffsets = {};

    popperOffsets.position = this.state.position;
    var isParentFixed = popperOffsets.position === 'fixed';

    //
    // Get reference element position
    //
    var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed);

    //
    // Get popper sizes
    //
    var popperRect = getOuterSizes(popper);

    //
    // Compute offsets of popper
    //

    // depending by the popper placement we have to compute its offsets slightly differently
    if (['right', 'left'].indexOf(placement) !== -1) {
      popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
      if (placement === 'left') {
        popperOffsets.left = referenceOffsets.left - popperRect.width;
      } else {
        popperOffsets.left = referenceOffsets.right;
      }
    } else {
      popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
      if (placement === 'top') {
        popperOffsets.top = referenceOffsets.top - popperRect.height;
      } else {
        popperOffsets.top = referenceOffsets.bottom;
      }
    }

    // Add width and height to our offsets object
    popperOffsets.width = popperRect.width;
    popperOffsets.height = popperRect.height;

    return {
      popper: popperOffsets,
      reference: referenceOffsets
    };
  };


  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper
   * @access private
   */
  Popper.prototype._setupEventListeners = function () {
    // NOTE: 1 DOM access here
    this.state.updateBound = this.update.bind(this);
    root.addEventListener('resize', this.state.updateBound);
    // if the boundariesElement is window we don't need to listen for the scroll event
    if (this._options.boundariesElement !== 'window') {
      var target = getScrollParent(this._reference);
      // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
      if (target === root.document.body || target === root.document.documentElement) {
        target = root;
      }
      target.addEventListener('scroll', this.state.updateBound);
      this.state.scrollTarget = target;
    }
  };

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper
   * @access private
   */
  Popper.prototype._removeEventListeners = function () {
    // NOTE: 1 DOM access here
    root.removeEventListener('resize', this.state.updateBound);
    if (this._options.boundariesElement !== 'window' && this.state.scrollTarget) {
      this.state.scrollTarget.removeEventListener('scroll', this.state.updateBound);
      this.state.scrollTarget = null;
    }
    this.state.updateBound = null;
  };

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper
   * @access private
   * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
   * @param {Number} padding - Boundaries padding
   * @param {Element} boundariesElement - Element used to define the boundaries
   * @returns {Object} Coordinates of the boundaries
   */
  Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
    // NOTE: 1 DOM access here
    var boundaries = {};
    var width, height;
    if (boundariesElement === 'window') {
      var body = root.document.body,
        html = root.document.documentElement;

      height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

      boundaries = {
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
    } else if (boundariesElement === 'viewport') {
      var offsetParent = getOffsetParent(this._popper);
      var scrollParent = getScrollParent(this._popper);
      var offsetParentRect = getOffsetRect(offsetParent);

      // Thanks the fucking native API, `document.body.scrollTop` & `document.documentElement.scrollTop`
      var getScrollTopValue = function (element) {
        return element == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : element.scrollTop;
      }
      var getScrollLeftValue = function (element) {
        return element == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : element.scrollLeft;
      }

      // if the popper is fixed we don't have to substract scrolling from the boundaries
      var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : getScrollTopValue(scrollParent);
      var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : getScrollLeftValue(scrollParent);

      boundaries = {
        top: 0 - (offsetParentRect.top - scrollTop),
        right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
        bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
        left: 0 - (offsetParentRect.left - scrollLeft)
      };
    } else {
      if (getOffsetParent(this._popper) === boundariesElement) {
        boundaries = {
          top: 0,
          left: 0,
          right: boundariesElement.clientWidth,
          bottom: boundariesElement.clientHeight
        };
      } else {
        boundaries = getOffsetRect(boundariesElement);
      }
    }
    boundaries.left += padding;
    boundaries.right -= padding;
    boundaries.top = boundaries.top + padding;
    boundaries.bottom = boundaries.bottom - padding;
    return boundaries;
  };


  /**
   * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
   * @method
   * @memberof Popper
   * @access public
   * @param {Object} data
   * @param {Array} modifiers
   * @param {Function} ends
   */
  Popper.prototype.runModifiers = function (data, modifiers, ends) {
    var modifiersToRun = modifiers.slice();
    if (ends !== undefined) {
      modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
    }

    modifiersToRun.forEach(function (modifier) {
      if (isFunction(modifier)) {
        data = modifier.call(this, data);
      }
    }.bind(this));

    return data;
  };

  /**
   * Helper used to know if the given modifier depends from another one.
   * @method
   * @memberof Popper
   * @param {String} requesting - name of requesting modifier
   * @param {String} requested - name of requested modifier
   * @returns {Boolean}
   */
  Popper.prototype.isModifierRequired = function (requesting, requested) {
    var index = getArrayKeyIndex(this._options.modifiers, requesting);
    return !!this._options.modifiers.slice(0, index).filter(function (modifier) {
      return modifier === requested;
    }).length;
  };

  //
  // Modifiers
  //

  /**
   * Modifiers list
   * @namespace Popper.modifiers
   * @memberof Popper
   * @type {Object}
   */
  Popper.prototype.modifiers = {};

  /**
   * Apply the computed styles to the popper element
   * @method
   * @memberof Popper.modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @returns {Object} The same data object
   */
  Popper.prototype.modifiers.applyStyle = function (data) {
    // apply the final offsets to the popper
    // NOTE: 1 DOM access here
    var styles = {
      position: data.offsets.popper.position
    };

    // round top and left to avoid blurry text
    var left = Math.round(data.offsets.popper.left);
    var top = Math.round(data.offsets.popper.top);

    // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
    // we automatically use the supported prefixed version if needed
    var prefixedProperty;
    if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles.top = 0;
      styles.left = 0;
    }
    // othwerise, we use the standard `left` and `top` properties
    else {
      styles.left = left;
      styles.top = top;
    }

    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    Object.assign(styles, data.styles);

    setStyle(this._popper, styles);

    // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
    // NOTE: 1 DOM access here
    this._popper.setAttribute('x-placement', data.placement);

    // if the arrow modifier is required and the arrow style has been computed, apply the arrow style
    if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
      setStyle(data.arrowElement, data.offsets.arrow);
    }

    return data;
  };

  /**
   * Modifier used to shift the popper on the start or end of its reference element side
   * @method
   * @memberof Popper.modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @returns {Object} The data object, properly modified
   */
  Popper.prototype.modifiers.shift = function (data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftVariation = placement.split('-')[1];

    // if shift shiftVariation is specified, run the modifier
    if (shiftVariation) {
      var reference = data.offsets.reference;
      var popper = getPopperClientRect(data.offsets.popper);

      var shiftOffsets = {
        y: {
          start: { top: reference.top },
          end: { top: reference.top + reference.height - popper.height }
        },
        x: {
          start: { left: reference.left },
          end: { left: reference.left + reference.width - popper.width }
        }
      };

      var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';

      data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftVariation]);
    }

    return data;
  };


  /**
   * Modifier used to make sure the popper does not overflows from it's boundaries
   * @method
   * @memberof Popper.modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @returns {Object} The data object, properly modified
   */
  Popper.prototype.modifiers.preventOverflow = function (data) {
    var order = this._options.preventOverflowOrder;
    var popper = getPopperClientRect(data.offsets.popper);

    var check = {
      left: function () {
        var left = popper.left;
        if (popper.left < data.boundaries.left) {
          left = Math.max(popper.left, data.boundaries.left);
        }
        return { left: left };
      },
      right: function () {
        var left = popper.left;
        if (popper.right > data.boundaries.right) {
          left = Math.min(popper.left, data.boundaries.right - popper.width);
        }
        return { left: left };
      },
      top: function () {
        var top = popper.top;
        if (popper.top < data.boundaries.top) {
          top = Math.max(popper.top, data.boundaries.top);
        }
        return { top: top };
      },
      bottom: function () {
        var top = popper.top;
        if (popper.bottom > data.boundaries.bottom) {
          top = Math.min(popper.top, data.boundaries.bottom - popper.height);
        }
        return { top: top };
      }
    };

    order.forEach(function (direction) {
      data.offsets.popper = Object.assign(popper, check[direction]());
    });

    return data;
  };

  /**
   * Modifier used to make sure the popper is always near its reference
   * @method
   * @memberof Popper.modifiers
   * @argument {Object} data - The data object generated by _update method
   * @returns {Object} The data object, properly modified
   */
  Popper.prototype.modifiers.keepTogether = function (data) {
    var popper = getPopperClientRect(data.offsets.popper);
    var reference = data.offsets.reference;
    var f = Math.floor;

    if (popper.right < f(reference.left)) {
      data.offsets.popper.left = f(reference.left) - popper.width;
    }
    if (popper.left > f(reference.right)) {
      data.offsets.popper.left = f(reference.right);
    }
    if (popper.bottom < f(reference.top)) {
      data.offsets.popper.top = f(reference.top) - popper.height;
    }
    if (popper.top > f(reference.bottom)) {
      data.offsets.popper.top = f(reference.bottom);
    }

    return data;
  };

  /**
   * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
   * Requires the `preventOverflow` modifier before it in order to work.
   * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
   * @method
   * @memberof Popper.modifiers
   * @argument {Object} data - The data object generated by _update method
   * @returns {Object} The data object, properly modified
   */
  Popper.prototype.modifiers.flip = function (data) {
    // check if preventOverflow is in the list of modifiers before the flip modifier.
    // otherwise flip would not work as expected.
    if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
      console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
      return data;
    }

    if (data.flipped && data.placement === data._originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];
    if (this._options.flipBehavior === 'flip') {
      flipOrder = [
        placement,
        placementOpposite
      ];
    } else {
      flipOrder = this._options.flipBehavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);

      var popperOffsets = getPopperClientRect(data.offsets.popper);

      // this boolean is used to distinguish right and bottom from top and left
      // they need different computations to get flipped
      var a = ['right', 'bottom'].indexOf(placement) !== -1;

      // using Math.floor because the reference offsets may contain decimals we are not going to consider here
      if (
        a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) ||
        !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])
      ) {
        // we'll use this boolean to detect any flip loop
        data.flipped = true;
        data.placement = flipOrder[index + 1];
        if (variation) {
          data.placement += '-' + variation;
        }
        data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;

        data = this.runModifiers(data, this._options.modifiers, this._flip);
      }
    }.bind(this));
    return data;
  };

  /**
   * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
   * The offsets will shift the popper on the side of its reference element.
   * @method
   * @memberof Popper.modifiers
   * @argument {Object} data - The data object generated by _update method
   * @returns {Object} The data object, properly modified
   */
  Popper.prototype.modifiers.offset = function (data) {
    var offset = this._options.offset;
    var popper = data.offsets.popper;

    if (data.placement.indexOf('left') !== -1) {
      popper.top -= offset;
    }
    else if (data.placement.indexOf('right') !== -1) {
      popper.top += offset;
    }
    else if (data.placement.indexOf('top') !== -1) {
      popper.left -= offset;
    }
    else if (data.placement.indexOf('bottom') !== -1) {
      popper.left += offset;
    }
    return data;
  };

  /**
   * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
   * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
   * @method
   * @memberof Popper.modifiers
   * @argument {Object} data - The data object generated by _update method
   * @returns {Object} The data object, properly modified
   */
  Popper.prototype.modifiers.arrow = function (data) {
    var arrow = this._options.arrowElement;
    var arrowOffset = this._options.arrowOffset;

    // if the arrowElement is a string, suppose it's a CSS selector
    if (typeof arrow === 'string') {
      arrow = this._popper.querySelector(arrow);
    }

    // if arrow element is not found, don't run the modifier
    if (!arrow) {
      return data;
    }

    // the arrow element must be child of its popper
    if (!this._popper.contains(arrow)) {
      console.warn('WARNING: `arrowElement` must be child of its popper element!');
      return data;
    }

    // arrow depends on keepTogether in order to work
    if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
      console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
      return data;
    }

    var arrowStyle = {};
    var placement = data.placement.split('-')[0];
    var popper = getPopperClientRect(data.offsets.popper);
    var reference = data.offsets.reference;
    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var side = isVertical ? 'top' : 'left';
    var translate = isVertical ? 'translateY' : 'translateX';
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowSize = getOuterSizes(arrow)[len];

    //
    // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
    //

    // top/left side
    if (reference[opSide] - arrowSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
    }
    // bottom/right side
    if (reference[side] + arrowSize > popper[opSide]) {
      data.offsets.popper[side] += (reference[side] + arrowSize) - popper[opSide];
    }

    // compute center of the popper
    var center = reference[side] + (arrowOffset || (reference[len] / 2) - (arrowSize / 2));

    var sideValue = center - popper[side];

    // prevent arrow from being placed not contiguously to its popper
    sideValue = Math.max(Math.min(popper[len] - arrowSize - 8, sideValue), 8);
    arrowStyle[side] = sideValue;
    arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow

    data.offsets.arrow = arrowStyle;
    data.arrowElement = arrow;

    return data;
  };


  //
  // Helpers
  //

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @function
   * @ignore
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes (element) {
    // NOTE: 1 DOM access here
    var _display = element.style.display, _visibility = element.style.visibility;
    element.style.display = 'block'; element.style.visibility = 'hidden';
    var calcWidthToForceRepaint = element.offsetWidth;

    // original method
    var styles = root.getComputedStyle(element);
    var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
    var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
    var result = { width: element.offsetWidth + y, height: element.offsetHeight + x };

    // reset element styles
    element.style.display = _display; element.style.visibility = _visibility;
    return result;
  }

  /**
   * Get the opposite placement of the given one/
   * @function
   * @ignore
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement (placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Given the popper offsets, generate an output similar to getBoundingClientRect
   * @function
   * @ignore
   * @argument {Object} popperOffsets
   * @returns {Object} ClientRect like output
   */
  function getPopperClientRect (popperOffsets) {
    var offsets = Object.assign({}, popperOffsets);
    offsets.right = offsets.left + offsets.width;
    offsets.bottom = offsets.top + offsets.height;
    return offsets;
  }

  /**
   * Given an array and the key to find, returns its index
   * @function
   * @ignore
   * @argument {Array} arr
   * @argument keyToFind
   * @returns index or null
   */
  function getArrayKeyIndex (arr, keyToFind) {
    var i = 0, key;
    for (key in arr) {
      if (arr[key] === keyToFind) {
        return i;
      }
      i++;
    }
    return null;
  }

  /**
   * Get CSS computed property of the given element
   * @function
   * @ignore
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty (element, property) {
    // NOTE: 1 DOM access here
    var css = root.getComputedStyle(element, null);
    return css[property];
  }

  /**
   * Returns the offset parent of the given element
   * @function
   * @ignore
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent (element) {
    // NOTE: 1 DOM access here
    // offsetParent 返回一个指向最近的包含该元素的定位元素或者最近的 table,td,th,body元素。
    var offsetParent = element.offsetParent;
    return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
  }

  /**
   * Returns the scrolling parent of the given element
   * @function
   * @ignore
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getScrollParent (element) {
    var parent = element.parentNode;

    if (!parent) {
      return element;
    }

    if (parent === root.document) {
      // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
      // greater than 0 and return the proper element
      if (root.document.body.scrollTop || root.document.body.scrollLeft) {
        return root.document.body;
      } else {
        return root.document.documentElement;
      }
    }

    // Firefox want us to check `-x` and `-y` variations as well
    if (
      ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow')) !== -1 ||
      ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-x')) !== -1 ||
      ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-y')) !== -1
    ) {
      // If the detected scrollParent is body, we perform an additional check on its parentNode
      // in this way we'll get body if the browser is Chrome-ish, or documentElement otherwise
      // fixes issue #65
      return parent;
    }
    return getScrollParent(element.parentNode);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @function
   * @ignore
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed (element) {
    if (element === root.document.body) {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    return element.parentNode ? isFixed(element.parentNode) : element;
  }

  /**
   * Set the style to the given popper
   * @function
   * @ignore
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
   */
  function setStyle (element, styles) {
    function is_numeric (n) {
      return (n !== '' && !isNaN(parseFloat(n)) && isFinite(n));
    }
    Object.keys(styles).forEach(function (prop) {
      var unit = '';
      // add unit if the value is numeric and is one of the following
      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
        unit = 'px';
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Check if the given variable is a function
   * @function
   * @ignore
   * @argument {*} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction (functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

  /**
   * Get the position of the given element, relative to its offset parent
   * @function
   * @ignore
   * @param {Element} element
   * @return {Object} position - Coordinates of the element and its `scrollTop`
   */
  function getOffsetRect (element) {
    var elementRect = {
      width: element.offsetWidth,
      height: element.offsetHeight,
      left: element.offsetLeft,
      top: element.offsetTop
    };

    elementRect.right = elementRect.left + elementRect.width;
    elementRect.bottom = elementRect.top + elementRect.height;

    // position
    return elementRect;
  }

  /**
   * Get bounding client rect of given element
   * @function
   * @ignore
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect (element) {
    var rect = element.getBoundingClientRect();

    // whether the IE version is lower than 11
    var isIE = navigator.userAgent.indexOf("MSIE") != -1;

    // fix ie document bounding top always 0 bug
    var rectTop = isIE && element.tagName === 'HTML'
      ? -element.scrollTop
      : rect.top;

    return {
      left: rect.left,
      top: rectTop,
      right: rect.right,
      bottom: rect.bottom,
      width: rect.right - rect.left,
      height: rect.bottom - rectTop
    };
  }

  /**
   * Given an element and one of its parents, return the offset
   * @function
   * @ignore
   * @param {HTMLElement} element
   * @param {HTMLElement} parent
   * @return {Object} rect
   */
  function getOffsetRectRelativeToCustomParent (element, parent, fixed) {
    var elementRect = getBoundingClientRect(element);
    var parentRect = getBoundingClientRect(parent);

    if (fixed) {
      var scrollParent = getScrollParent(parent);
      parentRect.top += scrollParent.scrollTop;
      parentRect.bottom += scrollParent.scrollTop;
      parentRect.left += scrollParent.scrollLeft;
      parentRect.right += scrollParent.scrollLeft;
    }

    var rect = {
      top: elementRect.top - parentRect.top,
      left: elementRect.left - parentRect.left,
      bottom: (elementRect.top - parentRect.top) + elementRect.height,
      right: (elementRect.left - parentRect.left) + elementRect.width,
      width: elementRect.width,
      height: elementRect.height
    };
    return rect;
  }

  /**
   * Get the prefixed supported property name
   * @function
   * @ignore
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase)
   */
  function getSupportedPropertyName (property) {
    var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

    for (var i = 0; i < prefixes.length; i++) {
      var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
      if (typeof root.document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
   * objects to a target object. It will return the target object.
   * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
   * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
   * @function
   * @ignore
   */
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function (target) {
        if (target === undefined || target === null) {
          throw new TypeError('Cannot convert first argument to object');
        }

        var to = Object(target);
        for (var i = 1; i < arguments.length; i++) {
          var nextSource = arguments[i];
          if (nextSource === undefined || nextSource === null) {
            continue;
          }
          nextSource = Object(nextSource);

          var keysArray = Object.keys(nextSource);
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
        return to;
      }
    });
  }

  return Popper;
}));
