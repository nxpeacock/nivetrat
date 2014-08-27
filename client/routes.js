Router.configure({
    layoutTemplate: 'defaultLayout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
    yieldTemplates : {
        'topMenu' : {to : 'topMenu'}
    }
});

Router.map(function(){
    this.route('dashboard',{
        path : '/'
    })
})
