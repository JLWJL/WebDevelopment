(function(){
	const burger_menu = document.querySelector('.burger');
	const nav_menues = document.querySelector('.nav-menues');




	burger_menu.addEventListener('click', showMenues);






	function showMenues(){
		nav_menues.classList.toggle('mob-show-nav');
	}
})();
