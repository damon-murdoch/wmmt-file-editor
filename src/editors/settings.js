// showSettingsMenu(void): Void
// Populates the drop-downs for the
// settings menu and displays the menu.
function showSettingsMenu()
{
  // Booleans
  
  document.getElementById('view').checked = getValue('view');
  document.getElementById('transmission').checked = getValue('transmission');
  document.getElementById('retire').checked = getValue('retire');
  document.getElementById('navi_map').checked = getValue('navi_map');

  // Integers
  
  populateDropdown('meter');
  populateDropdown('volume');
  populateDropdown('ost');
  
  populateDropdown('nameplate');
  populateDropdown('nameplate_colour');
  
  populateDropdown('frame');
  populateDropdown('frame_colour');

  populateDropdown('terminal_bg');
  
  // Show the car menu
  showMenu('d_settings');
}

// Given the first two bytes of
// a car file, identify the game
// the car file is from.
function getSettingsGame(game_id)
{
  // First two bytes of the car file identify the game
  switch(game_id)
  {
    case 9112: // MT5DX+
      return 'wmmt5dx';
    case 16632: // MT6
      return 'wmmt6';
    default: 
      throw ("Unknown game: " + game_id)
  }
}