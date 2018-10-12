
require(['jquery','render','handlebars'],function($,render,handlebars){
    $.ajax({
        url:'/api/list',
        dataType:'json',
        success:function(res){
            if(res.code===1){
                renderFun(res.data)
               
        
                //     //获取模板
                //     var content = $('#content').html();
                    
                //     //渲染模板
                //    var target = handlebars.compile(content);
                //    //获取数据
                //    var html = target(res.data);
                   
                //    $('.wrap').append(html);
               
           
            }
        }
    })
    function renderFun(data){
      render('#content',data,'.wrap')
    }
})