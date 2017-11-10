/**
 * Unit Test for OrderUI
 *
 * @author hzzhangyunlong15 <hzzhangyunlong15@corp.netease.com>
 */
NEJ.define([
    'base/element',
    'base/event',
    'pro/order/wap/ui'
],function (
    e, v,
    OrderUI
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test WAP UI - OrderUI',function () {
        // instance Base
        describe('new OrderUI',function () {
            // test case - new instance
            it('should be ok to instance OrderUI',function () {
                var inst = new OrderUI();
                expect(inst).to.be.an.instanceof(OrderUI);
            });
        });
    });
});
