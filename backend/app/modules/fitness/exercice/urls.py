from django.conf.urls import include, url

from rest_framework.routers import DefaultRouter

from .views import ExerciceViewSet,ExerciceFavoriteAPIView
app_name = 'exercice'

router = DefaultRouter(trailing_slash=False)
router.register(r'exercice', ExerciceViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^exercice/(?P<exercice_slug>[-\w]+)/favorite/?$',
    ExerciceFavoriteAPIView.as_view()),


]
