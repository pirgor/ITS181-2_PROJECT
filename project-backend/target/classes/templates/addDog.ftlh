<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dog Information Form</title>
</head>
<body>

<h2>Dog Information Form</h2>
<form action="/api/add-dog" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br><br>

    <label for="breed">Breed:</label>
    <input type="text" id="breed" name="breed" required>
    <br><br>

    <label for="gender">Gender:</label>
    <select id="gender" name="gender" required>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </select>
    <br><br>

    <label for="img">Image URL:</label>
    <input id="img" name="img" required>
    <br><br>

    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="0" required>
    <br><br>

    <button type="submit">Submit</button>
</form>

</body>
</html>
