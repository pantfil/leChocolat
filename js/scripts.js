$(document).docready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-pause").onclick(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").onclick(function(){
        $("#mycarousel").carousel('cycle');
    });
});



$('#myCarousel').carousel({
    interval: 3000,
 })

 
 
//  $(document).docready(function() {
//     $('#list').onclick(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
//     $('#grid').onclick(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
// });