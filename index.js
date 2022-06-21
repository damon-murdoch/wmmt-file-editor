function handleUpload()
{
    // Get the file content from the provided element
    let file = document.getElementById('i_file').files[0];

    // If a file has been uploaded
    if (file !== undefined)
    {
      // Get the file contents
      upload(file, function(err){

        // If error occured
        if (err)
        {
          // Throw the error here
          throw err;
        }
        else // No error
        {
          // Hide all of the menus
          hideMenu();

          // Switch on the file type
          switch(document.file.type)
          {
            // Car file
            case 'car':

              // Populate all of the menus

              // Identify the game
              game_id = document.file.data.getUint16(0x0, true)

              // First two bytes of the car file identify the game
              switch(game_id)
              {
                case 1672: // MT5
                  document.game = 'wmmt5';
                  break;

                case 34280: // MT5DX+
                  document.game = 'wmmt5dx';
                  break;

                case 16376: // MT6
                  document.game = 'wmmt6';
                  break;

                case 27048: // MT6R
                  document.game = 'wmmt6'; // Same car format
                  break;
                default: 
                  throw ("Unknown game: " + game_id)
              }

              // Set the value of the game drop-down to the selected game
              document.getElementById('game').value = document.game;

              // Load the drop-downs / values and show the car menu
              showCarMenu();

              break;
              
            default: // Not implemented yet
              throw ("Not implemented: " + document.file.type);
          }
        }
      });
  
      // Success
      return true;
    }
    else // No file uploaded
    {
      // Failure
      return false;
    }
}

function handleDownload()
{
  // Call the download function
  download();
}

// Startup tasks

// Get the game selector
let select = document.getElementById('game');

// Loop over all of the games
for (game in GAMES)
{
  // Get the name of the game
  let name = GAMES[game];

  // Create a new option
  let option = document.createElement('option');

  // Game shorthand as id/value
  option.id = game;
  option.value = game;

  // Game full name as text
  option.innerHTML = name;

  // Add the option to the select
  select.appendChild(option);
}

// Hide all of the menus
hideMenu();