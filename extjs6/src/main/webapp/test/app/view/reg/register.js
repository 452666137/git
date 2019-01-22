Ext.define('ExtJs6.view.reg.register', {
    extend: 'Ext.window.Window',
    xtype: 'register',

    requires: [
        'Ext.form.Panel',
        'ExtJs6.view.reg.registerController'
    ],

    controller:'register',

    title:'用户注册',

    closable: false, //不可关闭
    resizable: false, //不可伸缩
    autoShow: true,//自动显示
    modal: true, //隐藏其他组件

    items: [
        {
            xtype: 'form',
            reference: 'form', //指定组件层级
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    id: 'username',
                    name: 'username',
                    labelWidth: 65,
                    fieldLabel: '用户名',
                    allowBlank: false,
                    emptyText: '请输入用户名',
                    blankText : '用户名不能为空'
                },
                {
                    xtype: 'textfield',
                    id: 'password',
                    name: 'password',
                    labelWidth: 65,
                    inputType: 'password',
                    fieldLabel: '密　码',
                    allowBlank: false,
                    emptyText: '请输入密码',
                    blankText : '密码不能为空'
                },
                {
                    xtype:'combo',
                    fieldLabel: '性别',
                    name: 'sex',
                    labelWidth: 65,
                    value:1,
                    store: Ext.create('Ext.data.Store', {
                        fields: ['name', 'val'],
                        data: [
                            {name: '男',val: 1},
                            {name: '女',val: 0}
                        ]
                    }),
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'val',
                    triggerAction: 'all',
                },
                {
                    xtype: 'numberfield',
                    name: 'age',
                    labelWidth: 65,
                    fieldLabel: '年龄',
                    minValue: 0, //prevents negative numbers
                    keyNavEnabled: false,
                    mouseWheelEnabled: false,
                    allowBlank: false,
                    emptyText: '请输入年龄',
                    blankText : '年龄不能为空'
                },
            ]
        }
    ],
    buttonAlign: 'center',
    buttons: [
        {
            text: '注册',
            iconCls:'x-fa fa-sign-in',
            formBind: true,//按钮是否可用取决于form
            listeners: {
                click: 'onRegClick'
            }
        },
        {
            text: '登录',
            iconCls:'x-fa fa-sign-in',
            formBind: true,//按钮是否可用取决于form
            listeners: {
                click: 'onLoginClick'
            }
        },
        {
            text: '重置',
            iconCls:'x-fa fa-refresh',
            listeners: {
                click: 'onReset'
            }
        }
    ]
});