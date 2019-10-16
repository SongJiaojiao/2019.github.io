(function($) {

  $.fn.visible = function(partial) {
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  }; 
})(jQuery);


$(document).ready(function(){
  
    
//nav toggler
  var $hamburger = $(".hamburger");
        $hamburger.on("click", function() {
            $hamburger.toggleClass("is-active");
        });
  
  $(".menu-button").click(function(){
    $("#overlay").toggle("slide", {direction:"right"}, 300);
    $(".navbar-vertical li").each(function(i) {
        $(this).delay(80 * i).slideToggle(400);
    });
      });


    

    
});

