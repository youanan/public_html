/*
* 自定义JS样式
* 
* 
*/

$(document).ready(function(){
  $(".toc").addClass("well page-nav");
 $("table").wrap('<div class="table-responsive"/>');
 $("table").addClass("table table-bordered table-striped table-hover");
 $("a[href^='http*://']").each(function(){
 this.target="_blank";
$(".toc").addClass("well page-nav");
 });
});
