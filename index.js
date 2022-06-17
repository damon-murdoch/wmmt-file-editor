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
                case 16440: // MT5
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

              // Show the car menu
              showMenu('d_car');

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

// Hide all of the menus
hideMenu();