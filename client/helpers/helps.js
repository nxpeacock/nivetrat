UI.registerHelper('isPath',function(paths){
    var reg = new RegExp(paths,1);
    var context = Router.current();
    return context && reg.test(context.path);
})