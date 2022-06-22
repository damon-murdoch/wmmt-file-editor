
function showMilesMenu()
{
  // Populate the miles input
  document.getElementById('miles').value = getValue('miles');

  // Populate the games input
  document.getElementById('games').value = getValue('games');
  
  // Show the car menu
  showMenu('d_miles');
}