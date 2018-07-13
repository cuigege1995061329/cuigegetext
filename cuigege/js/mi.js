var menu = (function() {
				var $ulBox = $('#box');
				return {
					init(){
						this.events();
					},
					events(){
						var _this = this;
						$ulBox.children('li').on('mouseover',function() {
							index = $(this).index()
							$ulBox.children('li').eq(index).css('top','10')
							$ulBox.children('li').eq(index).children('div').stop().slideDown()
						}).on('mouseleave',function() {
							$ulBox.children('li').children('div').stop().slideUp()
						})
					}
				}
			})()
			menu.init()