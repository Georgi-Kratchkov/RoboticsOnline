// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap.min
//= require turbolinks
//= require_tree .

!function ($) {
	$(function(){
		// carousel demo
		$('#myCarousel').carousel({
			interval: 3000
		})
	})
}(window.jQuery)

jQuery(document).ready(function($) {
	$('.item img').popover({
		html:true
	});
	$('.mob img').popover({
		html:true
	});
	$('.stat p').popover();
});

(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1";
	fjs.parentNode.insertBefore(js, fjs);

}
(document, 'script', 'facebook-jssdk'));
$('.uiGrid').hide()

!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0];
	if(!d.getElementById(id)){
		js=d.createElement(s);
		js.id=id;js.src="https://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js,fjs);
	}
}
(document,"script","twitter-wjs");


(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
po.src = 'https://apis.google.com/js/platform.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

$(document).ready(function(){
	$(this).scrollTop(0);
});