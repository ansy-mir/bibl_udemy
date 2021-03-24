import './lib/lib';
import $ from './lib/lib';

$('.active').on('click', sayHello);
$('.active').off('click', sayHello);

function sayHello() {
  console.log('Hello');
}

$('button').click(function() {
  $('div').eq(2).toggleClass('active');
});


// $('div').getAttr('data');

// console.log($('button').html('Hello'));

// $('div').click(function(){
//   console.log($(this).index());
// });

//Внутри третьего дива найти все, которые подходят под селектор more
// console.log($('div').eq(2).find('.more'));

//
// console.log($('.some').closest('.findmeö').addClass('fkjkjf'));

console.log($('.more').eq(0).siblings());