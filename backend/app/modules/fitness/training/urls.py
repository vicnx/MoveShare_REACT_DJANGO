from django.conf.urls import include, url

from rest_framework.routers import DefaultRouter

from .views import TrainingViewSet
app_name = 'training'

router = DefaultRouter(trailing_slash=False)
router.register(r'training', TrainingViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),

]
