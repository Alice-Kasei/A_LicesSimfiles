function collapseExpand(id) {

    let cells = document.getElementById(id).getElementsByTagName("td")
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].style.display == "table-cell") {
            cells[i].style.display = "none";
        } else {
            cells[i].style.display = "table-cell";
        }
    }
}