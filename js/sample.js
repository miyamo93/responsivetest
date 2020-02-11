$(function(){
  $('#drop').hover(function(){
      $("ul:not(:animated)", this).slideDown();
  }, function(){
      $("ul",this).slideUp();
  });
});
$(function(){
  $('.bland').hover(function(){
      $(".bland__dropdown:not(:animated)", this).slideDown();
  }, function(){
      $(".bland__dropdown",this).slideUp();
  });
});