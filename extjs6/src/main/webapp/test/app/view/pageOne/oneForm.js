Ext.define('ExtJs6.view.pageOne.oneForm', {
    extend: 'Ext.form.Panel',
    xtype:'one-form',
    id:'oneForm',

    layout:'anchor',
    border:false,
    defaults:{
        xtype:'textfield',
        style:'float:left;padding-top:5px;',
        anchor:'18%'
    },
    fieldDefaults:{
        labelAlign:'right',
        labelWidth:70
    },

    items:[
        {
            allowBlank: false,
            fieldLabel: '姓名',
            name: 'username'
        },
        {
            xtype:'combo',
            fieldLabel: '性别',
            name: 'sex',
            value:3,
            store: Ext.create('Ext.data.Store', {
                fields: ['name', 'val'],
                data: [
                    {name: '请选择性别',val: 3},
                    {name: '男',val: 1},
                    {name: '女',val: 0}
                ]
            }),
            queryMode: 'local',
            displayField: 'name',
            valueField: 'val',
            triggerAction: 'all',
        },
        // {
        //     xtype: 'numberfield',
        //     name: 'age',
        //     fieldLabel: '年龄',
        //     minValue: 0, //prevents negative numbers
        //     // Remove spinner buttons, and arrow key and mouse wheel listeners
        //     //hideTrigger: true,
        //     keyNavEnabled: false,
        //     mouseWheelEnabled: false
        // },
        // {
        //     xtype: 'datefield',
        //     fieldLabel:'生日',
        //     name:'birthday',
        // },
        // {
        //     xtype: 'timefield',
        //     name: 'time',
        //     fieldLabel: '时间',
        //     minValue: '6:00 AM',
        //     maxValue: '8:00 PM',
        //     increment: 30,
        // },
        // {
        //     xtype: 'textfield',
        //     fieldLabel:'邮箱',
        //     name:'email',
        //     vtype:'email',
        //     msgTarget: 'side'
        // },
        // {
        //     fieldLabel: '民族',
        //     name: 'nation'
        // },
        // {
        //     fieldLabel: '电话',
        //     name: 'phone'
        // }
    ]
});