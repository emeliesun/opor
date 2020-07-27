
// element.addEventListener('hover', avatarZoom);

// function avatarZoom(){
//     var avatarHovered = document.getElementsByClassName('avatar');

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

