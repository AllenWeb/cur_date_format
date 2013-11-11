/*
Author:Allen Chen
Des:对当前系统时间按参数进行格式化，参数形式可能是这样的：YYYY-MM-DD，当月份和月号的数字值小于10时，会在左边添加一个0进行填充。
*/
exports.format = function( formatStr ){
	var str = null;
	var d = new Date();
	if( typeof formatStr === 'string' ){
		switch( formatStr ){
			case "YYYY-MM-DD": str = "" 
			  + d.getFullYear() + '-'
              + ( d.getMonth() + 1 < 10 ? '0' + ( d.getMonth() + 1 ) : d.getMonth() + 1 ) + '-'
              + ( d.getDate() - 1 < 10 ? '0' + ( d.getDate() - 1 ) : d.getDate() - 1 );
              break;
            default: if( console ){
            	console.log( "暂未支持'" + formatStr + "'格式，后续会更新。" );
            }
		}
	}else{
		if( console ){
			console.log( "格式化参数需要是一个字符串。" );
		}
	}

	return str;
};