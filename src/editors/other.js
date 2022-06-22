// Simple populate functions go in here

// Shows the miles menu
function showMilesMenu()
{
  // Populate the miles input
  document.getElementById('miles').value = getValue('miles');

  // Populate the games input
  document.getElementById('games').value = getValue('games');
  
  // Show the miles menu
  showMenu('d_miles');
}

// Shows the custom GT wing menu
function showGTWingMenu()
{
  // Pillar Settings
  populateDropdown('pillar');
  populateDropdown('pillar_material');

  // Main Wing Settings
  populateDropdown('main_wing');
  populateDropdown('main_wing_colour');

  // Decoration Settings
  populateDropdown('wing_tip');
  populateDropdown('wing_material');

  // Show the gt wing menu
  showMenu('d_gtwing');
}

// Shows the mini sticker menu
function showMiniStickerMenu()
{
  // Need to populate 10 drop-downs
  for(let i=1; i<11; i++)
  {
    // ID for the sticker type drop-down
    let sticker = 'mini_sticker_' + i;

    // ID for the sticker colour drop-down
    let colour = sticker + '_colour';

    // Populate the sticker drop-down with generic options
    populateDropdown(sticker, 'mini_sticker');

    // Populate the sticker colour drop-down with generic options
    populateDropdown(colour, 'mini_sticker_colour');
  }

  // Show the mini sticker menu
  showMenu('d_ministicker');
}