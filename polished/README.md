# Cssinjs 组件

## 组件状态

[![build status](https://g.hz.netease.com/edu-frontend/component-cssinjs/badges/master/build.svg)](https://g.hz.netease.com/edu-frontend/component-cssinjs/commits/master)

## 组件文档

组件详细文档请查看 [这里](./docs/index.html)

## 样式重写

样式的层级结构如下所示

```bash
ux-order
   |- ux-order_xxx ux-order_xxx__aa   描述描述
   |- ux-order_yyy ux-order_yyy__bb   描述描述
   |- ux-order_zzz                            描述描述
```

可用的控制样式表

| 名称 | 描述 |
| :--- | :--- |
| z-dis | 描述描述 |
| z-crt | 描述描述 |

## 使用范例

### 标签化使用

组件关联的结构可如下所示

```html
<ux-order></ux-order>
```

### 脚本中使用

组件内置样式和结构，使用者如果样式与结构同内置一致则可以直接使用，范例如下

```javascript
NEJ.define([
    'pool/component-cssinjs/src/order/ui'
],function(
    OrderUI
){
    var Order = new OrderUI({
        data:{
            
        }
    });
    Order.$inject('#parent');
})
```