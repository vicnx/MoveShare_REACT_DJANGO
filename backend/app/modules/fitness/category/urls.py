from django.conf.urls import include, url

from rest_framework.routers import DefaultRouter

from .views import CategoryViewSet
app_name = 'category'

router = DefaultRouter(trailing_slash=False)
router.register(r'category', CategoryViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),

]
