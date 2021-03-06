// client slider
$(document).ready(function(){

    if($('.brands_slider').length)
    {
    var brandsSlider = $('.brands_slider');
    
    brandsSlider.owlCarousel(
    {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    nav: false,
    dots: false,
    autoWidth: true,
    items: 3,
    margin: 42,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1024: {
            items: 4
        }
    }
    });
    
    if($('.brands_prev').length)
    {
    var prev = $('.brands_prev');
    prev.on('click', function()
    {
    brandsSlider.trigger('prev.owl.carousel');
    });
    }
    
    if($('.brands_next').length)
    {
    var next = $('.brands_next');
    next.on('click', function()
    {
    brandsSlider.trigger('next.owl.carousel');
    });
    } 
    }
    
    });
    
    
    // testimonial slider
    $(document).ready(function(){
    
        if($('.testimonial_slider').length)
        {
        var testimonialSlider = $('.testimonial_slider');
        
        testimonialSlider.owlCarousel(
        {
        loop:true,
        autoplay:false,
        autoplayTimeout:2000,
        nav:false,
        dots:false,
        autoWidth:true,
        items:3,
        margin:42
        });
        
        if($('.testimonial_prev').length)
        {
        var prev = $('.testimonial_prev');
        prev.on('click', function()
        {
        testimonialSlider.trigger('prev.owl.carousel');
        });
        }
        
        if($('.testimonial_next').length)
        {
        var next = $('.testimonial_next');
        next.on('click', function()
        {
        testimonialSlider.trigger('next.owl.carousel');
        });
        }
        }
            
    });
    
    
    