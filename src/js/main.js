
// capacity color sim selection
$(document).ready(function(){
    //add the Selected class to the checked radio button
    $('input:checked').parent().addClass("select-btn-active");
    //If another radio button is clicked, add the select class, and remove it from the previously selected radio
    $('input:radio').click(function () {
      $('input:not(:checked)').parent().removeClass("select-btn-active");
      $(this).parent().addClass("select-btn-active");
    });
});
// capacity color sim selection end



// SupportPackage js
$('input:checkbox').change(function(){
    if($(this).is(":checked")) {
       $(this).parent().addClass("select-btn-active");
    } else {
     $(this).parent().removeClass("select-btn-active");
    }
});
// SupportPackage js end




// slick slide galerry js
 $('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.slider-nav'
 });
 $('.slider-nav').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: false,
   centerMode: true,
   variableWidth: false,
   arrows: true,
   focusOnSelect: true,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: false
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2
       }
     }
   ]
 });
// slide galery end




// smooth scroll

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}


// smooth scroll BLA BLA
