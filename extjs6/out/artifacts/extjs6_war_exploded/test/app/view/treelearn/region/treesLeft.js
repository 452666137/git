Ext.define('ExtJs6.view.treelearn.region.treesLeft', {
    extend: 'Ext.tree.Panel',
    xtype:'treesLeft',

    title:'导航菜单',

    lines: false,
    rootVisible: false,

    store:Ext.create('ExtJs6.store.treelearn.treesLeftStore', {
        storeId: "treesLeftStoreId" 
    }),
});