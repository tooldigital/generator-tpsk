module.exports = Backbone.ModelBase.extend({
//check browser to show fall back if necessary

		init: function(){			
			
		},

		run: function(){
			navigator.sayswho= (function(){
			    var ua= navigator.userAgent, tem, 
			    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
			    if(/trident/i.test(M[1])){
			        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
			        return 'IE '+(tem[1] || '');
			    }
			    if(M[1]=== 'Chrome'){
			        tem= ua.match(/\bOPR\/(\d+)/)
			        if(tem!= null) return 'Opera '+tem[1];
			    }
			    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
			    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
			    return M.join(' ');
			})();
			var browser = navigator.sayswho.split(" ")[0];
			var version = navigator.sayswho.split(" ")[1];
			//console.log('running browser check')
			this.trigger('complete', {
				name:'browser',
				result:{
					browser: browser,
					version: version
				}
			})
		}

});