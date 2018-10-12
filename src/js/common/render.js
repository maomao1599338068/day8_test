define(['handlebars','jquery'],function(handlebars,$){
    
    var render =function(tpl,data,target){
        
         //获取模板
         var content = $(tpl).html();
         
         //渲染模板
        var template = handlebars.compile(content);
        //获取数据
        var html = template(data);

        console.log($(target))
        
        $(target).html(html);
    }

    return render;
})