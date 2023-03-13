# direcly-node APP

## How to run the app with Docker:
```bash
#Create the image with node
docker build . -t direcly-node

#Starts the container with the API image on Port 3000
docker run -p 3000:3000 -d direcly-node

#After that the app runs on the port 3000. To check it: 
docker ps
```

## Visit the page:
> By default used Port is 3000<br>
You can visit the app browsing at http://localhost:3000.<br>
The front pages are:<br>
 - http://localhost:3000/register<br>
 - http://localhost:3000/leads<br>

## Endpoints:
We have 3 endpoints:<br>
<br>
**GET:** '/api/v1/students' #Used to get All students<br>
**GET:** '/api/v1/students/<studentID>' #Used to get specific Student by <studentID><br>
**POST:** '/api/v1/students' #Used to create a Student

## Authentication:
This App uses 'basic-auth' in a Middlelware, all the pages including the v1 Routes requires a Basic Auth, that is gonna shown as a Promt. <br>
    Credentials are:<br>
    - **user:** 'admin'<br>
    - **password:** '1234'<br>
Note: I know Basic Auth is also used is sent in the Headers, but in this case is used to visit the page, but works if it's injected in the route. Was implemented just to show the functionality.


## Tech Stack:

**Client:** Js

**Server:** Node, Express

## Authors

- [@brandonCor96](https://github.com/brandonCor96)

## Note:
db/ folder was used just as a test. In order to create a non-real database.