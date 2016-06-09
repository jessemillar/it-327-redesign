function init() {
    // Load in the page "templates" to the correct divs
    $("#announcements-page").load("pages/announcements/index.html");
    $("#labs-page").load("pages/labs/index.html");
    $("#additional-materials-page").load("pages/additional-materials/index.html");
    $("#textbook-page").load("pages/textbook/index.html");
    $("#lectures-page").load("pages/lectures/index.html");
    $("#attendance-page").load("pages/attendance/index.html");
    $("#excellence-projects-page").load("pages/excellence-projects/index.html");

    if (window.location.hash) { // If we're refreshing a page or opening a bookmark, open the proper tab
        $(window.location.hash).addClass("active"); // Set the active tab

        var hashPage = window.location.hash.substring(1, window.location.hash.length);

        bootpage.show(hashPage + "-page");
    } else {
        bootpage.show("announcements-page", updateActiveTab);
    }
}

function updateActiveTab() {
    $("#device-control-tab").removeClass("active");
    $("#display-tab").removeClass("active");
    $("#audio-control-tab").removeClass("active");
    $("#microphone-control-tab").removeClass("active");

    var currentTab = bootpage.currentPage.substring(0, bootpage.currentPage.length - 5);

    $("#" + currentTab + "-tab").addClass("active");
}
