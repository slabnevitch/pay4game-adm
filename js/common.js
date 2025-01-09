(function() {

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