//MENU HIDE

 $(function(){
     $('div.main span i').click(function(){
        if(windowWidth <= 768){
            var el = $('div.aside')
            if(el.is(':visible')){
                el.hide()
                $('.main').css('left','0')

            }else{
                el.show()
                $('.main').css('left','300px')
            }
        }
        
        $(window).resize(function(){
            windowWidth  = $(window)[0].innerWidth;
        })

         })
 })