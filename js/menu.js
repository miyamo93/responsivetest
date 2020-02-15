$(function(){
  $('.category').hover(function(){
      $("ul:not(:animated)", this).show();
  }, function(){
      $("ul",this).hide();
  });
});
$(function(){
  $('.bland').hover(function(){
      $("ul:not(:animated)", this).show();
  }, function(){
      $("ul",this).hide();
  });
});