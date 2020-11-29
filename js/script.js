$( document ).ready(function() {
    animateHeaderElements()   
    animateInfoSection()
    galleryControls()
})

// hides and displays header elements using a fade in animation
function animateHeaderElements(){

    $( ".main-header" ).hide()
    $( ".header-paragraph" ).hide()
    $( ".header-btn" ).hide()

        $( ".main-header" ).fadeIn( 800, function(){
            $( ".header-paragraph" ).fadeIn( 800 ,function(){
                $( ".header-btn" ).fadeIn( 800)

            })
        })

}

// animates info section when user scrolls to the section. the animation was made by adding a css class
// the waypoints library is used to trigger the event
function animateInfoSection(){

    var sectionInfo = $('.section-info')

    sectionInfo.waypoint(function (){
        sectionInfo.addClass('section-info-animate')
    }, {
        'offset':'50%'
    })

}

// controls for the gallery
function galleryControls(){
    // all thumbnail img elements
    var galleryImages = $('.js--gallery-img')

    // if a thumbnail is clicked the src on the main gallery image is changed to show the selected image
    // the img-active class is added to the current thumbnail and removed from all others, this changes the opacity in css
    $('.js--gallery-img').on('click', function (evt) {
        var img = $(this)
        var id = img.attr('id')
        $('.gallery-photo-main-img').attr('src', './resources/img/gallery/'+id+'.webp')

        if(!img.hasClass('img-active')){
            galleryImages.each(function (item){
                if($(this).hasClass('img-active')){
                    $(this).removeClass('img-active')
                }
            })
            img.addClass('img-active')
        }
    })

}