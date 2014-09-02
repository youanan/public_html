$(document).ready(function(){
 $("table").wrap('<div class="table-responsive"/>');
 $("table").addClass("table table-bordered table-striped table-hover");
 $("a[href^='http*://']").each(function(){
 this.target="_blank";
 });
 });

