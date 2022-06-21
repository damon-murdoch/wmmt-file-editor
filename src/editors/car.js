// Car-Specific stuff goes in here :)

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
  
  // Get the license plate number object
  let plate_number = document.getElementById('plate_number');

  // Get the current license plate number from the file
  plate_number.value = getValue('plate_number');
  plate_number.disabled = false;

  populateDropdown('region');

  // Window Sticker / Versus Marker
  populateDropdown('window_sticker_toggle');
  populateDropdown('window_sticker_font');
  populateDropdown('window_sticker');
  populateDropdown('rival_marker');

  // Tuning Setting Combo Boxes
  setDisabled('rb-nt', false);
  setDisabled('rb-bt', false);
  setDisabled('rb-ft', false);
  setDisabled('rb-ct', false);

  // Populate the tune drop-downs
  populateDropdown('power');
  populateDropdown('handling');

  // Get the last time played for the car
  let last_played = new Date(1000 * getValue('last_played'));

  document.getElementById('last_played').innerHTML = "Last Played: " + last_played.toDateString();

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

      // Disable the power/handling dropdowns
      setDisabled('power', true);
      setDisabled('handling', true);
      break;

    case 1: // No Tune

      // Set the car's rank to 'n'
      updateElement('rank', 0x01);

      // Both power and handling 0 pts
      updateElement('power', 0x00);
      updateElement('handling', 0x00);

      // Disable the power/handling dropdowns
      setDisabled('power', true);
      setDisabled('handling', true);
      break;

    case 2: // Basic Tuning
        
      // Set the car's rank to 'n'
      updateElement('rank', 0x03);

      // Both power and handling 10 pts
      updateElement('power', 0x0A);
      updateElement('handling', 0x0A);

      // Disable the power/handling dropdowns
      setDisabled('power', true);
      setDisabled('handling', true);
      break;

    case 3: // Full Tune

      // Both power and handling 17 pts

      // If the game is wmmt6 (840hp)
      if(document.game == 'wmmt6')
      {
        // Set the car's rank to 'n'
        updateElement('rank', 0x08);

        // Both power and handling 16 pts 
        updateElement('power', 0x0B);
        updateElement('handling', 0x0B);
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
      setDisabled('power', true);
      setDisabled('handling', true);
      break;

    case 4: // Custom Tune

      // Enable the power/handling dropdowns
      setDisabled('power', false);
      setDisabled('handling', false);
      break;

    default: // Unknown value provided

      console.log("Unknown value '" + value + "'provided!");
      break;
  }
}