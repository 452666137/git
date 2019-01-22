Ext.define('ExtJs6.view.login.loginController',{
    extend:'Ext.app.ViewController',
    alias:'controller.login',
    onLoginClick: function() {
        var window = this.getView(),
            form = window.down('form'),
            formValues = form.getValues();
        if (form.getForm().isValid()) {
            //发送到服务器端获取返回值再进行处理
            Ext.Ajax.request({
                url: "../user/handle_login.do", //这个是你后台的controller, 用mvc 映射下就可以到后台的java了
                params: {
                    username: formValues['username'],
                    password: formValues['password']
                }, // 这个就是你传回去的参数，这个就是json对象
                method:"post",
                success:function(req){
                    var json = Ext.util.JSON.decode(req.responseText);
                    if(json.state == 200){
                        localStorage.setItem("login_success", true);
                        localStorage.setItem("user", formValues['username']);
                        window.destroy();
                        Ext.create({
                            xtype: 'app-main'
                        });
                    }else {
                        Ext.Msg.alert('sorry',json.message);
                    }
                }
            });
        }
    },
    onRegClick: function() {
        this.getView().destroy();
        Ext.create({
            xtype: 'register'
        });
    },
    onReset: function() {
        var form = this.lookupReference('form');
        form.getForm().reset();
    }
})