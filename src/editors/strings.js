// validateInput(id: String)
// Given the ID of an element, 
// validates the element's value
// (input) to ensure it only has 
// valid input characters. Any
// invalid characters are removed.
function validateInput(id)
{
  // Get the element with the given id
  let element = document.getElementById(id);

  // Get the value of the element
  let str = element.value;

  // New string containing valid characters
  let new_str = [];

  // Loop over all of the characters
  for(let i=0; i<str.length; i++)
  {
    // Get the current character
    let chr = str[i];

    // If the character is in the allowed set
    if (ALLOWED_CHARSET.includes(chr))
    {
      // Add it to the new string
      new_str.push(chr);
    }
  }

  // Set the element value to the validated string
  element.value = new_str.join("");
}

function getWideTextString(str)
{
  // Byte array object
  let array = [];

  // Loop over the characters
  for(let i=0; i<str.length; i++)
  {
    // Add the wide text hex code for the character to the array
    array.push(WIDETEXT_CHARSET[str[i]]);
  }

  // Join the array back into a string
  return array.join("");
}

function downloadString(id, filename, size, useWideText = false)
{
  // Get the id of the element provided
  let element = document.getElementById(id);

  // Get the value of the input element
  let string = element.value;

  // If this value should use wide text
  if (useWideText)
  {
    // Generate the binary data for the string file
    string = getWideTextString(string);
  }

  // For encoding the wide text string
  const encoder = new TextEncoder();

  // 16 byte wide uint8array (For all string sizes)
  let encodedString = new Uint8Array(size);

  // Fill the string with zeros
  encodedString.fill(0x0); 

  // Add the encoded string to the uint8array
  encodedString.set(encoder.encode(string)); 

  // Download the encoded string with the given filename
  download(encodedString, filename);
}

// String button click tasks
function createName()
{
  // Hide the menu
  hideMenu();

  // Show the name menu
  showMenu('d_name');
}

function createTitle()
{
  // Hide the menu
  hideMenu();
  
  // Show the name menu
  showMenu('d_title');
}

function createSticker()
{
  // Hide the menu
  hideMenu();
  
  // Show the name menu
  showMenu('d_sticker');
}

function createRegion()
{
  // Hide the menu
  hideMenu();
  
  // Show the name menu
  showMenu('d_region');
}