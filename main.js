var number;  //设置一个答案
var count=0;    //设置一个计数变量，用于保存猜测次数
var a=0;    //用于保存用户的输入

//初始化
function init(){
    count=0;    //使计数变量归零
    number=Math.floor(Math.random()*99+1);      //设置一个答案,从1·100挑选随机整数
}
function reset(){
    init();
    alert("重置成功");
}
function judge(inputValue,answer){
    count++;    //每判断一次，计数变量自增1
    var textCount="\n当前已猜测"+count+"次";

    if(inputValue>answer){
        alert("你输入的值太大了,"+"输入值为"+inputValue+textCount);
    }else if(inputValue<answer){
        alert("你输入的值太小了,"+"输入值为"+inputValue+textCount);
    }else{
        alert("恭喜你，你答对了,答案是"+answer+textCount+"，程序即将重置新数字");
        reset();    //如果答对了，程序将重置一个新的答案并归零计数变量
    }
}
//当按钮被点击时执行这个函数
function submited(){
    inputValue=document.getElementById("input").value;   //获取来自id为input的textarea的值
    judge(inputValue,number);    //根据用户输入值与答案判断结果
}
init();