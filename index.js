function thousandSeparator(number){
  console.log('我对方法做了修改---',number);
  // var isLegal = (typeof number === "string" || typeof number === "number")&&(!isNaN(number))
  // if(isLegal){
  //     return Number(number).toLocaleString("zh-cn")
  // }else{
  //     console.log("非数值型无法添加千位符")
  //     return "not a number"
  // } 
}
function test(){
  return '熊test'
}

// 发包导出
// module.exports = thousandSeparator

// 本地调试导出
export {
  thousandSeparator,
  test
}