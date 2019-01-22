Ext.define('ExtJs6.view.pageOne.one', {
    extend: 'Ext.panel.Panel',
    xtype:'one-main',
    controller: 'one',
    uses: [
        'ExtJs6.view.pageOne.oneController',
        'ExtJs6.view.pageOne.oneToolbar',
        'ExtJs6.view.pageOne.oneForm',
        'ExtJs6.view.pageOne.oneGrid',
        'ExtJs6.view.pageOne.oneBottom',
    ],
    referenceHolder: true,
    layout: 'border',
    height: window.innerHeight-50,

    defaults:{
        collapsible: false,
        split: false
    },

    items: [
        {
            reference:'oneToolbar',
            xtype:'one-toolbar',
            region:'north',
        },{
            reference:'oneForm',
            xtype:'one-form',
            region :'north',
            split: true
        },{
            reference:'oneGrid',
            xtype:'one-grid',
            region :'center'
        },
        // {
        //     reference:'oneBottom',
        //     xtype:'one-bottom',
        //     region :'south',
        //     height:180,
        //     split: true
        // }
    ],
});