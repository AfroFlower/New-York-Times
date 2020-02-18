$(document).ready(function (){

        // In this case, the "this" keyword refers to what was inputed on the html
        var search = $(this).attr(".form-control");

        // Constructing a URL to search NYT 
        var queryURL = " https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api_key=d5l9hmGqBfIjV4qOpO3QVRmd0ZQQDIVe&limit=10";

        // NTY API Example https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

        console.log(queryURL)
        console.log(search)
            