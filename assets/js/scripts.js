/* scripts */



/* 
 *
 * click events
 * 
 */

 $('.search').on('click', search);

 function search(){}

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