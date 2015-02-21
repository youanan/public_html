/*
* 自定义JS样式
* 
* 
*/

$(document).ready(function(){

 $("p:contains(~~~~)").each(function(){
 $(this).replaceWith('<div class="panel panel-danger">'+'<div class="panel-heading">Warning</div>'+'<div class="panel-body">'+$(this).html()+'</div>'+'</div>');
 });
 $("p:contains(~~~)").each(function(){
 $(this).replaceWith('<div class="panel panel-success">'+'<div class="panel-heading">Note</div>'+'<div class="panel-body">'+$(this).html()+'</div>'+'</div>');
 });
});
