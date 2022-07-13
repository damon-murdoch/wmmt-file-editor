// showSettingsMenu(void): Void
// Populates the drop-downs for the
// settings menu and displays the menu.
function showSettingsMenu()
{
  // Booleans

  // View Switch (Behind / In Front)
  populateCheckbox('view');

  // Transmission Switch (Auto/Manual)
  populateCheckbox('transmission');

  // Retire Switch (Off/On)
  populateCheckbox('retire');

  // Navi Map (Off/On)
  populateCheckbox('navi_map');

  // Selects
  
  populateDropdown('meter');
  populateDropdown('ost');

  populateDropdown('nameplate');
  populateDropdown('nameplate_colour');
  
  populateDropdown('frame');
  populateDropdown('frame_colour');

  // Unused ingame

  populateDropdown('terminal_bg');
  populateDropdown('volume');

  // Volume not editable, just for visibility
  document.getElementById('volume').disabled = true;

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
    case 48440: // MT5
      return 'wmmt5';
    case 9112: // MT5DX+
      return 'wmmt5dx';
    case 16632: // MT6
      return 'wmmt6';
    default: 
      throw ("Unknown game: " + game_id)
  }
}