# CATEGORIES

## List All

GET localhost:8000/api/fitness/category

## List One

GET localhost:8000/api/fitness/category/1

## Create

POST localhost:8000/api/fitness/category

```
  {
    "name": "Chest",
    "image": "https://www.deportesaludable.com/wp-content/uploads/2019/02/pecho.jpg"
  } 
```

## Delete One

DELETE localhost:8000/api/fitness/category/1

# USERS

## Register

POST localhost:8000/api/users/

```
  {
      "user":{
          "email":"test@gmail.com",
          "password":"12345678",
          "username":"test"
      }
  }
```

## Login

POST localhost:8000/api/users/login

```
  {
      "user":{
        "email":"andanivicente@gmail.com",
        "password":"12345678"
      }
  }
```
## Modificar

*NEED CREDENTIALS*

PUT localhost:8000/api/user/

```
{
    "user":{
        "email":"andanivicente@gmail.com",
        "bio":"test bio",
        "image":"image",
        "username":"vicnx"
    }
}
```
