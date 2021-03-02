from django.apps import AppConfig


class ArticlesAppConfig(AppConfig):
    name = 'app.modules.articles'
    label = 'articles'
    verbose_name = 'Articles'

    def ready(self):
        import app.modules.articles.signals

default_app_config = 'app.modules.articles.ArticlesAppConfig'
