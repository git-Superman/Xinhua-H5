function remResize(win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;
    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        if (width > 750) { // 最大宽度
            width = 750;
        }
        var rem = width / 3.75;
        docEl.style.fontSize = rem + 'px';
    }
    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);
    refreshRem();
}

remResize(window);

Array.prototype.for = function(fun){
	if(!fun){
		return;
	}
	let list = this;
	for(let i = 0;i<list.length;i++){
		fun(list[i],i);
	}
}

function $alert(data){
	let time = data.duration || 2000;
	let message =  $('<div style="position:fixed;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:999999999"><div style="background-color:rgba(0,0,0,.7);color:white;padding:12px;text-align:center;border-radius:7px;width:46%;font-size:12px"><span>'+data.msg+'</span></div></div>').appendTo('body');
	
	setTimeout(function(){
		message.remove();
	},time);
}

// 显示分享提示
	function showMaskLayer(){
		$('.pages-background').css('display','none');
		$('.mask-layer').addClass('block').on('click', function () {
			 $(this).removeClass('block');
		})
	}