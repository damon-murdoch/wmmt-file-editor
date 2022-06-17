// Bulk of the worker functions will go in this file

function setProperty(game, filetype, property, value)
{
  // If the index property is defined for the game and filetype
  if (OFFSETS.game[game][filetype].indexes[property] !== null)
  {
    // Set the value at the offset to the given value
    setValueAt(OFFSETS.game[game][filetype].indexes[property], value);
  }
  else // Property is not defined
  {
    throw "PropertyNotFoundException";
  }
}

function getProperty(game, filetype, property)
{
  // If the index property is defined for the game and filetype
  if (OFFSETS.game[game][filetype].indexes[property] !== null)
  {
    // Return the value at the offset to the given value
    return getValueAt(OFFSETS.game[game][filetype].indexes[property]);
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