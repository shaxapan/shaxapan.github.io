// protected mode voor wordpress
$.noConflict();
jQuery(document).ready(function($) {
    // initial
    $('#content').load('http://applestore.uz');

	// menu clicked
	$('ul#nav li a').click(function() {
	    var page = $(this).attr('href');
        $('#content').load('applestore.uz/' + page + '.html');
	return false;
	alert(page);
	})
})