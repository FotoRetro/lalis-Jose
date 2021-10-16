$(document).ready(function(){
 
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 800);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} 
		else {
			$('.ir-arriba').slideUp(300);
		}
	});
 
});

$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
 
// ========================Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}

// =======================Validación
$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#phone').val() == '' ){
            errores += '<p>Ingrese su número de telefono / WhatsApp</p>';
            $('#phone').css("border-bottom-color", "#F14B4B")
        } else{
            $('#phone').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});
