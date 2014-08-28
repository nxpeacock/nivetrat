Router.configure({
    layoutTemplate: 'defaultLayout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
    yieldTemplates : {
        'topMenu' : {to : 'topMenu'}
    }
});

Router.map(function(){
    this.route('home',{
        path : '/'
    });
    this.route('visitor',{
        path : '/khach-vieng-tham'
    });
    this.route('history',{
        path : '/lich-su-chat'
    });
    this.route('agents',{
        path : '/nhan-vien'
    });
    this.route('departments',{
        path : '/nhan-vien/phong-ban'
    })
})
