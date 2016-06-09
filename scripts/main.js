$(document).on('click', '.navbar-collapse.in', function(event) {
    if ($(event.target).is('a') && $(event.target).attr('class') != 'dropdown-toggle') {
        $(this).collapse('hide');
    }
});

$(window).bind('hashchange', function(event) { // Watch for hash changes and react accordingly
    showHash(); // Show the proper page and update the navigation
});

function init() {
    // Load in the page "templates" to the correct divs
    $("#additional-materials-page").load("pages/additional-materials/index.html");
    $("#announcements-page").load("pages/announcements/index.html");
    $("#attendance-page").load("pages/attendance/index.html");
    $("#excellence-projects-page").load("pages/excellence-projects/index.html");
    $("#labs-page").load("pages/labs/index.html");
    $("#lectures-page").load("pages/lectures/index.html");
    $("#textbook-page").load("pages/textbook/index.html");

    if (window.location.hash.length) { // If we're refreshing a page or opening a bookmark, open the proper tab
        showHash();
    } else {
        bootpage.show("announcements-page", updateActiveNavigation);
    }
}

function showHash() {
    var hashPage = window.location.hash.substring(1, window.location.hash.length);

    bootpage.show(hashPage + "-page", updateActiveNavigation);
}

function updateActiveNavigation() {
    $("#additional-materials-navigation").removeClass("active");
    $("#announcements-navigation").removeClass("active");
    $("#attendance-navigation").removeClass("active");
    $("#excellence-projects-navigation").removeClass("active");
    $("#labs-navigation").removeClass("active");
    $("#lectures-navigation").removeClass("active");
    $("#textbook-navigation").removeClass("active");

    var currentPage = bootpage.currentPage.substring(0, bootpage.currentPage.length - 5);

    $("#" + currentPage + "-navigation").addClass("active");
}
