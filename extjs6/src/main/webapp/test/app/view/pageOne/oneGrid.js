Ext.define('ExtJs6.view.pageOne.oneGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'one-grid',

    requires: [
        'ExtJs6.store.ListStore'
    ],
    store: {
        type: 'listStore'
    },
    columns: [
        { text: 'id',  dataIndex: 'id'},
        { text: '姓名', dataIndex: 'username'},
        { text: '密码', dataIndex: 'password'},
        { text: '性别', dataIndex: 'sex'},
        { text: '年龄', dataIndex: 'age'}
    ],
});