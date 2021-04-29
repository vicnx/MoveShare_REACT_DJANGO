from rest_framework import viewsets,generics,mixins
from app.modules.core.permissions import IsOwner
from app.modules.core.permissions import IsStaff
from rest_framework.permissions import (AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly)



from .serializers import CategorySerializer
from .models import Category

# Create your views here.

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategorySerializer
    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = [IsAuthenticated,IsStaff]
        elif self.request.method == 'PUT':
            self.permission_classes = [IsAuthenticated,IsStaff]
        elif self.request.method == 'DELETE':
            self.permission_classes = [IsAuthenticated,IsStaff]
            
        return super(CategoryViewSet,self).get_permissions()

 