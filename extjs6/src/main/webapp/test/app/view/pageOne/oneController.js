Ext.define('ExtJs6.view.pageOne.oneController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.one',

    // *********新建**********
    addWin1: function () {
        var newWin = Ext.create('ExtJs6.view.pageOne.popups.oneAdd');
        newWin.window = new Ext.Window({
            title: '新建两列480',
            id: 'newWin',
            width: 480,
            modal: true,
            resizable: false,
            closeAction: 'destroy',
            plain: true,
            //buttonAlign: 'center',
            constrainHeader:true,
            items: newWin,
        	buttons: [
	            {
	                text: '提交',
	                scope: this,
	                //handler:"saveAddInfo"
	            },
	            {
	            	text:'关闭',
	            	handler:function() {
	                    newWin.window.destroy();
	                }
	            }
            ]
        });
        newWin.window.show();
    },
    addWin2: function () {
        var newWin = Ext.create('ExtJs6.view.pageOne.popups.oneAdd2');
        newWin.window = new Ext.Window({
            title: '新建一列320',
            id: 'newWin',
            width: 320,
            modal: true,
            resizable: false,
            closeAction: 'destroy',
            plain: true,
            //buttonAlign: 'center',
            constrainHeader:true,
            items: newWin,
        	buttons: [
	            {
	                text: '提交',
	                scope: this,
	                //handler:"saveAddInfo"
	            },
	            {
	            	text:'关闭',
	            	handler:function() {
	                    newWin.window.destroy();
	                }
	            }
            ]
        });
        newWin.window.show();
    },
    onSearch: function () {
        var window = this.getView(),
            form = window.down('form'),
            formValues = form.getValues();
        var oneGrid = window.lookupReference('oneGrid');  //取得grid
        store = oneGrid.getStore();//再获取store
        store.getProxy().url = '../user/find.do';//动态设置URL
        store.load({
            params: {
                username: formValues['username'],
                sex: formValues['sex']
            }
        });//传递参数
    },
    reset: function () {
        var form = this.getView().lookupReference('oneForm');
        form.getForm().reset();
    },

    del:function(){
        var grid = this.getView().lookupReference('oneGrid');
        var selectedKey = grid.selModel.getSelection();

        if (selectedKey.length != 1) {
            Ext.MessageBox.alert('提示', '请选择一条记录！');
        }else{
            Ext.Msg.show({
                title: '提示',
                message: '是否确认删除？',
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function (btn) {
                    if (btn === 'yes') {
                        var key = grid.selModel.getLastSelected().get('id');
                        Ext.Ajax.request({
                            url: '../user/del.do?id=' + key,
                            success: function (response, opts) {
                                Ext.MessageBox.alert('提示', '删除成功');
                                grid.store.reload();
                            },
                            failure: function (response, opts) {
                                Ext.MessageBox.alert('提示', '删除异常');
                            }
                        });
                    }

                }
            })
        }
    },
    /*bindWin: function () {
        var newWin = Ext.create('ExtJs6.view.pageOne.popups.rowEditing');          
        newWin.window = new Ext.Window({
            title: '绑定',
            //id: 'newWin',
            width: 400,
            height:400,
            modal: true,
            resizable: false,
            closeAction: 'hide',
            plain: true,
            //buttonAlign: 'center',
            constrainHeader:true,
            items: newWin,
            buttons: [
                {
                    text: '提交',
                    scope: this,
                    //handler:"saveAddInfo"                 
                },
                {
                    text:'关闭',
                    handler:function() {
                        newWin.window.hide();
                    }
                }
            ]
        });
        newWin.window.show();
    },*/

})