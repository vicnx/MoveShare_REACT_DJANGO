<h1 align="center">Welcome to Moveshare 👋</h1>
<p>
</p>

> A social network where you can share and view exercises and trainings with other people

## Install

To run the project we will have to have docker-compose (version 1.27) installed.

Once installed we will have to run docker-compose up to start the containers.

Next we will enter the backend container (Django) and execute:

```sh
python3 manage.py migrate
```

To access the administrator functions we will also have to create a superuser.

```sh
python3 manage.py createsuperuser
```

## Usage

```sh
docker-compose up
```

## Some previews 📷

### Home - Menu

![Home](readme-images/Home.gif)

### Login - Register

![Login](readme-images/login.gif)

### Create Exercice

![new_exer](readme-images/new_exer.gif)

### Exercice List, Favs and Preview

![exercice-list](readme-images/exercice_favs.gif)

### Create Workout

![new_workout](readme-images/new_workout.gif)

### Workout List and Preview

![workouts](readme-images/workouts.gif)

### Profiles

![profiles](readme-images/profiles.gif)

### Panel Admin

![admin_panel](readme-images/admin_panel.gif)

## Built with 🛠️
* [REACT HOOKS](https://es.reactjs.org/)
* [Django](https://www.djangoproject.com/)
* [Postgresql](https://www.postgresql.org/)

## Author

👤 **Vicente Andani**

* Website: https://vicnx.github.io/Curriculum/
* Github: [@vicnx](https://github.com/vicnx)
* LinkedIn: [@vicnx](https://linkedin.com/in/vicnx)













## Show your support

Give a ⭐️ if this project helped you!