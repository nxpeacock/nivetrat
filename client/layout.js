Template.topMenu.rendered = function(){
    $('.ui.dropdown').dropdown();
};

Template.topMenu.helpers({
   subMenu : function(){
       var subMenuNames = ['sub-menu-dashboard','sub-menu-visitors','sub-menu-history','sub-menu-agents','sub-menu-report'];
       var routePaths = ['/','khach-vieng-tham','lich-su-chat','nhan-vien','bao-cao'];
       var context = Router.current();
       var index = 0;
       _.each(routePaths,function(e,i){
           try{
               var reg = new RegExp(e,'i');
               if(reg.test(context.path)){
                   index = i;
                   return;
               }
           }catch(ex){
                console.log(ex)
           }
       });
       return subMenuNames[index];
   }
});