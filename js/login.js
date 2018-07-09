//登陆注册按钮鼠标跟随移动事件
$('.sign-in').mousemove(function (e) {
    $('.move').css({
        display: "block",
        left: e.offsetX,
        transition: "all .2s ease",
        transform: "translate(-150px,-50%)"
    })
}).mouseleave(function () {
    $('.move').hide();
});


//tab栏点击事件
$(".main .left").click(function () {
    $(".main .lbox").removeClass('active');
    $(".main .rbox").addClass('active');

    //更换内容
    $(".main .lbox").parent().siblings().eq(0).show();
    $(".main .lbox").parent().siblings().eq(1).hide();
});

$(".main .right").click(function () {
    $(".main .rbox").removeClass('active');
    $(".main .lbox").addClass('active');

    //更换内容
    $(".main .rbox").parent().siblings().eq(1).show();
    $(".main .rbox").parent().siblings().eq(0).hide();
});

//鸡蛋动画
$('.info2 input').focus(function(){
    $('.rightbox').fadeIn()
})
$('.left').click(function(){
    $('.rightbox').fadeOut();
})


var email_state = false;
var password_state_length = false;
var password_state_letter = false;
var password_state_number = false;
var repassword_state = false;
//正则密码验证
$('.password').on('input', function () {
    // $('.password').on('change', function () {  
    // console.log('打字');  
    // 获取文本框的内容  
    var firstValue = $(this).val();

    if(firstValue.length >= 8){
        $('.length').addClass('get');
        password_state_length = true;        
    }else{
        $('.length').removeClass('get');
        password_state_length = false;
    }

    if(/[a-zA-Z]/.test(firstValue)){
        $('.letter').addClass('get');
        password_state_letter = true;        
    }else{
        $('.letter').removeClass('get');
        password_state_letter = false;
    }

    if(/[0-9]/.test(firstValue)){
        $('.number').addClass('get');
        password_state_number = true;                
    }else{
        $('.number').removeClass('get');
        password_state_number = false;        
    }
    checkform();
})

//二次密码验证
$('.repassword').on('input', function () {
    var firstValue = $('.password').val();
    var lastValue = $(this).val();
    if(firstValue==lastValue){
        $('.checkpass').addClass('get');
        repassword_state = true;
        
    }else{
        $('.checkpass').removeClass('get');
        repassword_state = false;
    } 
    checkform();    
})

//验证注册是否符合要求
$('.info2 input[type=text]').on('input', function (){

    var thisValue= $(this).val();
    var check = /^[\w_\-\.]+@[\w]+\.([\w]{2,4})$/g;
    if (check.test(thisValue)) {
        $('.rightbox .email').addClass('get');
        email_state = true;
    } else {
        $('.rightbox .email').removeClass('get');
        email_state = false;
    }
    checkform();
})
function checkform() {
    if (email_state && password_state_length && password_state_letter && password_state_number && repassword_state) {
        $('.info2 input[type=submit]').attr("disabled",false);
        $('.info2 input[type=submit]').css({
            cursor: 'pointer',
        })
    } else {
        $('.info2 input[type=submit]').attr("disabled",true);
        $('.info2 input[type=submit]').css({
            cursor: 'not-allowed',
        })
    }
}

