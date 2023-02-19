My-app consists of the frontend which is made using React you can cd into the my-app directory and type the command "npm start" in terminal to start the frontend application on localhost 3000.
Server consists of backend made using node.js and you can cd into the server directory and type the command "node server.js" or "nodemon server.js" to start the backend server on localhost:8000.

Now from frontend user can select the genre and pages and hit the submit button which will store the result in the backend in mongodb.

Remainning part:
A collection is to be made on the backend where a score is decided for each book and no of pages.
For e.g 
Genre Thriller and No of pages 100 is assigned score 1
Genre Thriller and No of pages 200 is assigned score 2
Genre Thriller and No of pages 300 is assigned score 3
Genre Romance and No of pages 100 is assigned score 4
and so on........

We can use this as vector 1 while plotting the visual representation. Vector 2 wil consist of the choice that user has selected so if user has selected Thriller and 200 pages the score is 2. We can plot 2 against all the scores and show them in the visual representation.
Currently I am using hardcoded values to plot the visual representaion of vectors.
