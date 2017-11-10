/**
 * Unit Test for Order
 *
 * @author hzzhangyunlong15 <hzzhangyunlong15@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/order/component',
    '../util.js',
    './cases.js'
],function (
    u, Order, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - Order',function () {
        // new instance
        describe('new Order',function () {
            it('should be ok to instance Order',function () {
                var inst = new Order();
                expect(inst).to.be.an.instanceof(Order);
            });
        });
        // test for all api
        ut.runTest(Order,'Order',cases);
    });
});
