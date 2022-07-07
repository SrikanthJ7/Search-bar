var search = document.getElementById("search-bar");
search.oninput = function() {
    var mySearch = search.value;
    var mySearch1 = mySearch.toLowerCase();
    for ( var i=1; i<=30; i++) {
        var myString = document.getElementById(""+i);
        var myString2 = myString.textContent;
        var myString3 = myString2.toLowerCase();
        var myDiv = document.getElementById("q"+i);
        if ( myString3.indexOf( mySearch1 ) === -1 ) {
            myDiv.setAttribute("class","d-none");
        } else {
            myDiv.setAttribute("class","col-3 justify-content-center align-center bg-light m-3 p-3");
        }
        
    } 
}
