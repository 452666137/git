Ext.define('ExtJs6.view.treelearn.region.treesTop', {
    extend: 'Ext.toolbar.Toolbar',
    xtype:'treesTop',

    style:'background-color:#35baf6;color:#fff;',
    items:[
        {
            xtype:'label',
            bind:{
                text:'ExtJs6'
            },
            style:'font-size:20px;font-weight:bold;'
        },'->',
        {
            xtype:'label',
            bind:{
                text:'当前用户：'+ localStorage.getItem("user"),
            },
        },
        {  
            // text:'注销',
            xtype:'button',
            iconCls:'x-fa fa-power-off',
            handler: 'onLoginOutClick'
        }
    ]
    
});