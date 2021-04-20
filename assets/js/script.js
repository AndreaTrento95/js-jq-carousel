$(document).ready(function(){

    // 
    $('.fa-chevron-right').click(switchRight);
    $('.fa-chevron-left').click(switchLeft);

    // ------ function --------
    function switchRight(){
        // creo una var per individuare l'immagine che ha la classe active
        var img_active = $('.wrapper .images img.active');
        var circle_active = $('.wrapper nav a i.active');
        // rimuovo la classe active dall'immagine
        img_active.removeClass('active');
        circle_active.removeClass('active');
        
        var next_image = img_active.next('img');
        var next_circle = circle_active.next(' i');
        

        if(next_image.length === 0){
            $('.wrapper .images img').first().addClass('active');
            $('.wrapper nav a i').first().addClass('active');
        }else{
            // do la classe active all'elemento (img) successivo
            next_image.addClass('active'); 
            next_circle.addClass('active');
        }
        
    }

    function switchLeft(){
        // creo una varaibile per individuare l'immagine che ha la classe active
        var img_active = $('.wrapper .images img.active');
        // rimuovo la classe active dall'immagine
        img_active.removeClass('active');

        var prev_image = img_active.prev('img');

        if(prev_image.length === 0){
            $('.wrapper .images img').last().addClass('active');
        }else{
            // do la classe active all'elemento (img) precedente
            prev_image.addClass('active');
        }
        
    }


});