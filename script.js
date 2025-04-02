
document.getElementById('showMore').addEventListener('click', function() {
  document.getElementById('dropdownContent').classList.toggle('show');
  this.textContent = this.textContent.includes('▼') ? 'Show More ▲' : 'Show More ▼';
});

window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.getElementById('showMore').textContent = 'Show More ▼';
      }
    }
  }
});
