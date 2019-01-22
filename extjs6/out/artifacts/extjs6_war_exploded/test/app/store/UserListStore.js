Ext.define('ExtJs6.store.UserListStore', {
    extend: 'Ext.data.Store',

    alias: 'store.userListStore',

    fields: [
        '编号', '姓名', '密码', '性别', '年龄'
    ],

    proxy: {
        type: 'ajax',
        url: '../user/handle_list.do',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        paramsAsJson: true
    },
    autoLoad: true
});
