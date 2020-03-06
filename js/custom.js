$(document).ready(function() {
    $("a").click(function() {
        // console.log(this);
        if ($(this).attr("href")[0] === "#") {
            console.log("test");
            window.scrollBy(0, 100);
        }
    });
});
