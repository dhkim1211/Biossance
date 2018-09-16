$(document).ready(function() {
  $('.toggle-menu').on('click', function() {
    $('.mobile-menu').slideToggle( "slow", function() {
      $('.cover-section').toggleClass('nav-mobile--expanded');
    })
  })
})
