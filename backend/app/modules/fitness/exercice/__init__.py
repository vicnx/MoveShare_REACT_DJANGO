from django.apps import AppConfig


class ExerciceAppConfig(AppConfig):
    name = 'app.modules.fitness.exercice'
    label = 'exercice'
    verbose_name = 'Exercice'

default_app_config = 'app.modules.fitness.exercice.ExerciceAppConfig'
