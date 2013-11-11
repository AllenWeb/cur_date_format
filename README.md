cur_date_format
===============

对当前系统时间按参数进行格式化，参数形式可能是这样的：YYYY-MM-DD，当月份和月号的数字值小于10时，会在左边添加一个0进行填充。

在nodejs环境中，通过以下命令安装：

npm install cur_date_format

要将当前系统时间按照“YYYY-MM-DD”格式化，调用 format 方法，举个栗子：

var curDate = require( "cur_date_format" );

console.log( curDate.format( "YYYY-MM-DD" ) );


