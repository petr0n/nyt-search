/* scripts */


$('.search').on('click', () => {
    var searchTerm = "murder";
    var beginDate = 1997;
    var endDate = 2001;
    var resultsNumbr = 10;
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + beginDate + "0101&end_date=" + endDate + "0101&api-key=IG94gZwdcPgG17H5oMtfStdqfpQNpTtw"
    $.ajax(url, "GET").then ((response) => {
        console.log(url);
        console.log(response);
        response = response.response;
        for (i = 0; i < resultsNumbr; i++) {
            $("#articles").append(
                $("<a>")
                    .attr("href", response.docs[i].web_url)
                    .text(response.docs[i].headline.main),
                "<br>"
            );
        }
    });
});

$('.clear').on('click', clear);

function clear(){}

/* 
*
* form fields
* 
*/
var search = $("#search").val();
var records = $("#records").val();
var startyr = $("#startyr").val();
var endyr = $("#endyr").val();


var articleSpace = $('.articles').html(
    '<div class="row article-space"></div>'
 );
