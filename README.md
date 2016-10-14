# youXiu（还没为ms实现兼容）
还在思考的问题，要不要采用js实现全响应呢？
                        function autoRem(){
                                var w = $(window).width();
                                //console.log(w);
                                var val = w/(750/1.25);
                                $('html').css('font-size', val*100+'%');
                        }
                        $(function(){
                                autoRem();
                        })
                        $(window).resize(function(){
                                autoRem();
                        })
# 原因是，对于网速低的用户而言，js文件的加载将存在比较久的延迟，在js 加载后将造成闪的一下，会降低用户体验。
