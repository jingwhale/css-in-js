/**
 * Order 组件实现文件
 *
 * @version  1.0
 * @author   hzzhangyunlong15 <hzzhangyunlong15@corp.netease.com>
 * @module   pool/component-cssinjs/src/component/order/component
 */
NEJ.define([
    'pool/component-base/src/base',
    'pool/component-base/src/util',
    'base/element',
    './setting.js'
],function(
    Component,
    util,
    e,
    setting
){
    // 配置标识
    var SETTING_KEY = 'component-cssinjs-order';
    /**
     * Order 组件
     *
     * @class   module:pool/component-cssinjs/src/component/order/component.Order
     * @extends module:pool/component-base/src/base.Component
     *
     * @param {Object} options      - 组件构造参数
     * @param {Object} options.data - 与视图关联的数据模型
     */
    var Order = Component.$extends({
        /**
         * 模板编译前用来初始化参数
         *
         * @protected
         * @method  module:pool/component-cssinjs/src/component/order/component.Order#config
         * @returns {void}
         */
        config: function () {
            // 设置默认配置信息
            this._flushSetting(
                SETTING_KEY,setting
            );
            // FIXME 设置组件配置信息的默认值
            util.extend(this, {
                settingKey: SETTING_KEY
            });
            // FIXME 设置组件视图模型的默认值
            util.extend(this.data, {
                css:{}
            });
            this.supr();
            // TODO
        },

        /**
         * 模板编译之后(即活动dom已经产生)处理逻辑，可以在这里处理一些与dom相关的逻辑
         *
         * @protected
         * @method  module:pool/component-cssinjs/src/component/order/component.Order#init
         * @returns {void}
         */
        init: function () {
            // TODO
            this.supr();

            this._loadCss();
        },

        /**
         * 加载样式
         *
         * @protected
         * @method  module:pool/component-cssinjs/src/component/order/component.Order#_loadCss
         * @returns {void}
         */
        _loadCss: function () {
            this.data.css["ux-cssinjs-order_top"] = {
                "font-size": "18px",
                "color": "red",
                background: polished.adjustHue(180, '#666')
            };

            this.data.css["ux-cssinjs-order-bottom_left"] = {
                "width": "50%",
                background: polished.adjustHue(180, '#999')
            };

            this.data.css["ux-cssinjs-order-bottom_right"] = {
                "width": "50%",
                background: polished.adjustHue(180, '#666')
            };

            // this._setCss1();
            this._setCss2();
        },

        /**
         * 加载样式style加载
         *
         * @protected
         * @method  module:pool/component-cssinjs/src/component/order/component.Order#_setCss1
         * @returns {void}
         */
        _setCss1: function () {
            for (var Key in this.data.css){
                this.data.css[Key] = this._object2string(this.data.css[Key]);
            }
            this.$update();
        },

        /**
         * 加载样式类加载
         *
         * @protected
         * @method  module:pool/component-cssinjs/src/component/order/component.Order#_setCss2
         * @returns {void}
         */
        _setCss2: function () {
            var _cssGlobal = "";
            for (var Key in this.data.css){
                var _key = Key;
                this.data.css[Key] = this._composeCss(Key,this.data.css[Key]);
                _cssGlobal+=this.data.css[Key];

            }
            e._$pushCSSText(_cssGlobal);
            e._$dumpCSSText();
        },

        /**
         * 组合使用类
         *
         * @protected
         * @method  module:pool/component-cssinjs/src/component/order/component.Order#_composeCss
         * @returns {void}
         */
        _composeCss: function (key,_css) {
            var _cssString = "." + key + "{";
            for (var Key in _css){
                _cssString += (Key + ':' +_css[Key] + ';');
            }
            _cssString = _cssString + "}";
            return _cssString;
        },

        /**
         * object2string
         *
         * @protected
         * @method  module:pool/component-cssinjs/src/component/order/component.Order#_object2string
         * @returns {_cssString}
         */
        _object2string: function (_css) {
            var _cssString = '';
            for (var Key in _css){
                _cssString += (Key + ':' +_css[Key] + ';');
            }
            return _cssString;
        },

        /**
         * 组件销毁策略，如果有使用第三方组件务必在此先销毁第三方组件再销毁自己
         *
         * @protected
         * @method  module:pool/component-cssinjs/src/component/order/component.Order#destroy
         * @returns {void}
         */
        destroy: function () {
            // TODO
            this.supr();
        }
    });

    return Order;
});
