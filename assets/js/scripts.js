/* scripts */
// jshint esversion: 6

/* 
 *
 * click events
 * 
 */

 $('#search-btn').on('click', () => {
    var searchTerm = $('#search').val();
    var beginDate = $('#startyr').val();
    var endDate = $('#endyr').val();
    var resultsNumbr = $('#records').val();
    console.log(resultsNumbr);
    if (resultsNumbr == 0) resultsNumbr = 10;
    console.log(resultsNumbr);
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm
    if (beginDate != "") url += "&begin_date=" + beginDate + "0101";
    if (endDate != "") url += "0101&end_date=" + endDate + "0101";
    url += "&api-key=IG94gZwdcPgG17H5oMtfStdqfpQNpTtw";
    
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
