let data:object;
const btn_Citations = document.querySelector('#btn_Citations') as HTMLButtonElement,
citation_id = document.querySelector('#citation_id') as HTMLElement,
citation = document.querySelector('#citation') as HTMLElement
/**
 * Start any citations
 */
const start_citations = ():void => {
  fetch("https://api.adviceslip.com/advice")
    .then((data) => data.json())
    .then((data) => {
      data = data.slip;
      citation_id.innerHTML = "#" + data.id;
      citation.innerHTML = '"' + data.advice + '"';
    });
};
start_citations();
//Refresh the page
btn_Citations.addEventListener("click", () => {
  window.location.reload();
});
