// Other misc. funcs for the show story menu go here

function setStoryDefault()
{

}

function setOneRunComplete()
{

}

function showStoryMenu()
{
  // Total Wins
  document.getElementById('total_wins').value = getValue('total_wins');

  // Win Streak
  document.getElementById('win_streak').value = getValue('win_streak');

  // Total Loops
  document.getElementById('total_loops').value = getValue('total_loops');

  // Completed Loops
  // document.getElementById('completed_loops').value = getValue('completed_loops');

  // Show the story menu
  showMenu('d_story');
}

function getStoryGame(game_id)
{
  // First two bytes of the car file identify the game
  switch(game_id)
  {
    case 9072: // MT5
      return 'wmmt5';
    case 11272: // MT5DX+
      return 'wmmt5dx';
    case 2056: // MT6
      return 'wmmt6';
    default: 
      throw ("Unknown game: " + game_id)
  }
}