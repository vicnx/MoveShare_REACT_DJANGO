# Training_app_react
## Installation

We run `docker-compose up` (version 1.27) and wait for the containers to start.

Once we start we enter the django container and carry out the migrations
`python3 manage.py migrate`

We create a superuser
`python3 manage.py createsuperuser`

Then we will have to create a category from Postman
API: `"localhost:8000/api/fitness/category"`

``` 
{
  "name": "Chest",
  "image": "https://www.deportesaludable.com/wp-content/uploads/2019/02/pecho.jpg"
} 
```