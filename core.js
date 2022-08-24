const row = 'meteors-table__row';
const selectedClass = '--selected';
const openClass = '--open';
const detailsPanel = 'item-details';

function closeDetailsPanel() {
  document.querySelector(`.${detailsPanel}`).classList.remove(openClass);
}

function resetSelectedItems() {
  const rows = Array.from(document.querySelectorAll(`.${row}`));
  rows.forEach(rowItem => rowItem.classList.remove(selectedClass));
}

function setSelectedItem() {
  document.addEventListener('click', (e) => {
    const parent = e.target.parentElement;
    if (parent.className.includes(row)) {
      resetSelectedItems();
      parent.classList.add(selectedClass);
      document.querySelector(`.${detailsPanel}`).classList.add(openClass);
    }
  });
}

function includeHTML() {
    var z, i;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        var elmnt = z[i];
        var file = elmnt.getAttribute("include-html");
        if (file) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", "http://127.0.0.1:3000?file=" + file, true);
            xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
            xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhttp.send();
            return;
        }
    }
}

includeHTML();
