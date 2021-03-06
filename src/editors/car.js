// Car-Specific stuff goes in here :)

// Configures the tuning settings on the menu
function setupTune()
{
  // Tuning Setting Combo Boxes
  document.getElementById('rb-dt').disabled = true;
  document.getElementById('rb-nt').disabled = true;
  document.getElementById('rb-bt').disabled = true;
  document.getElementById('rb-ft').disabled = true;
  document.getElementById('rb-ct').disabled = true;

  // Get the current power/handling
  document.current_rank = getValue('rank');
  document.current_power = getValue('power');
  document.current_handling = getValue('handling');

  // Use current tune by default
  setTune(0);
}

// Configures the last played date on the menu
function setupLastPlayed()
{
  // Get the last time played for the car
  let last_played = new Date(1000 * getValue('last_played'));

  // Set the last played time element on the form to the last played time
  document.getElementById('last_played').value = last_played.toDateString();
}

// showCarMenu(void): Void
// Populates the drop-downs for the
// car menu and displays the menu.
function showCarMenu()
{
  // General Settings
  populateDropdown('model');
  populateDropdown('rank');

  // Colour Settings
  populateDropdown('colour_stock');
  populateDropdown('colour_custom');

  // Colour Settings
  populateDropdown('rims');
  populateDropdown('colour_rims');

  // Aero Kit
  populateDropdown('aero');
  populateDropdown('hood');
  populateDropdown('wing');
  populateDropdown('mirror');
  populateDropdown('neon');
  populateDropdown('trunk');

  // Stickers (MT5/5DX/5DX+ Only)
  populateDropdown('body_sticker');
  populateDropdown('body_sticker_colour');
  populateDropdown('japan_sticker');
  populateDropdown('japan_sticker_colour');
  populateDropdown('side_sticker');
  populateDropdown('side_sticker_colour');
  populateDropdown('roof_sticker');
  populateDropdown('roof_sticker_colour');

  // License Plate 
  populateDropdown('plate_frame');
  populateDropdown('plate_frame_colour');
  populateInput('plate_number');
  populateDropdown('region');

  // Window Sticker / Versus Marker
  populateDropdown('window_sticker_toggle');
  populateDropdown('window_sticker_font');
  populateDropdown('window_sticker');
  populateDropdown('rival_marker');

  // Setup tune
  setupTune();

  // Populate the tune drop-downs
  populateDropdown('power');
  populateDropdown('handling');

  // Last played time
  setupLastPlayed();

  // Show the car menu
  showMenu('d_car');
}

// Given a combo box value, 
// sets the tuning settings for
// the car and enables or disables
// the drop-downs, depending on the 
// setting applied.
function setTune(value)
{
  // Values:
  // 0 - No Tune 
  // 1 - Basic Tuning
  // 2 - Full Tune 
  // 3 - Custon Tune

  switch(value)
  {
    case 0: // Leave as is

      // Set the car's rank back to previous
      updateElement('rank', document.current_rank);

      // Both power and handling back to previous
      updateElement('power', document.current_power);
      updateElement('handling', document.current_handling);

      // Disable the power/handling dropdowns
      document.getElementById('power').disabled = true;
      document.getElementById('handling').disabled = true;
      break;

    case 1: // No Tune

      // Set the car's rank to 'n'
      updateElement('rank', 0x01);

      // Both power and handling 0 pts
      updateElement('power', 0x00);
      updateElement('handling', 0x00);

      // Disable the power/handling dropdowns
      document.getElementById('power').disabled = true;
      document.getElementById('handling').disabled = true;
      break;

    case 2: // Basic Tuning
        
      // Set the car's rank to 'n'
      updateElement('rank', 0x03);

      // Both power and handling 10 pts
      updateElement('power', 0x0A);
      updateElement('handling', 0x0A);

      // Disable the power/handling dropdowns
      document.getElementById('power').disabled = true;
      document.getElementById('handling').disabled = true;
      break;

    case 3: // Full Tune

      // Both power and handling 17 pts

      // If the game is wmmt6 (840hp)
      if(document.game == 'wmmt6')
      {
        // Set the car's rank to 'n'
        updateElement('rank', 0x08);

        // Both power and handling 16 pts 
        updateElement('power', 0x11);
        updateElement('handling', 0x11);
      }
      else // Otherwise, game is wmmt5/5dx (830hp)
      {
        // Set the car's rank to 'n'
        updateElement('rank', 0x07);

        // Both power and handling 16 pts 
        updateElement('power', 0x10);
        updateElement('handling', 0x10);
      }

      // Disable the power/handling dropdowns
      document.getElementById('power').disabled = true;
      document.getElementById('handling').disabled = true;
      break;

    case 4: // Custom Tune

      // Enable the power/handling dropdowns
      document.getElementById('power').disabled = false;
      document.getElementById('handling').disabled = false;
      break;

    default: // Unknown value provided

      console.log("Unknown value '" + value + "'provided!");
      break;
  }
}

// Given the first two bytes of
// a car file, identify the game
// the car file is from.
function getCarGame(game_id)
{
  // First two bytes of the car file identify the game
  switch(game_id)
  {
    case 1672: // MT5
      return 'wmmt5';
    case 34280: // MT5DX+
      return 'wmmt5dx';
    case 16376: // MT6
      return 'wmmt6';
    case 27048: // MT6R
      return 'wmmt6'; // Same car format
    default: 
      throw ("Unknown game: " + game_id)
  }
}