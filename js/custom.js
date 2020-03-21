$(document).ready(function() {
    $("body").append(`
        <div id="alert" class="alert alert-warning alert-dismissible fade show fixed-bottom" role="alert">
            <strong>COVID-19 Update:</strong> Hackcouver 2020 will be postponed to late June or early May. The specific 
            date will come shortly and further information can be found at 
            <a href="http://bit.ly/Hackcouver-COVID19">
                http://bit.ly/Hackcouver-COVID19
            </a>.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `);
    $("a").click(function() {
        // console.log(this);
        // TODO: make it scroll up after clicking anchor tag
        if ($(this).attr("href")[0] === "#") {
            console.log("test");
            // window.scrollBy(0, 100);
        }
    });
});
