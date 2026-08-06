# DOCUMENTATION:
base url: "http://localhost:5000"

POST /api/register
## Rrequest example: 
{
  "username": "amit gandhi",
  "password": "AmitP@$$2"
}

## Response example: 
{ 
  "message": 'User registered successfully', 
  "user": { 
    "id": "6a74d4c0a33a8daa478b46ad", 
    "username": "Amit gandhi"
  }
}

POST /api/login
## Rrequest example: 
{
    "username":"ajay sahu",
    "password":"ajay@123"
}

## Response example: 
{ 
  "message": 'Login successful', 
  "userId": "6a74d4c0a33a8daa478b46ad" 
}
