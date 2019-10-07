$(function scrolldown(){
  $('a[href=#]').on('click',function(e){
      e.preventDefault();
      $('html,body').animate({scrollTop:$($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

/*const background= documentquerySelector('.container');

const images= document.querySelectorAll('.img-responsive');

images.forEach(function(){
  imgs.addEventListener('click')
});

function reveal(){

  const content= document.querySelector('.content');
  content.classList.add('reveal');

};*/