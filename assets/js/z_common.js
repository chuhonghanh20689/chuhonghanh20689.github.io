// const baseUrlServer = "http://localhost:3000/";
// const baseClient = "http://localhost:4200/";
var baseClient = "https://chuhonghanh20689.github.io/";
var baseUrlServer = "https://fries-salad.herokuapp.com/";
// const baseUrlServer = "http://localhost:5000/";
var serverImagesUrl = "https://s3.us-east-2.amazonaws.com/hanhchbucket/";
var serverThumbnailURL = "https://s3.us-east-2.amazonaws.com/hanhchbucket/";
var commonImgs = baseUrlServer + "assets/commonImgs/";
var adminEmail = "fries-salad.cs@gmail.com";
var adminName = "Admin";
$(document).ready(function () {
    new WOW().init();
    $('.cancelBtn').click(function (event) {
        event.preventDefault();
        $('.commentContent').slideToggle('slow');
        $('.checkoutInfo').slideToggle('slow');
    });
});
window.onscroll = function () { scrollFunction(); };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('#toTopBtn').css('display', 'block');
    }
    else {
        $('#toTopBtn').css('display', 'none');
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
