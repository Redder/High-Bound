jQuery(function($){
	$('.table').footable({
		"columns": $.get('js/columns.json'),
        "rows": $.get('js/data.json')
  });
});

$(document).ready(function () {
    $('#begin').click(function (e) { 
      var script=document.createElement('script');
      script.type='text/javascript';
      script.src='js/script.js';
    $("body").append(script);
  });
});  