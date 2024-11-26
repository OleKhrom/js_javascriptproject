let sessionsList = JSON.parse(localStorage.getItem("sessionsList")) || [];
const visitInfo = {
    date: new Date().toLocaleString()
}
sessionsList.push(visitInfo);

localStorage.setItem("sessionsList", JSON.stringify(sessionsList));