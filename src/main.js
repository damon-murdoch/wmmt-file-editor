// Bulk of the worker functions will go in this file

function setProperty(game, filetype, property, value, bytes)
{
  // If the index property is defined for the game and filetype
  if (OFFSETS.game[game][filetype].indexes[property] !== null)
  {
    // Set the value at the offset to the given value
    setValueAt(OFFSETS.game[game][filetype].indexes[property], value, bytes);
  }
  else // Property is not defined
  {
    throw "PropertyNotFoundException";
  }
}

function getProperty(game, filetype, property, bytes)
{
  // If the index property is defined for the game and filetype
  if (OFFSETS.game[game][filetype].indexes[property] !== null)
  {
    // Return the value at the offset to the given value
    return getValueAt(OFFSETS.game[game][filetype].indexes[property], bytes);
  }
  else // Property is not defined
  {
    throw "PropertyNotFoundException";
  }
}

function getOptions(game, filetype, property)
{
  // If the values property is defined for the game and filetype
  if (OFFSETS.game[game][filetype].values[property] !== null)
  {
    // Get the offset from the offsets object
    return OFFSETS.game[game][filetype].values[property];
  }
  else // Property is not defined
  {
    throw "PropertyNotFoundException";
  }
}

// Hides a menu if given, otherwise
// hides all of the menus
function hideMenu(menu=null)
{
  // Menu is specified
  if (menu !== null)
  {
    // Set the display for the menu to none
    document.getElementById(menu).style.display = 'none';
  }
  else // Menu unspecified
  {
    // Hide all of them
    document.getElementById('d_car').style.display = 'none';
    document.getElementById('d_story').style.display = 'none';
    document.getElementById('d_miles').style.display = 'none';
    document.getElementById('d_gtwing').style.display = 'none';
    document.getElementById('d_versus').style.display = 'none';
    document.getElementById('d_settings').style.display = 'none';
    document.getElementById('d_ministicker').style.display = 'none';

    document.getElementById('d_name').style.display = 'none';
    document.getElementById('d_title').style.display = 'none';
    document.getElementById('d_region').style.display = 'none';
    document.getElementById('d_sticker').style.display = 'none';
  }
}

// Shows a menu if given, otherwise
// shows all of the menus
function showMenu(menu=null)
{
  // Menu is specified
  if (menu !== null)
  {
    // Set the display for the menu to block
    document.getElementById(menu).style.display = 'initial';
  }
  else // Menu unspecified
  {
    // Show all of the menus
    document.getElementById('d_car').style.display = 'initial';
    document.getElementById('d_story').style.display = 'initial';
    document.getElementById('d_miles').style.display = 'initial';
    document.getElementById('d_gtwing').style.display = 'initial';
    document.getElementById('d_versus').style.display = 'initial';
    document.getElementById('d_settings').style.display = 'initial';
    document.getElementById('d_ministicker').style.display = 'initial';

    document.getElementById('d_name').style.display = 'initial';
    document.getElementById('d_title').style.display = 'initial';
    document.getElementById('d_region').style.display = 'initial';
    document.getElementById('d_sticker').style.display = 'initial';
  }
}

function setValue(id, value, bytes = 4)
{
  // Attempt to update the selected property
  setProperty(document.game, document.file.type, id, value, bytes);
}

function getValue(id, bytes = 4)
{
  // Return the selected property
  return getProperty(document.game, document.file.type, id, bytes);
}

// updateElement(id: String, value: Int, Bytes: Int)
// Given an element id, a value, and a byte count
// updates the value of the element as well as 
// the property the element is for. This allows
// for this function to be called by other areas
// of the program and still update both values. 
function updateElement(id, value, bytes = 4)
{
  // Get the element from the form
  let elem = document.getElementById(id);

  // Update the binary data in the file
  setValue(id, value, bytes);

  // Update the element value (if required)
  elem.value = getValue(id, bytes);
}

// populateCheckbox(id: String, bytes: Int, property: String)
// Given an element ID, a byte count and an (optional) custom
// property gets the current property value from the data and 
// checks or unchecks the checkbox depending on if the data is
// Less than or greater than zero.
function populateCheckbox(id, bytes=1, property=id)
{
  // Get the element with the given id
  const element = document.getElementById(id);

  try
  {
    // Get the property value (default to 1 byte for checkbox)

    // Update the checked value of the element
    element.checked = getValue(property, bytes);

    // Enable the element
    element.enabled = true;
  }
  catch(e) // Failed to populate
  {
    console.error("Failed to populate '" + id + "':", e)

    // Disable the element
    element.disabled = true;
  }
}

// populateInput(id: String, bytes: Int, property: String)
// Given an element ID, a byte count and an (optional) custom
// property gets the current property value from the data and 
// sets the value of the input to the current value in the file.
function populateInput(id, bytes=4, property=id)
{
  // Get the element with the given id
  const element = document.getElementById(id);

  try
  {
    // Get the property value (default to 1 byte for checkbox)

    // Update the checked value of the element
    element.value = getValue(property, bytes);
    
    // Enable the element
    element.enabled = true;
  }
  catch(e) // Failed to populate
  {
    console.error("Failed to populate '" + id + "':", e)

    // Disable the element
    element.disabled = true;
  }
}

// Populates the drop-down with a given set of values
function populateDropdown(id, bytes=4, property=id)
{
  // Get the drop down element
  let select = document.getElementById(id);

  try
  {    
    // Get the options for the given property
    let options = getOptions(document.game, document.file.type, property);

    // If results were returned
    if (options)
    {
      // Clear the drop-down
      select.innerHTML = "";

      // Loop over the options
      for(let option of options)
      {
        // Create new option object
        let opt = document.createElement('option');

        // Hex Value (Integer Key)
        opt.value = option[0];

        // In-Game Value (Result)
        opt.innerHTML = option[1];

        // Aselect the option to the drop-down
        select.appendChild(opt);
      }

      // Get the current value from the file
      let value = getValue(id, bytes);

      // Set the selected option to the value
      select.value = value;

      // Enable the element
      select.disabled = false;
    }
    else // No options
    {
      // Reset the drop-down
      resetDropdown(id);

      // Disable the element
      select.disabled = true;
    }
  }
  catch(e) // Failed to populate
  {
    console.error("Failed to populate '" + id + "':", e)

    // Disable the element
    select.disabled = true;
  }
}

// Resets the drop-down to default values
function resetDropdown(id)
{
  // Get the drop down element
  let select = document.getElementById(id);

  // Remove all of the options
  select.innerHTML = "";

  // Create new default option object
  let option = document.createElement('option');

  // Set the default option message
  option.innerHTML = "Not Available";

  // Aselect the message to the select
  select.appendChild(option);
}

function verifySize(size, game, filetype)
{
  // Get the expected size of the file
  let expected_size = OFFSETS.game[game][filetype].size;

  // If the uploaded file's size does not match the expected file size
  if (size !== expected_size)
  {
    throw ("Unexpected file size '" + document.file.size + "' (Expected: '" + expected_size + "')");
  }
  else // Return true
  {
    // Success status
    return true;
  }
}