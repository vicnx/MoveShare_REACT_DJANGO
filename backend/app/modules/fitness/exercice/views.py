from rest_framework import viewsets,generics,mixins,status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import (AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly)
from app.modules.core.permissions import IsOwner
from .serializers import ExerciceSerializer
from .models import Exercice
from .renderers import ExerciceJSONRenderer

# Create your views here.

class ExerciceViewSet(viewsets.ModelViewSet):
    queryset = Exercice.objects.all().order_by('name')
    serializer_class = ExerciceSerializer
    # Para buscar por slug
    lookup_field = 'slug'
    # Para establecer PERMISOS a request metodos
    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = [IsAuthenticated,]
        elif self.request.method == 'PUT':
            self.permission_classes = [IsAuthenticated,IsOwner]
        elif self.request.method == 'DELETE':
            self.permission_classes = [IsAuthenticated,IsOwner]
            
        return super(ExerciceViewSet,self).get_permissions()

    def get_queryset(self):
        queryset = self.queryset
        author = self.request.query_params.get('author', None)
        if author is not None:
            queryset = queryset.filter(author__user__username=author)

        categories = self.request.query_params.get('categories', None)
        favorited_by = self.request.query_params.get('favorited', None)
        if favorited_by is not None:
            queryset = queryset.filter(favorited_by__user__username=favorited_by)
        return queryset

    def create(self, request):
        print("CREATE VIEWS")
        print(self.request.user)
        serializer_context = {
            'author': self.request.user.profile,
            'request': request,
        }
        serializer_data = request.data.get('exercice', {})

        serializer = self.serializer_class(
        data=serializer_data, context=serializer_context
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response("Deleted",status=status.HTTP_200_OK)


class ExerciceFavoriteAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    renderer_classes = (ExerciceJSONRenderer,)
    serializer_class = ExerciceSerializer

    def delete(self, request, exercice_slug=None):
        profile = self.request.user.profile
        serializer_context = {'request': request}

        try:
            exercice = Exercice.objects.get(slug=exercice_slug)
        except Exercice.DoesNotExist:
            raise NotFound('An exercice with this slug was not found.')

        profile.unfavorite(exercice)

        serializer = self.serializer_class(exercice, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, exercice_slug=None):
        profile = self.request.user.profile
        serializer_context = {'request': request}

        try:
            exercice = Exercice.objects.get(slug=exercice_slug)
        except Exercice.DoesNotExist:
            raise NotFound('An exercice with this slug was not found.')

        profile.favorite(exercice)

        serializer = self.serializer_class(exercice, context=serializer_context)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

