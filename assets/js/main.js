(function($) {
	$(document).ready(function() {

		$("[data-pane]").click(function() {
			$("[data-pane]").removeClass("active");
			$(this).addClass("active");
			$(".pane").hide();
			$("#pane" + $(this).data("pane")).show();
		});

		now = new Date();
		d = now.getDate();
		m = now.getMonth()+1;
		y = now.getFullYear();

		$(".checkdate").html(y + "-" + ('0' + m).slice(-2) + "-" + ('0' + d).slice(-2));

		function saveInAnalytics(category, action, label) {
				if ("ga" in window) {
					if (typeof ga.getAll !== "undefined") { 
						tracker = ga.getAll()[0];
				    if (tracker) 
			        tracker.send('event', category, action, label);
					}
				}
		}
	  
	});
})(jQuery);