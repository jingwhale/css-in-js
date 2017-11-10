/**
 * OrderUI 组件带默认UI实现文件
 *
 * @version  1.0
 * @author   hzzhangyunlong15 <hzzhangyunlong15@corp.netease.com>
 * @module   pool/component-cssinjs/src/order/ui
 */
NEJ.define( [
    '../component.js',
    'text!./component.html',
    'css!./component.css'
],function(
    Order,
    html,
    css
){
    /**
     * Order UI组件
     *
     * @class   module:pool/component-cssinjs/src/order/ui.OrderUI
     * @extends module:pool/component-order/src/order.Order
     *
     * @param {Object} options
     * @param {Object} options.data 与视图关联的数据模型
     */
    return Order.$extends({
        name     : 'ux-cssinjs-order',
        css      : css,
        template : html
    });
});
