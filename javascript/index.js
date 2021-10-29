//
// let loading = document.querySelector('.progress-bar')
// loading.animate({
//     width: '100%'
// }, 10000 );

// var loading = $('.progress-bar').animate({
//     width:'100%'
// }, 10000);
//
// $(window).on('load', function () {
//     $('.progress').hide();
// })

$('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
$(window).on('load', function(){
  setTimeout(removeLoader, 1500); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).remove(); //makes page more lightweight
  });
}