Ext.define('ExtJs6.view.reg.registerController',{
    extend:'Ext.app.ViewController',
    alias:'controller.register',
    onRegClick: function() {
        var window = this.getView(),
            form = window.down('form'),
            formValues = form.getValues();
        if (form.getForm().isValid()) {
            //发送到服务器端获取返回值再进行处理
            Ext.Ajax.request({
                url: "../user/handle_reg.do", //这个是你后台的controller, 用mvc 映射下就可以到后台的java了
                params: {
                    username: formValues['username'],
                    password: formValues['password'],
                    sex: formValues['sex'],
                    age: formValues['age']
                }, // 这个就是你传回去的参数，这个就是json对象
                method:"post",
                success:function(req){
                    var json = Ext.util.JSON.decode(req.responseText);
                    if(json.state == 200){
                        Ext.Msg.alert('success','注册成功!');
                        window.destroy();
                        Ext.create({
                            xtype: 'login'
                        });
                    }else {
                        Ext.Msg.alert('sorry',json.message);
                    }
                }
            });
        }
    },
    onLoginClick: function() {
        this.getView().destroy();
        Ext.create({
            xtype: 'login'
        });
    },
    onReset: function() {
        var form = this.lookupReference('form');
        form.getForm().reset();
    }
})