$(document).ready(function(){

	$(".dropdown ul").hover(function() {
		$(this).siblings().toggleClass("enabled"); // Ativa e desativa dropdown da barra no topo
	});

	// DESKTOP
	if (window.matchMedia('(min-width: 1024px)').matches) {

		var timeoutId;
		$(".menu-principal > li > a").hover(function() {
			var link = $(this);
			if (!timeoutId) {
				timeoutId = window.setTimeout(function() {
					timeoutId = null;
				$(link).parent().addClass("enabled"); // Define estilo de borda inferior do link de compromisso selecionado
				$(link).addClass("enabled"); // Ativa menu de navegação dos compromissos
				$(link).parent().siblings().removeClass("enabled"); // Anula estilo de borda inferior dos outros links de compromissos
				$(".menu-close").addClass("enabled");
				$(".menu-principal > li > a").not(link).removeClass("enabled");
				$("body").addClass("disable-scroll");
			}, 400);
			} else {

			}
		},
		function () {
			if (timeoutId) {
				window.clearTimeout(timeoutId);
				timeoutId = null;
			}
		});

		var st = 0
		$(window).scroll(function(){
			if ($('body').hasClass('disable-scroll')) {
				$(window).scrollTop(st);
			} else {
				st = $(this).scrollTop();
			}
		});

		$(document).keyup(function(e) {
			if (e.keyCode == 27) {
				$(".menu-close").removeClass("enabled");
				$(".menu-full").siblings().removeClass("enabled");
				$(".menu-principal > li").removeClass("enabled");
				$("body").removeClass("disable-scroll");
			}
		});

		$(".menu-close").click(function() {
			$(this).removeClass("enabled");
			$(".menu-full").siblings().removeClass("enabled");
			$(".menu-principal > li").removeClass("enabled");
			$("body").removeClass("disable-scroll");
		});

	}

	// MOBILE
	if (window.matchMedia('(max-width: 1023px)').matches) {

		$(".mobile-menu").click(function() {
			$(".menu-principal").toggleClass("enabled");
			$(".menu-shadow").toggleClass("enabled");
			$(".mobile-menu i").toggleClass("fa-bars fa-close");
		});

		$(".menu-shadow").click(function() {
			$(".menu-principal").removeClass("enabled");
			$(".menu-shadow").removeClass("enabled");
			$(".mobile-menu i").removeClass("fa-close");
			$(".mobile-menu").addClass("enabled");
			$(".mobile-menu i").addClass("fa-bars");
			$(".menu-full").removeClass("enabled");
			$(".menu-full").siblings().removeClass("enabled");
		});

		$(".mobile-search").click(function() {
			$(".menu-busca").toggleClass("enabled"); // Ativa e desativa campo de busca
			$(".menu-busca input").focus(); // Focus no campo de busca
		});

		$(".menu-principal > li > a").click(function() {
			$(".menu-principal > li > a").removeClass("enabled");
			$(this).addClass("enabled");
			$(this).parent().addClass("enabled");
			$(".menu-full").removeClass("enabled");
			$(this).next().addClass("enabled");
			$(".mobile-menu").removeClass("enabled");

			$(".to-n1 .menu-titulo").empty();
			var tituloN1 = $(this).children("div:first-child").html();
			$(".to-n1 .menu-titulo").append(tituloN1);
		});

		$(".back.to-n1").click(function() {
			$(".mobile-menu").addClass("enabled");
			$(".menu-principal").addClass("enabled");
			$(".menu-full").removeClass("enabled");
			$(".menu-full").siblings().removeClass("enabled");
		});

		$(".back.to-n2").click(function() {
			$(this).parent().removeClass("enabled");
			$(this).parents(".area-dir").siblings().removeClass("disabled");

			$(".to-n2 .menu-titulo").empty();
			$(".to-n2 .menu-titulo").append(tituloN1);
		});

		$(".segundo-nivel").click(function() {
			$(this).next().addClass("enabled");
			$(this).parent().parent().siblings().addClass("disabled");
			
			$(".to-n2 .menu-titulo").empty();
			var titulo = $(this).html();
			$(".to-n2 .menu-titulo").append(titulo);
		});

	}

});