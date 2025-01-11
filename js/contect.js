$(document).ready(function() {
    var contactClose = $(".contact-close");
    var contactSection = $(".contact-section");

    // Close contact section on close button click
    contactClose.on('click', function() {
        contactSection.removeClass("show");
    });

    // Show contact section on contact-text click
    $(".contact-text").on('click', function() {
        contactSection.addClass("show");
    });

    // Close contact section on clicking outside the section
    contactSection.on('click', function(event) {
        if (event.target === contactSection[0]) {
            contactSection.removeClass("show");
        }
    });
});
