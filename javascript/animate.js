// 隐藏动作效果
var opecity_moves =  [
        { opacity:"0.1"},
        { opacity:"0.3"},
        { opacity:"0.5"},
        { opacity:"0.7"},
        { opacity:"0.9"},
        { opacity:"1"}
    ];
// 动画对象 提供开始 延时 一直运行三个方法 构造函数输入值为 动作效果 选择器名称
    
function Animate(moves,selector){
    if(this instanceof Animate){
        this.moves = moves;
        this.selector = selector;
    }else{
     return new Animate(moves,selector);
    }
}
Animate.prototype = {
    constructor: Animate,
    start:function(){
        var selector =  $(this.selector);
        $.each(window[this.moves],function(index,v){
            selector.animate(v,"slow"); 
    }); 
    },
    delay:function(timeout){
      setTimeout('Animate("'+this.moves +'","'+this.selector +'").start()',timeout);  
    },
    always:function(){
      this.start(); 
      setTimeout('Animate("'+this.moves +'","'+this.selector +'").always()',1);
    } 
};
function AjaxMove(selector){
     if(this instanceof AjaxMove){
        this.selector = selector;
    }else{
     return new Animate(selector);
    }
}

AjaxMove.prototype = {
 constructor: AjaxMove,
 getOrigin:function(fn){
     $.get($(selector).attr("href"),function(response){
        var html = $(response).find("body").children();
        $("body").html(html);
        if(typeof fn === "function"){
            fn();
        }
     });
 }

};

var body_move = [
    {
    position:"fixed",
    left:"900px"
},
{  position:"fixed",
left:"500px"},{
position:"fixed",
left:"300px"  
}
];
    



