// getVersusGrade(void): Void
// Calculates the current versus
// grade and updates the element
// on the form.
function getVersusGrade()
{
  // Calculate the total medal values
  let current_value = (getValue('gold_medals') * MEDALS.gold) + 
    (getValue('silver_medals') * MEDALS.silver) + 
    (getValue('bronze_medals') * MEDALS.bronze) + 
    (getValue('plain_medals') * MEDALS.plain);

  // Current versus grade
  current_grade = null;

  // Maximum grade (per game)
  max_grade = null;

  // Switch on the game
  switch(document.game)
  {
    case 'wmmt5': // Tenth grade
      max_grade = 30; break;
    case 'wmmt5dx': // Tenth grade
      max_grade = 30; break;
    case 'wmmt6': // Fifteenth grade
      max_grade = GRADES.length-1;
  }

  // Loop over all of the grades
  for(let i = 0; i < GRADES.length; i++)
  {
    // Get the current grade
    let grade = GRADES[i];

    // If we have exceeded the maximum grade
    if (i > max_grade)
    {
      // Set the current versus grade element
      document.getElementById('current_grade').value = GRADES[max_grade][0];

      // Maximum versus grade reached
      document.getElementById('next_grade').value = "Max Versus Grade Reached";

      // Return the max grade
      return max_grade;
    }

    // If the requirements for the
    // current grade are NOT met
    if (grade[1] > current_value)
    {
      // Set the current versus grade element
      document.getElementById('current_grade').value = current_grade;

      // Set the next versus grade element
      document.getElementById('next_grade').value = grade[0] + " in " + (grade[1] - current_value) + " medals";

      // Return the current grade
      return current_grade;
    }

    // Update the current grade
    current_grade = grade[0];
  }
}

// updateMedals(id: String, value: Int): Void
// Given an element ID and a value, updates the
// property of the file and updates the versus
// grade display menu.
function updateMedals(id, value)
{
  // Update the element value
  updateElement(id, value)
  
  // Update the versus grade
  getVersusGrade();
}

// showVersusMenu(void): Void
// Populates the drop-downs for the
// car menu and displays the menu.
function showVersusMenu()
{
  // Last game result drop-downs
  populateDropdown('player_count');
  populateDropdown('game_result');

  // Player Count / Game Result values are read-only
  document.getElementById('player_count').disabled = true;
  document.getElementById('game_result').disabled = true;

  // Versus
  populateInput('games_played');
  populateInput('versus_stars');
  
  // Aura
  updateElement('smooth_rough', getValue('smooth_rough', 4, true), 4, true);
  updateElement('cool_wild', getValue('cool_wild', 4, true), 4, true);
  
  // Medals
  populateInput('gold_medals');
  populateInput('silver_medals');
  populateInput('bronze_medals');
  populateInput('plain_medals');

  // Versus Grade
  getVersusGrade();

  // Show the car menu
  showMenu('d_versus');
}

// Given the first two bytes of
// a car file, identify the game
// the car file is from.
function getVersusGame(game_id)
{
  // First two bytes of the car file identify the game
  switch(game_id)
  {
    // case : // MT5
    //   return 'wmmt5';
    case 8320: // MT5DX+
      return 'wmmt5dx';
    default:
      throw ("Unknown game: " + game_id)
  }
}