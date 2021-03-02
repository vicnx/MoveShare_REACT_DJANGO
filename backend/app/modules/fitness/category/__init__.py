from django.apps import AppConfig


class CategoryAppConfig(AppConfig):
    name = 'app.modules.fitness.category'
    label = 'category'
    verbose_name = 'Category'

default_app_config = 'app.modules.fitness.category.CategoryAppConfig'
