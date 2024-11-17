# @jyostudio/enum

增强在 JavaScript 中枚举的特性  
与 [@jyostudio/overload](https://www.npmjs.com/package/@jyostudio/overload) 一起使用体验更好

## 引用

浏览器

```HTML
<script type="importmap">
  {
    "imports": {
      "@jyostudio/enum": "https://unpkg.com/@jyostudio/enum"
    }
  }
</script>
```

Node.js

```bash
npm install @jyostudio/enum
```

根据环境引用后，用法完全一致，不需要在使用时区分引用地址和方式。

## 用法

下列代码演示了如何创建一个新的枚举  
我们将在定义枚举类后，直接在 static 构造中调用 set 函数初始化枚举值

```javascript
import Enum from "@jyostudio/enum";

class RenderType extends Enum {
  static {
    this.set({
      CSR: 0,
      SSG: 1,
      SSR: 2
    });
  }
}

console.dir(RenderType.CSR);
console.dir(RenderType.SSG);
console.dir(RenderType.SSR);
```

下面代码演示了使用枚举的典型用例

```javascript
import overload from "@jyostudio/overload";
import Enum from "@jyostudio/enum";

class RenderType extends Enum {
  static {
    this.set({
      CSR: 0,
      SSG: 1,
      SSR: 2
    });
  }
}

class NetworkType extends Enum {
  static {
    this.set({
      None: 0,
      Wifi: 1,
      "2G": 2,
      "3G": 3,
      "4G": 4,
      "5G": 5
    });
  }
}

const fn = overload()
  .add([RenderType], function (value) {
    console.log(`渲染类型为：${value.description}, ${+value}`);

    switch(value) {
      case RenderType.CSR: console.log("走到了 CSR 逻辑"); break;
      case RenderType.SSG: console.log("走到了 SSG 逻辑"); break;
      case RenderType.SSR: console.log("走到了 SSR 逻辑"); break;
    }
  })
  .add([NetworkType], function (value) {
    console.log(`网络类型为：${value.description}, ${+value}`);
  });

/**
 * 渲染类型为：SSR, 2
 * 走到了 SSR 逻辑
 */
fn(RenderType.SSR);
fn(NetworkType["5G"]); // 网络类型为：5G, 5
```

枚举类型支持隐式转换为定义时传入的原始值类型，但也可以通过以下属性获取指定类型

``` javascript
class RenderType extends Enum { /* ... */ }
RenderType.XXX.valNumber; // 强制转换为数字类型
RenderType.XXX.valString; // 强制转换为字符串类型
RenderType.XXX.valBoolean; // 强制转换为布尔类型
RenderType.XXX.valObject; // 强制转换为对象类型
```

通过函数 getAll 可以获取所有定义的枚举

```javascript
import Enum from "@jyostudio/enum";

class RenderType extends Enum {
  static {
    this.set({
      CSR: 0,
      SSG: 1,
      SSR: 2
    });
  }
}

/**
 * [
 *   RenderType{#value: 0, #description: 'CSR'},
 *   RenderType{#value: 1, #description: 'SSG'},
 *   RenderType{#value: 2, #description: 'SSR'}
 * ]
 */
console.dir(RenderType.getAll());
```

还可以通过值/描述反取对应的枚举  
注意：如果取不到，会返回 null

```javascript
import Enum from "@jyostudio/enum";

class RenderType extends Enum {
  static {
    this.set({
      CSR: 0,
      SSG: 1,
      SSR: 2
    });
  }
}

/**
 * 通过值反取：  
 * RenderType{#value: 2, #description: 'SSR'}
 */
console.dir(RenderType.getByValue(2));

/**
 * 通过描述反取：
 * RenderType{#value: 1, #description: 'SSG'}
 */
console.dir(RenderType.getByDescription("SSG"));
```

## 许可证

MIT License

Copyright (c) 2024 nivk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
