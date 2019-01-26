# GifTastic

Before You Begin

1. Hit the GIPHY API.

2. Fool around with the GIPHY API. Giphy API.
3. Be sure to read about these GIPHY parameters (hint, hint):
• q
• limit
• rating

4. Like many APIs, GIPHY requires developers to use a key to access their API data. To use the GIPHY API, you'll need a GIPHY account (don't worry, it's free!) and then obtain an API Key by creating an app.
5. Make sure you switch the protocol in the query URL from http to https, or the app may not work properly when deployed to Github Pages.

Instructions

1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.

2. Your app should take the topics in this array and create buttons in your HTML.

3. Try using a loop that appends a button for each string in the array.

4. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

5. Under every gif, display its rating (PG, G, so on). This data is provided by the GIPHY API.
Only once you get images displaying with button presses should you move on to the next step.

6. Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

Rejoice! You just made something really cool.
