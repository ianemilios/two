(function(){
	$('body').css('background','blue');
	$('.nav-warp').on('click','.main-nav',function(e){
		e.preventDefault();
		
		var me=$(this);
		var navWrap=me.closest('.nav-warp');
		var navs=navWrap.find('.test a');
		
		if(!navWrap.hasClass('.active')){
			var width=navWrap.width();
			var radius=width/2;
			
			var startAngle=0;
			var endAngle=360;
			
			var number=navs.length;
			var gap=(endAngle-startAngle)/number;
			//alert(gap);
			navs.each(function(index,element){
				var iniAngle=(startAngle+gap*index)*(Math.PI/180);
				
				var iniX=radius+radius*Math.cos(iniAngle),
					  iniY=radius+radius*Math.sin(iniAngle);
					  
				$(this).css({
					top:iniY+'px',
					left:iniX+'px'
				})
			});
		}
		navWrap.toggleClass('active');
	});
	
})();
























/*$('.nav-warp').on('click','.main-nav',function(e){
		e.preventDefault();
		//阻止事件的默认行为的触发
		var me=$(this),
				navWrap=me.closest('.nav-warp'),
				//closest 是向上逐级查找 找到就返回元素
				//parents是一直向上查找元素直到根元素 把查到的元素放在一个集合 在通过过滤器筛选
				navs=navWrap.find('.test a');
		
		if(!navWrap.hasClass('active')){
			var width=navWrap.width(),
					radius=width/2;
			
			var startAngle=0,
				endAngle=360;
			
			var total=navs.length,
			    gap=(endAngle-startAngle)/total;
			    
			  $.each(navs, function(index,item) {
			  		var myAngle=(startAngle+gap*index)*(Math.PI/180);
			  		//math.pi/180=1度
			  		var myX=radius+radius*Math.cos(myAngle),
			  		      myY=radius+radius*Math.sin(myAngle);
			  		
			  		$(this).css({
			  			left:myX+'px',
			  			top:myY+'px'
			  		});
			  });
			  //以每一个匹配的元素作为上下文来执行一个函数
			  //意味着每次传递进来的函数 this的指向都会改变
		}
		navWrap.toggleClass('active');
		//如果存在就删除 不存在就添加
		
	});*/