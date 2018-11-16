// app.service('service_parent',function (){
// 	this.service_child = function (x) {
// 		///console.log('tetetete');
//         return parseInt(x) +1;
//     }
// });



app.factory('service_parent',function ()
	{
		return {
			service_child : function (x) {
	        return parseInt(x) +1;
	    }
	}
});