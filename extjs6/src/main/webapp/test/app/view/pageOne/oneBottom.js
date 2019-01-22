Ext.define('ExtJs6.view.pageOne.oneBottom', {
    extend: 'Ext.tab.Panel',
    xtype: 'one-bottom',

    uses: [
        'ExtJs6.view.pageOne.bottom.botForm',
        'ExtJs6.view.pageOne.bottom.botGrid'
    ],

    defaults: {
        scrollable: true
    },
    items: [{
        title: '基本信息',
        xtype:'botForm',
    }, {
        title: '订单信息',
        xtype:'botGrid',
    }]
});