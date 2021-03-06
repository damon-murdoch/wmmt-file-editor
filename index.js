// resetPage(void): Void
// Hard reloads the current
// page and empties all of the
// input fields.
function resetPage()
{
    // Page hard reload (clear cache)
    window.location.reload(true);
}

function uploadFile()
{

  // Get the file content from the provided element
  let file = document.getElementById('i_file').files[0];

  // If a file has been uploaded
  if (file !== undefined)
  {
    // Get the file contents
    upload(file, function(err){

      try
      {
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

              // Set the game to the car's game (First two bytes used as identifier)
              document.game = getCarGame(document.file.data.getUint16(0x0, true));

              // If the file is the correct size
              if (verifySize(document.file.size, document.game, document.file.type))
              {
                // Show the car menu
                showCarMenu();
              }

              // Otherwise, error is thrown
              break;


            // Versus file
            case 'versus':

              // Set the game to the versus file's game (First two bytes used as identifier)
              document.game = getVersusGame(document.file.data.getUint16(0x0, true));

              // If the file is the correct size
              if (verifySize(document.file.size, document.game, document.file.type))
              {
                // Show the car menu
                showVersusMenu();
              }

              // Otherwise, error is thrown
              break;
            
            // Work in progress: Story & Versus

            /*
            // Story file
            case 'story': 

              // Set the game to the car's game (First two bytes used as identifier)
              document.game = getStoryGame(document.file.data.getUint16(0x0, true));

              // If the file is the correct size
              if (verifySize(document.file.size, document.game, document.file.type))
              {
                // Show the car menu
                showStoryMenu();
              }

              // Otherwise, error is thrown
              break;
            */

            // Settings file
            case 'settings':

              // Set the game to the settings's game (First two bytes used as identifier)
              document.game = getSettingsGame(document.file.data.getUint16(0x0, true));

              // If the file is the correct size
              if (verifySize(document.file.size, document.game, document.file.type))
              {
                // Show the settings menu
                showSettingsMenu();
              }

              break;

            // Mileage file
            case 'miles': 

              // No specific game for miles
              document.game = 'any';

              // If the file is 
              // the correct size
              if (verifySize(document.file.size, document.game, document.file.type))
              {
                // Show the miles menu
                showMilesMenu();
              }
              
              break;

            // Custom GT Wing file
            case 'gtwing': 
              
              // No specific game for gt wing
              document.game = 'any';

              // If the file is 
              // the correct size
              if (verifySize(document.file.size, document.game, document.file.type))
              {
                // Show the miles menu
                showGTWingMenu();
              }

              break;
            
            case 'ministicker': {

              // No specific game for mini sticker
              document.game = 'any';

              // If the file is 
              // the correct size
              if (verifySize(document.file.size, document.game, document.file.type))
              {
                // Show the miles menu
                showMiniStickerMenu();
              }

              break;
            }

            default: // Not implemented yet
              throw ("Not implemented: " + document.file.type);
          }

          // No specific game (all files are the same format)
          document.getElementById('game').value = document.game;
        }
      }
      catch(e) // General error catch
      {
        // Warn user of error 
        window.alert(e);
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

function downloadStr(type)
{
  switch(type)
  {
    case 'name': 
      downloadString('custom_name', 'custom.name', 0x10, true);
      break;
    case 'title': 
      downloadString('custom_title', 'custom.title', 0x10, false)
      break;
    case 'sticker':
      downloadString('custom_sticker', 'custom.sticker', 0x10, true)
      break;
    case 'region':
      downloadString('custom_region', 'custom.region', 0x3, false)
      break;
  }
}

function downloadFile()
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