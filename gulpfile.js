var gulp = require('gulp');
var server = require('gulp-webserver');
var url = require('url');
var path = require('path');
var fs = require('fs');
var data = require('./src/data/data.json')
gulp.task('server',function(){
    return gulp.src('src')
    .pipe(server({
        port:9090,
        livereload:true,
        open:true,
        middleware:function(req,res,next){
            var pathname = url.parse(req.url).pathname;
            if(pathname === '/favicon.ico'){
                res.end('');
                return false;
            } 
           if(pathname === '/api/list'){
                res.end(JSON.stringify({code:1,data:data}))
           } else{
            pathname = pathname==='/'?'/index.html':pathname;
            res.end(fs.readFileSync(path.join(__dirname,'src',pathname)))
           }
        }

    }))
})