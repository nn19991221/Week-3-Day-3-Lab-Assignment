$(function () {
  
  $('#galleryList').on('click', 'img', function (e) {
   
    if ($(e.target).hasClass('info-btn')) return;

    const $img = $(this);
    const largeSrc = $img.data('large') || $img.attr('src');
    const alt = $img.attr('alt') || '';

    
    $('.box')
      .empty()
      .append('<button class="close" aria-label="Close">&times;</button>')
      .append($('<img>', { src: largeSrc, alt }));

   
    $('.backdrop').css('display', 'block').animate({ opacity: 0.5 }, 200);
    $('.box').fadeIn(200);

   
    $('body').css('overflow', 'hidden');
  });

 
  $(document).on('click', '.close, .backdrop', function () {
    $('.box').fadeOut(150);
    $('.backdrop').animate({ opacity: 0 }, 150, function () {
      $(this).css('display', 'none');
    });
    $('body').css('overflow', ''); 
  });

  
  $(document).on('keyup', function (e) {
    if (e.key === 'Escape') $('.close').trigger('click');
  });
});
