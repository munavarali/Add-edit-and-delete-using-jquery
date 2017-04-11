$(document).ready(function(){
    $("button").click(function(){
    var text = $("#xx").val();
      $("#ll").append('<li><span>'+text+'</span><a href="#edit"><button>Edit</button></a><a href="#delete"><button>Delete</button></a></li>');
    });
});

$(document).on("click", 'a[href="#edit"]', function () {
    $(this).closest("li").find("span").prop("contenteditable", true).focus();
  });

$(document).on("click", 'a[href="#delete"]', function () {
    $(this).closest("li").fadeOut(function () {
    $(this).remove();
     });
 });

