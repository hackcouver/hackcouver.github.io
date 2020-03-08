$(document).ready(function() {
    $("a").click(function() {
        // console.log(this);
        // TODO: make it scroll up after clicking anchor tag
        if ($(this).attr("href")[0] === "#") {
            console.log("test");
            // window.scrollBy(0, 100);
        }
    });
});
