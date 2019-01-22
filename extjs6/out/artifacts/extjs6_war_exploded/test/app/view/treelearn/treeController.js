Ext.define('ExtJs6.view.treelearn.treeController',{
    extend:'Ext.app.ViewController',
    alias:'controller.treeController',
    
    control: {  
            'treesLeft': {//组件别名，表示要控制的是该组件  
            selectionchange: 'onTreeNavSelectionChange'  
        }  
    }, 

    onLoginOutClick: function () {//注销
        // Remove the localStorage key/value
        localStorage.removeItem('login_success');
        localStorage.removeItem('user');
        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },


    onTreeNavSelectionChange: function(selModel, records) {  
        var record = records[0];  
        if (record) {  
            this.redirectTo(record.getId()); 
            
        }  
    },

    routes  : {  
        ':id': 'handleRoute',//执行跳转          
    },

    handleRoute : function(id) {  
        var me = this,  
            treeView = me.getView(),  
            treesLeft = treeView.down('treesLeft'), 
            treesCenter = treeView.down('treesCenter'), 
            store = treesLeft.getStore(),  
            node = store.getNodeById(id),
            className,cmp,ViewClass;  
      
        //响应路由，左侧树定位到相应节点  
        treesLeft.getSelectionModel().select(node);  
        treesLeft.getView().focusNode(node); 

        treesCenter.removeAll(true);  
        if (node.isLeaf()) {
            className = Ext.ClassManager.getNameByAlias('widget.' + id);
            cmp = Ext.create(className);
            treesCenter.add(cmp);
        }
    },
   
});