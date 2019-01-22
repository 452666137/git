Ext.define('ExtJs6.view.login.login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'Ext.form.Panel',
        'ExtJs6.view.login.loginController'
    ],

    controller:'login',

    title:'用户登录',

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
                }
            ]
        }
    ],
    buttonAlign: 'center',
    buttons: [
        {
            text: '登录',
            iconCls:'x-fa fa-sign-in',
            formBind: true,//按钮是否可用取决于form
            listeners: { 
                click: 'onLoginClick'
            }
        },
        {
            text: '注册',
            iconCls:'x-fa fa-sign-in',
            formBind: true,//按钮是否可用取决于form
            listeners: {
                click: 'onRegClick'
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