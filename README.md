DOCUMENTATION:
base url: "http://localhost:5000"

POST /api/register
request example: 
{
  "username": "amit gandhi",
  "password": "AmitP@$$2"
}

response example: 
{ 
  "message": 'User registered successfully', 
  "user": { 
    "id": "6a74d4c0a33a8daa478b46ad", 
    "username": "Amit gandhi"
  }
}

POST /api/login
request example: 
{
    "username":"ajay sahu",
    "password":"ajay@123"
}

response example:
{ 
  "message": 'Login successful', 
  "userId": "6a74d4c0a33a8daa478b46ad" 
}
