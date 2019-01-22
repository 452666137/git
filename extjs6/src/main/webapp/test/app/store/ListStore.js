Ext.define('ExtJs6.store.ListStore', {
    extend: 'Ext.data.Store',

    alias: 'store.listStore',

    fields: [
        '编号', '姓名', '密码', '性别', '年龄'
    ],

    proxy: {
        type: 'ajax',
        url: '',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
    },
    autoLoad: false
});
