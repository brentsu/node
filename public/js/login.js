$(function(){
    $('#submit_btn').on('click',function(){
        var userName = $('#username').val();
        var passwd = $('#password').val();
        var data={};
        data.userName = userName;
        data.passwd=passwd;
        $.post('/site/login',data, function(){
            alert('ajax successfully');
         });
});
    $('.register').on("click",function(){
        window.location.href="/site/register"; 
    })

}
)
