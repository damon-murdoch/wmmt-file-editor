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

// getStringByteArray(str: String)
// Given a string object, converts
// the string to a binary array.
function getStringByteArray(str)
{
  // Byte array object
  let array = [];

  // Loop over the characters
  for(let i=0; i<str.length; i++)
  {
    // Add the wide text hex code for the character to the array
    array.push(WIDETEXT_CHARSET[str[i]]);
  }

  // Return the array
  return array;
}