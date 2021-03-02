from django.apps import AppConfig


class TrainingAppConfig(AppConfig):
    name = 'app.modules.fitness.training'
    label = 'training'
    verbose_name = 'Training'

default_app_config = 'app.modules.fitness.training.TrainingAppConfig'