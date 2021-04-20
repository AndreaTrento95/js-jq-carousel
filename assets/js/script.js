$(document).ready(function(){

    // 
    $('.fa-chevron-right').click(switchRight);
    $('.fa-chevron-left').click(switchLeft);

    // ------ function --------
    function switchRight(){
        // creo una var per individuare l'immagine che ha la classe active
        var img_active = $('.wrapper .images img.active');

        // rimuovo la classe active dall'immagine
        img_active.removeClass('active');
        
        console.log(img_active);

        if(img_active.length === 0){
            img_active.first().addClass('active');
        }else{
            // do la classe active all'elemento (img) successivo
            img_active.next('img').addClass('active'); 
        }
        
    }

    function switchLeft(){
        // creo una varaibile per individuare l'immagine che ha la classe active
        var img_active = $('.wrapper .images img.active');
        // rimuovo la classe active dall'immagine
        img_active.removeClass('active');
        // do la classe active all'elemento (img) precedente
        img_active.prev('img').addClass('active');
    }


});