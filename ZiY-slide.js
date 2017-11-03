window.onload = function(){
		function slide(playtime="4000"){
			//获取元素
        var slide = document.getElementById('slide');
        var imgs = document.getElementById('imgGroup').getElementsByTagName('img');
        var dots = document.getElementById('clickDot').getElementsByTagName('span');
        var prev = document.getElementById('prev');
        var next = document.getElementById('next');
        var index = 0;
        var timer;
        //显示图片
        function showImg(){
            for(var i = 0;i < imgs.length;i ++){
                if(imgs[i].style.display == 'block'){
                    imgs[i].style.display = 'none';
                    break;
                }
            }
            imgs[index].style.display = 'block';
        }
        //显示导航条
        function showDot(){
            for(var i = 0;i < dots.length;i ++){
                if(dots[i].className == 'click-dot-on'){
                    dots[i].className = '';
                    break;
                }
            }
            dots[index].className = 'click-dot-on';
        }
        //左右箭头点击切换
        next.onclick = function(){
            if(index == imgs.length-1){
                index = 0;
            }else{
                index ++;
            }
            showImg();
            showDot();
        };
        prev.onclick = function(){
            if(index == 0){
                index = imgs.length-1;
            }else{
                index --;
            }
            showImg();
            showDot();
        };
        //点击导航条切换
        for(var i = 0;i < dots.length;i++){
            dots[i].onclick = function(){
                var myIndex = parseInt(this.getAttribute('setindex'));
                index = myIndex;
                showImg();
                showDot();
            };

        }
        //自动切换
        function play(){
            timer = setInterval(function(){
                next.onclick();
            },playtime);
        }
        function stopPlay(){
            clearInterval(timer);
        }
        //移入鼠标停止，移出鼠标播放
        slide.onmouseover = stopPlay;
        slide.onmouseout = play;
        play();
    };
    slide();
	}
		