// jQuery(function() {

// 	// ibg class
// 		if('objectFit' in document.documentElement.style === false){
// 		  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

// 		    var image = el.querySelector('img');
// 		    el.style.backgroundImage = 'url("'+image.src+'")';
// 		    el.classList.add('ibg');
// 		    el.classList.remove('_fit');
//  		 });
// 		}
// 	// End ibg class

// $(document).on('click', function(e) {
	// var $target = $(e.target);
// });// $(document).on('click')

	// jQuery(document).ready(function() {
	// 	console.log('jQuery document ready');
	// });

// 	//SVG Fallback
// 	// if(!Modernizr.svg) {
// 	// 	$("img[src*='svg']").attr("src", function() {
// 	// 		return $(this).attr("src").replace(".svg", ".png");
// 	// 	});
// 	// };

// 	//E-mail Ajax Send
// 	//Documentation & Example: https://github.com/agragregra/uniMail
// 	$("form").submit(function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			alert("Thank you!");
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// 	//Chrome Smooth Scroll
// 	try {
// 		$.browserSelector();
// 		if($("html").hasClass("chrome")) {
// 			$.smoothScroll();
// 		}
// 	} catch(err) {

// 	};

// 	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
// });

// $(window).on('load', function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });

(function() {
	// ibg class
	// if('objectFit' in document.documentElement.style === false){
	//   Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

	//     var image = el.querySelector('img');
	//     el.style.backgroundImage = 'url("'+image.src+'")';
	//     el.classList.add('ibg');
	//     el.classList.remove('_fit');
	// 	 });
	// }
	// End ibg class

	if (window.innerWidth > 991.98) {
		document.documentElement.classList.add('sidebar-expanded');
	}
	document.addEventListener('DOMContentLoaded', function() {
		console.log('DOMContentLoaded!');
		

		document.onclick = function(e) {
			var targ = e.target;

			if(targ.closest('.sidebar__burger') !== null){
				if(document.documentElement.classList.contains('sidebar-expanded')){
					document.documentElement.classList.remove('sidebar-expanded');
					document.documentElement.classList.add('sidebar-folded');
				}else{
					document.documentElement.classList.add('sidebar-expanded');
					document.documentElement.classList.remove('sidebar-folded');
				}
			}
		}

		// Управление высотой многострочных <textarea>
		if(document.querySelectorAll('.form__area').length > 0 ){
			autoHeightOnResize();
			Array.prototype.slice.call(document.querySelectorAll('.form__area')).forEach(function(elem) {
				elem.addEventListener('input', autoHeightOnInput);
			});

			window.addEventListener('resize', function(e) {
				Array.prototype.slice.call(document.querySelectorAll('.form__area')).forEach(function(elem) {
					autoHeightOnResize();
				});
			});
			
			function autoHeightOnInput(e) {
			  // Сбрасываем высоту, чтобы она соответствовала текущему объему текста
			  e.target.style.height = '1px';
			  e.target.style.height =  e.target.scrollHeight + 'px';
			}

			function autoHeightOnResize() {
			  // Сбрасываем высоту, чтобы она соответствовала текущему объему текста
				Array.prototype.slice.call(document.querySelectorAll('.form__area')).forEach(function(elem) {
					elem.style.height = '1px';
					elem.style.height =  elem.scrollHeight + 'px';
				});
			}

		}
		// END Управление высотой многострочных <textarea>
		
	});
})();