// wrap all img elements with lightbox anchor
$('div.col').each(function() {
    var galleryImage = $(this).find('img.gallery-item');
    var caption = $(this).find('figcaption').text();
    var ahchor = jQuery("<a />", {href: galleryImage.attr("src"), "data-caption": caption, "data-toggle": "lightbox", "data-gallery": "gallery"});;

    galleryImage.wrap(ahchor);

  }); 
