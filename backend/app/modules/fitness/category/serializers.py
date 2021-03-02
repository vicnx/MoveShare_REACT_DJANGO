from rest_framework import serializers

from .models import Category
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'image']

    # def to_representation(self, obj):
    #     return obj.name

    # def get_queryset(self):
    #   queryset = Category.objects.filter(pk=self.kwargs['id'])
    #   return queryset