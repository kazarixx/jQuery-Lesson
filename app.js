// $(document).ready(function () {
  // $('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function(){
//  $( セレクタ ).メソッド ( パラメータ );
// }); 

// 「セレクタ」内のメソッドを、パラーメーターで書き換える

// // 　「.box1」内のCSSを書き換える
// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// /2.1 上から下へスライドさせる/ 
// 「.box1」をslidDown
$(function(){
  $('.box1').slideDown(function(){
   $('.box1').css({
    'background-color':'blue',
    'height':'100px',
    'width':'200px'
   })
   $('.box1').slideUp();
  });
});