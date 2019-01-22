Ext.define('ExtJs6.view.treelearn.trees', {
    extend: 'Ext.container.Viewport',
    xtype:'trees-main',

    requires: [
        'ExtJs6.view.treelearn.treeController',
        'ExtJs6.view.main.MainModel',
        'ExtJs6.view.treelearn.region.treesTop',
        'ExtJs6.view.treelearn.region.treesLeft',
        'ExtJs6.view.treelearn.region.treesCenter',
        'ExtJs6.view.pageOne.one'

    ],

    controller: 'treeController',
    viewModel: 'main',
    referenceHolder: true,
    layout: 'border',
    defaults:{
        collapsible: true,
        split: true
    },

    

    items: [
        {
            reference:'treesTop',
            xtype:'treesTop',
            region :'north',
            collapsible: false,
            split: false,
            height:50
        },
        // {
        //     region :'south',
        //     bind: {
        //         html: '下'
        //     }
        // },
        {
            reference:'treesLeft',
            xtype:'treesLeft',
            region :'west',
            width:220,
        },
        // {
        //     region :'east',
        //     width:200,
        //     bind: {
        //         html: '右'
        //     }
        // },
        {
            reference:'treesCenter',
            xtype:'treesCenter',
            region :'center',
            collapsible: false,
            split: false,
        }
    ]
});