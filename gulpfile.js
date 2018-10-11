var gulp = require('gulp');
var server = require('gulp-webserver');
var url = require('url');
var path = require('path');
gulp.task('server',function(){
    return gulp.src('src')
    .pipe(server({
        port:9090,
        middleware:function(req,res,next){
            var pathname = url.parse(req.url).pathname;
            if(pathname === '/favicon.ico'){
                res.end('');
                return false;
            } 
        }

    }))
})