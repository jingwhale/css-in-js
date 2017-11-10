/**
 * Utility for Unit Test
 *
 * @author hzzhangyunlong15 <hzzhangyunlong15@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'base/event',
    'util/ajax/xdr',
    'util/ajax/rest'
],function(
    u, v, j, jj,
    exports
){
    // constant variables
    var DT_MOCKER = {};
    var expect = chai.expect;

    var doFilter = function (event, rest) {
        var args = event.args||[],
            opt = args[1]||{},
            url = (args[0]||'').split('?')[0]||'',
            pfx = !rest?'':((opt.method||'GET')+':'),
            data = DT_MOCKER[pfx+url];
        // mock request
        console.log('send request -> '+pfx+url);
        if (typeof data==='function'){
            data = data(opt);
        }
        if (data&&opt.onload){
            event.stopped = !0;
            window.setTimeout(function () {
                opt.onload.call(null,data);
            },0);
        }
    };

    // aop ajax for mock detect
    j._$request = j._$request._$aop(
        function (event) {
            doFilter(event, !1);
        }
    );
    // aop rest for mock detect
    jj._$request = jj._$request._$aop(
        function (event) {
            doFilter(event, !0);
        }
    );

    /**
     * 导出列表关键字段信息
     *
     * @param list
     * @param key
     * @returns {Array}
     */
    exports.dumpKEY = function (list, key) {
        var ret = [];
        u._$forEach(list,function (it) {
            ret.push(it[key||'id']);
        });
        return ret;
    };

    /**
     * 构建单项 MOCK 数据
     *
     * @param  {Number} id
     * @param  {Object} meta
     * @return {Object}
     */
    exports.buildMock = function (id, meta) {
        var ret = JSON.parse(JSON.stringify(meta));
        ret.id = id;
        return ret;
    };

    /**
     * 构建 MOCK 数据列表
     *
     * @param   {Number} number - 数据列表长度
     * @param   {Object} meta   - 数据模板
     * @returns {Array}  数据列表
     */
    exports.buildMockList = function (number, meta) {
        var ret = [];
        for(var i=0;i<number;i++){
            ret.push(exports.buildMock(
                u._$randString(), meta
            ));
        }
        return ret;
    };

    /**
     * 构建 MOCK 数据
     *
     * @param   {Object} map - mock 数据，url与返回结果的映射关系
     * @returns {void}
     */
    exports.setupMocker = function (map) {
        u._$merge(DT_MOCKER,map);
    };

    /**
     * Regular 组件常规属性验证器初始化
     *
     * @param   {Object} def - 默认属性信息
     * @param   {Object} ret - 待验证结果
     * @returns {Function}     验证执行函数
     */
    exports.setupProChecker = function(def, ret) {
        ret = u._$merge({},def,ret);
        return function(expect, inst) {
            u._$forIn(ret, function(value,key) {
                expect(inst.data[key]).to.eql(value,key);
            });
        };
    };

    /**
     * Regular 组件计算属性验证器初始化
     *
     * @param   {Object} def - 默认属性信息
     * @param   {Object} ret - 待验证结果
     * @returns {Function}     验证执行函数
     */
    exports.setupComputedChecker = function (def, ret) {
        ret = u._$merge({},def,ret);
        return function(expect, inst) {
            u._$forIn(ret, function(value,key) {
                expect(inst.$get(key)).to.eql(value,key);
            });
        };
    };

    /**
     * 构建测试逻辑
     *
     * @param   {Object}   item  - 配置信息
     * @param   {String}   key   - 接口名称
     * @param   {Function} Class - 类构造器
     * @param   {Object}   ns    - 名字空间
     * @returns {Function} 验证执行函数
     */
    var prepareTest = function (item, key, Class, ns) {
        return function (done) {
            this.timeout(30000);
            var inst,
                opt = item.options||{};
            // build callback
            var callback = function (options) {
                var doing = !1;
                if (item.test){
                    doing = item.test(
                        expect, inst, options
                    );
                }
                if (!doing){
                    done();
                }
            };
            // build instance
            if (!!Class._$allocate){
                // for nej component
                if (!!item.event){
                    if (!item.global){
                        opt[item.event] = callback;
                    }else{
                        v._$addEvent(Class,item.event,callback);
                    }
                }
                inst = Class._$allocate(opt);
            }else{
                // for regular component
                inst = new Class(opt);
                if (!!item.event){
                    inst.$on(item.event,callback);
                }
            }
            expect(inst).to.be.instanceof(Class);
            // build test env
            if (item.pretest){
                item.pretest(ns||Class, inst, item);
            }
            // test api
            var ret = inst[key].apply(
                inst,item.params
            );
            // test result if not event callback
            if (!item.event){
                callback(ret);
            }
        };
    };

    /**
     * 根据用例跑组件测试逻辑
     *
     * @param   {Function} Class - 类构造
     * @param   {String} klass   - 类名称
     * @param   {Object} cases   - 接口用例配置
     * @returns {void}
     */
    exports.runRegularTest = function (Class, klass, cases) {
        u._$loop(cases,function (list, key) {
            describe(klass+'#'+key,function () {
                u._$forEach(list,function (item) {
                    it(item.case,prepareTest(item,key,Class));
                });
            });
        });
    };

    /**
     * 根据用例跑测试逻辑
     *
     * @param   {Object} ns    - 名字空间
     * @param   {String} klass - 类名称
     * @param   {Object} cases - 接口用例配置
     * @returns {void}
     */
    exports.runNEJTest = function (ns, klass, cases) {
        u._$loop(cases,function (list, key) {
            describe(klass+'#'+key,function () {
                u._$forEach(list,function (item) {
                    it(item.case,prepareTest(item,key,ns[klass],ns));
                });
            });
        });
    };

    // alias for runTest
    exports.runTest = exports.runNEJTest;
});
