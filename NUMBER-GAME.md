#Walkthrough: JavaScript Number Game

This is a JavaScript exercise for beginners. After finishing the [Codecademy lessons from 1 through 10](http://www.codecademy.com/en/tracks/javascript), you should be able to make this game using the two files provided here:

+ number.html
+ scripts/number.js

Try to solve it with just those two files! Then, if you get stuck, read on here, below ...

1. Start with a function:

    ```
        function playGame() {
        }
    ```

2. Then think: How do I allow someone to type a number?

    ```
        function playGame() {
            prompt("Type a number from 1 to 10: ");
        }
    ```

3. How can you use that number? You need it to be stored in a variable:

    ```
        function playGame() {
            var num = prompt("Type a number from 1 to 10: ");
        }
    ```

4. You also need to generate a random number (from 1 to 10) and store it in a variable:

    ```
        function playGame() {
            var num = prompt("Type a number from 1 to 10: ");
            
            var guess = 1 + Math.floor(Math.random() * 10);
        }
    ```

5. You need to tell the player whether the number is right or, if it is  wrong, too high or too low:

    ```
        function playGame() {
            var num = prompt("Type a number from 1 to 10: ");
            
            var guess = 1 + Math.floor(Math.random() * 10);
            
            if (num == guess) {
    	    	alert("You win! The number was " + guess + ".");
            } else if (num < guess) {
        		num = prompt("Too low! You may guess again:  ");
            } else {
    		    num = prompt("Too high! You may guess again:  ");
        }
    ```

6. The next question is: What will you do with the new num provided by the player? Hm … Is this a good time for a loop? Which kind of loop?
	+ How many times should the player be allowed to guess?
	+ What will happen each time?
	+ What happens when he/she runs out of tries? 

**There's more to do; it's not all spelled out here.**

You can do a lot of things will this small game. You will learn a lot if you try to limit the number of guesses and give appropriate feedback to the player for each guess, for a win, and for losing.

##Next Steps

Try writing *pseudo code* to figure out the steps you need to complete the number game. Pseudo code looks like this:

+ Ask user to type a number from 1 to 10
+ Get a random number  from 1 to 10
+ Compare the random number and the user's number
+ Tell the user whether the two numbers match
+ If they match, game over.
+ If they don't match, tell user whether his/her number is too high or too low
+ Let the user enter a new number (keep same random as before)
+ Compare the random number and the user's NEW number
+ Tell the user whether the two numbers match
+ If they match, game over.
+ If they don't match, tell user whether his/her number is too high or too low
+ Let the user enter a new number (keep same random as before)

**Does this help you see what the loop needs to do?** 
 
##Tips

JavaScript running in the browser can be very unforgiving. If you miss one semicolon, your script might not run. You can open the Console in Chrome to get an idea of what’s going wrong:

<http://www.jtoolkit.com/wp/2012/12/javascript-console-in-chrome/>

However, the **error messages** are often not helpful. For example, “Uncaught ReferenceError: playGame is not defined” will appear when you have forgotten something, such as a curly brace.
