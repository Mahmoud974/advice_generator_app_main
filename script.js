var data;
var btn_Citations = document.querySelector('#btn_Citations'), citation_id = document.querySelector('#citation_id'), citation = document.querySelector('#citation');
/**
 * Start any citations
 */
var start_citations = function () {
    fetch("https://api.adviceslip.com/advice")
        .then(function (data) { return data.json(); })
        .then(function (data) {
        data = data.slip;
        citation_id.innerHTML = "#" + data.id;
        citation.innerHTML = '"' + data.advice + '"';
    });
};
start_citations();
//Refresh the page
btn_Citations.addEventListener("click", function () {
    window.location.reload();
});
