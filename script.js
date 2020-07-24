// function iconCredit() {
//   var popup = document.getElementsById("togglesecond");
//   popup.classList.toggle("show");
// }

element.addEventListener('click', iconCredit);

function iconCredit() {
  var popup = document.getElementById('togglesecond');
    if (popup.style.display === 'block') {
      popup.style.display = 'none';
    } else {
      popup.style.display = 'block';
    }
}

