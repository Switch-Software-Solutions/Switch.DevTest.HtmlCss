const row = 'meteors-table__row';
const selectedClass = '--selected';
const openClass = '--open';
const activeClass = '--active';
const animateClass = '--animate';
const detailsPanel = 'item-details';

function $(selector) {
  const elements = Array.from(document.querySelectorAll(selector));
  
  if (elements.length === 1) {
    return elements[0];
  }

  return elements;
}

function openTooltip(tooltipId) {
  $(tooltipId).classList.add(openClass);
}

function closeTooltip(tooltipId) {
  $(tooltipId).classList.remove(openClass);
}

function setActiveTab(tab) {
  const tabs = $('[data-tab-nav]');
  const tabContents = $('[data-tab-content]');

  tabs.forEach(tabNav => tabNav.classList.remove(activeClass));
  tabContents.forEach(content => content.classList.remove(activeClass));

  tabs.find((nav) => nav.dataset.tabNav === tab).classList.add(activeClass);
  tabContents.find((content) => content.dataset.tabContent === tab).classList.add(activeClass);
}

function closeDetailsPanel() {
  $(`.${detailsPanel}`).classList.remove(openClass);
  resetSelectedItems();
}

function resetSelectedItems() {
  const rows = $(`.${row}`);
  rows.forEach(rowItem => rowItem.classList.remove(selectedClass));
}

function setSelectedItem(item) {
  const parent = item.parentElement;
  resetSelectedItems();
  parent.classList.add(selectedClass);
  $(`.${detailsPanel}`).classList.add(openClass);
}

function animateButton(button) {
  button.classList.add(animateClass);

  setTimeout(() => {
    button.classList.remove(animateClass);
  }, 1000);
}

function handleClickEvents() {
  document.addEventListener('click', (e) => {
    const el = e.target;

    if (typeof el.parentElement.className === 'string' && el.parentElement.className.includes(row)) {
      setSelectedItem(el);
    }

    if (typeof el.className === 'string' && el.className.includes('form__button')) {
      animateButton(el);
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
