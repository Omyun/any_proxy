// sample.js

module.exports = {
    //summary: 'customized wechat request',
    // beforeSendResponse: 在数据获取成功并解析成功后准备返回给 cli 之前做数据处理.
	*beforeSendRequest(requestDetail){
		if (requestDetail.url.indexOf('/weapp/v2/poi/homepage') != -1) { //美团
					console.log(requestDetail.requestData.toString());
			var data = {
                meituan:requestDetail.requestData.toString()
            };
			var xx = requestDetail.requestData.toString('base64');
			var ux = 'index.php?meituan='+xx;
			let res = sendPostHttpRequest(data, ux);
		}
		if (requestDetail.url.indexOf('/wxapp/v1/poi/channelpage?ui=') != -1) { //美团
			console.log(requestDetail.requestData.toString());
			var data = {
                meituan:requestDetail.requestData.toString()
            };
			var xx = requestDetail.requestData.toString('base64');
			var ux = 'index.php?meituan_home='+xx;
			let res = sendPostHttpRequest(data, ux);
		}
		//https://daojia.jd.com/client?channel=wx_xcx&platform=5.0.0&platCode=mini&mpChannel=wx_xcx&appVersion=8.6.0&xcxVersion=8.5.5&appName=paidaojia&functionId=lauch%2Faggregation&isForbiddenDialog=false&isNeedDealError=false&isNeedDealLogin=false&body=%7B%22refPageSource%22%3A%22%22%2C%22userChannel%22%3A%22app%22%2C%22globalPlat%22%3A%222%22%2C%22pageSource%22%3A%22home%22%2C%22ref%22%3A%22%22%2C%22ctp%22%3A%22home%22%7D&afsImg=&lat_pos=22.552229&lng_pos=113.88774&lat=22.552229&lng=113.88774&city_id=1607&deviceToken=25226764-f2a1-4170-8c00-769c7f6ec684&deviceId=25226764-f2a1-4170-8c00-769c7f6ec684&deviceModel=appmodel&business=&traceId=25226764-f2a1-4170-8c00-769c7f6ec6841612364314062
		if (requestDetail.url.indexOf('client?channel=wx_xcx') != -1) { //京东
			console.log(requestDetail.requestData.toString());
			var data = {
                
            };
			var xx = requestDetail.requestOptions.path;
			var result = xx.replace('/client?channel=', '');
			console.log(result);
			var ux = 'index.php?jingdong='+result;
			
			let res = sendPostHttpRequest(data, ux);
		}
		
		
		
	},
	
   // *beforeSendResponse(requestDetail, responseDetail) {
    // 当 anyproxy 匹配到 url 地址中含有 /aw/v4/aw/post/,将数据 body 通过 node.js 以json字符串 post 到自建server
       // if (requestDetail.url.indexOf('/weapp/v2/poi/homepage?ui=') != -1) {
			//console.log(responseDetail.response);
			
            //var data = {
            //    meituan: responseDetail.response.body.toString()
            //};
            // parse 为自己 server 路径
            //
        //}
   // },
};


// node.js 的 post 请求,不能用 js 的 ajax 请求
function sendPostHttpRequest(body, route) {
    var http = require('http')
    var querystring = require('querystring');
    let options = {
        hostname: '127.0.0.1',
        port: 80,
        path: '/' + route,
        method: 'GET',
        headers: {"content-type": 'application/x-www-form-urlencoded'}
    };
    var contents = querystring.stringify(body);
    var req = http.request(options, function(res){
    res.setEncoding('utf8');
    });
    req.write(contents);
    req.end();
};