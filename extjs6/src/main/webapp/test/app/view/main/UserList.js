Ext.define('ExtJs6.view.main.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userList',

    requires: [
        'ExtJs6.store.UserListStore'
    ],

    title: '用户列表    ',
    height :500,
    store: {
        type: 'userListStore'
    },

    columns: [
        { text: '编号',  dataIndex: 'id' },
        { text: '姓名',  dataIndex: 'username' },
        { text: '密码',  dataIndex: 'password' },
        { text: '性别',  dataIndex: 'sex'},
        { text: '年龄',  dataIndex: 'age', flex: 1 }
    ],

});