// Password generator function
function generatePassword(length) {
  // Define possible characters for the password
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
  let password = "";
  for (let i = 0; i < length; i++) {
    // Choose a random character from the charset
    let charIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(charIndex);
  }
  
  return password;
}

// Example usage
let password = generatePassword(20); // Generate a 20-character password
console.log(password); // Output the generated password
