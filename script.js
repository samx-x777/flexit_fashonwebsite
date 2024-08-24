// Select the toggle switch and the body element
const toggleSwitch = document.getElementById('flexSwitchCheckDefault');
const toggledlight = document.getElementById('switchx');
const body = document.body;

// Load saved mode from localStorage (if any)
const currentMode = localStorage.getItem('mode');
if (currentMode === 'dark') {
  body.classList.add('dark-mode');
  toggleSwitch.checked = true;
}

// Event listener for the toggle switch
toggleSwitch.addEventListener('change', function () {
  if (this.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark'); // Save the mode in localStorage
    // toggledlight.textContent = `${localStorage.getItem("mode")[0].toUpperCase()}ark Mode`;
    toggledlight.textContent = `Light Mode`;
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('mode', 'light'); // Save the mode in localStorage
    toggledlight.textContent = `Dark Mode`;
  }
});
