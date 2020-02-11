$(function(){
  $('#drop').hover(function(){
      $("ul:not(:animated)", this).slideDown();
  }, function(){
      $("ul",this).slideUp();
  });
});
$(function(){
  $('.bland').hover(function(){
      $("ul:not(:animated)", this).slideDown();
  }, function(){
      $("ul",this).slideUp();
  });
});