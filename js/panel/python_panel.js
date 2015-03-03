/*
* 自定义JS样式
* 
* 
*/

$(document).ready(function(){

 $("pre").addClass("prettyprint");
 $("pre").addClass("linenums");
 prettyPrint();

 $("p:contains(~~~~)").each(function(){
 $(this).replaceWith('<div class="panel panel-danger">'+'<div class="panel-heading">Warning</div>'+'<div class="panel-body">'+$(this).html()+'</div>'+'</div>');
 });

 $("p:contains(~~~)").each(function(){
 $(this).replaceWith('<div class="panel panel-success">'+'<div class="panel-heading">Note</div>'+'<div class="panel-body">'+$(this).html()+'</div>'+'</div>');
 });

 $(".toc").addClass("well page-nav");
 $("table").wrap('<div class="table-responsive"/>');
 $("table").addClass("table table-bordered table-striped table-hover");

});
