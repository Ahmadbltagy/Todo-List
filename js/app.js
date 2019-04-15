$("ul").on("click","li", function(){
    $(this).toggleClass("completed");
});

//click on D to delete To-do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add new todo
$("input[type='text']").keypress(function(event){
    //charCode for enter
    if(event.which === 13){
        var newTodo = $(this).val();
        //to reset input
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " +newTodo+ "</li>");
    }
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle(500);
});