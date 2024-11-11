<!DOCTYPE html>
       <html>
       <head>
            <style>
                .main {
                    font-weight: bold;
                    font-size: xx-medium;
                    background-color: tomato;
                }

                .table{
                    color: blue;
                    background-color: yellow;
                }
            </style>


           <title>Countries</title>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
       </head>
       <body>
       <h2>Update Country Form</h2>
       <div class="main">
             <a href="/countries">Back</a>
       </div>

       <form action="/add-dog" method="post">
         <label for="name">Country id:</label><br>
         <input type="text" id="id" name="id" value="${dog.id}"/><br>

         <label for="name">Country name:</label><br>
         <input type="text" id="name" name="name" value="${dog.name}"/><br>

         <label for="language">Country Language:</label><br>
         <input type="text" id="language" name="language" value="${dog.language}"/>
         <br><br>
         <input type="submit" value="Submit"/>
       </form>

       </body>
       </html>