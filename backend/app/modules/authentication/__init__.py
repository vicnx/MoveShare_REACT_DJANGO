from django.apps import AppConfig


class AuthenticationAppConfig(AppConfig):
    name = 'app.modules.authentication'
    label = 'authentication'
    verbose_name = 'Authentication'

    def ready(self):
        import app.modules.authentication.signals

# This is how we register our custom app config with Django. Django is smart
# enough to look for the `default_app_config` property of each registered app
# and use the correct app config based on that value.
default_app_config = 'app.modules.authentication.AuthenticationAppConfig'
