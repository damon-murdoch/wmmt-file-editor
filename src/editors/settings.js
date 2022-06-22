// showSettingsMenu(void): Void
// Populates the drop-downs for the
// settings menu and displays the menu.
function showSettingsMenu()
{
  // Booleans

  // View Switch (Behind / In Front)
  const view = document.getElementById('view');
  view.checked = getValue('view', 1);
  view.disabled = false;

  // Transmission Switch (Auto/Manual)
  const transmission = document.getElementById('transmission');
  transmission.checked = getValue('transmission', 1);
  transmission.disabled = false;

  // Retire Switch (Off/On)
  const retire = document.getElementById('retire');
  retire.checked = getValue('retire', 1);
  retire.disabled = false;

  // Navi Map (Off/On)
  const navi_map = document.getElementById('navi_map');
  navi_map.checked = getValue('navi_map', 1);
  navi_map.disabled = false;

  // Selects
  
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