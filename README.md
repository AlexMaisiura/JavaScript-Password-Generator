# JavaScript Password Generator

This is a simple password generator program written in JavaScript. It allows you to generate random passwords with a length of your choice, using a combination of uppercase and lowercase letters, numbers, and special characters.

## DEMO - https://codepen.io/Sanchous2018/pen/abRmdGB

### Features
Generate passwords with a length between 8 and 128 characters.
Choose which types of characters to include in the password (uppercase letters, lowercase letters, numbers, and special characters).
Copy the generated password to your clipboard with one click.

### How to use
Open the index.html file in your web browser.
Enter the desired length of your password using the number input field.
Select which types of characters to include in your password using the checkboxes.
Click the "Generate Password" button to generate a new password.
Click the "Copy to Clipboard" button to copy the generated password to your clipboard.

### Technologies used
HTML
CSS
JavaScript

### Credits
This program was created by Alex Maisiura as a project to help a new starters with JavaScript. Feel free to use and modify this code for your own projects.

### License
This program is licensed under the MIT License.

### In Detail:
```js
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
```
In this example, the generatePassword function takes a single parameter length, which specifies the length of the password to generate. The function generates a random password by choosing random characters from a predefined set of characters. The charset variable contains all the possible characters that can be used in the password.

To use this password generator program for a GitHub password, you can call the generatePassword function with a length of your choice (we recommend at least 16 characters). You can then use the generated password when creating a new GitHub account or changing your existing password.

To make this program more user-friendly, you can wrap it in a simple HTML page that allows the user to specify the desired password length and displays the generated password. Here's an example HTML code for this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Password Generator</title>
  </head>
  <body>
    <h1>Password Generator</h1>
    <form>
      <label for="length">Password length:</label>
      <input type="number" id="length" name="length" min="1" max="100" value="16">
      <br><br>
      <button type="button" onclick="generate()">Generate Password</button>
    </form>
    <br><br>
    <div id="output"></div>
    <script>
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

      // Generate password function
      function generate() {
        let length = document.getElementById("length").value;
        let password = generatePassword(length);
        document.getElementById("output").innerHTML = password;
      }
    </script>
  </body>
</html>
```
This HTML code creates a simple form with an input field for specifying the password length and a button to generate the password. The generate() function is called when the user clicks the "Generate Password" button, which in turn calls the generatePassword function with the specified length and displays the generated password in a div element with an id of "output".

You can save this HTML code as a file (e.g. "password-generator.html") and open it in a web browser to use the password generator. You can also modify the HTML and JavaScript code as per your requirement and add a readme file to describe how to use the program.

```css
/* Style for the form and input fields */
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
}

label {
  font-size: 18px;
}

input[type=number] {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  text-align: center;
  width: 100px;
  margin-bottom: 20px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

/* Style for the output div */
#output {
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

```
In this CSS code, we've added styles for the HTML form and input fields, including the font size, padding, border, and background color. We've also added styles for the output div element, including the font size, font weight, padding, and border.

You can save this CSS code in a separate file (e.g. "style.css") and link it to your HTML code by adding the following line in the head section of your HTML code:

```html
<link rel="stylesheet" type="text/css" href="style.css">
```
This will apply the styles defined in the CSS file to the HTML elements in your web page. You can modify the CSS code as per your requirement to further customize the appearance of the password generator program.
