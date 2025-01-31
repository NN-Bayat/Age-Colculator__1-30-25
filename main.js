// Get the date input element
let userInput = document.getElementById("date");
// Set the maximum date allowed to today to prevent future dates
userInput.max = new Date().toISOString().split("T")[0];

// Get the result display element
let result = document.getElementById("result");

// Function to calculate the age based on user input
function calculateAge() {
  // Get the entered birth date
  let birthDate = new Date(userInput.value);

  // Check if the input is a valid date
  if (isNaN(birthDate)) {
    result.innerHTML = "Please enter a valid date.";

    return; // Exit function if invalid input
  }

  // Extract day, month, and year from the birth date
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1; // Months are zero-based in JavaScript
  let y1 = birthDate.getFullYear();

  // Get the current date
  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1; // Months are zero-based in JavaScript
  let y2 = today.getFullYear();

  // Calculate the difference in years, months, and days
  let y3 = y2 - y1;
  let m3 = m2 - m1;
  let d3 = d2 - d1;

  // Adjust days and months if necessary to account for negative values
  if (d3 < 0) {
    m3--; // Borrow a month
    d3 += getDaysInMonth(y2, m2 - 1); // Get the number of days in the previous month
  }

  if (m3 < 0) {
    y3--; // Borrow a year
    m3 += 12; // Add 12 months to balance the negative month difference
  }

  // Display the calculated age
  result.innerHTML =
    `You are <span>${y3}</span> years, 
      <span>${m3}</span> months, 
      and <span>${d3}</span> days old.`;
}

// Helper function to get the number of days in a specific month of a year
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate(); // Returns the number of days in the given month
}

// Designed by me...