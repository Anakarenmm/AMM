$(document).ready(function() {
            $('.accordion-button-iris').on('click', function() {
            var $accordionItem = $(this).closest('.accordion-item-iris');
            var $accordionContent = $accordionItem.find('.accordion-collapse-iris');
            var $visibleAccordionContent = $('.accordion-collapse-iris:visible');
    
            if (!$accordionContent.is(':visible')) {
                if ($visibleAccordionContent.length > 0) {
                    $visibleAccordionContent.stop(true, true).animate({ opacity: 0 }, 500, function() {
                        $(this).slideUp(800).css('opacity', 0);
                    });
                }
                $accordionContent.stop(true, true).delay(200).slideDown(300).css('opacity', 1).animate({ opacity: 1 }, 500);
                $('.accordion-button-iris').attr('aria-expanded', 'false');
                $(this).attr('aria-expanded', 'true');
            } else {
                $accordionContent.stop(true, true).animate({ opacity: 1 }, 200, function() {
                    $(this).slideUp(500).css('opacity', 1);
                });
                $(this).attr('aria-expanded', 'false');
            }
        });
    
        $('.accordion-collapse-iris').eq(0).slideDown();
   
    
    
  
 
    
    // Radio button enabling/disabling the submit button and toggling 'checked' class
    $('#flexCheckboxDefault').on('change', function() {
        var link = $('#submitLink');
        var linkUrl = $(this).data('url');

        if ($(this).is(':checked')) {
            link.attr('href', linkUrl);
            link.off('click').on('click', function(event) {
                // Perform the desired action here when the checkbox is checked
                // For example, open the link in a new tab/window
                window.open(linkUrl, '_blank');
                event.preventDefault(); // Prevent the default behavior of the link
            });
        } else {
            link.removeAttr('href');
            link.off('click'); // Remove the click event handler when the checkbox is unchecked
        }
    });

    // Prevent default behavior of the link when checkbox is unchecked
    $('#submitLink').on('click', function(event) {
        if (!$('#flexCheckboxDefault').is(':checked')) {
            event.preventDefault();
        }
    });
   
});