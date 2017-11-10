/**
 * Entry for Unit Test
 *
 * @author hzzhangyunlong15 <hzzhangyunlong15@corp.netease.com>
 */
NEJ.define([
    './order/test.js',
    './order/test_web.js',
    './order/test_wap.js',
    '../src/polished/web/ui.js',
    '../src/styled-components/web/ui.js'
],function (test,test_web,test_wap,polishedUI,styledComponentsUI) {
    // mocha.run();
    new polishedUI({}).$inject("#polishedUI");
    // new styledComponentsUI({}).$inject("#styledComponentsUI");
});
