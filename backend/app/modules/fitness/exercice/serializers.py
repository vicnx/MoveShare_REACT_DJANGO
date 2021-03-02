from rest_framework import serializers
from app.modules.profiles.serializers import ProfileSerializer
from app.modules.fitness.category.models import Category
from app.modules.fitness.category.serializers import CategorySerializer

from .models import Exercice

class ExerciceSerializer(serializers.ModelSerializer):
    #Declaramos categories como READ ONLY (ya que solo lo gastaremos para mostrar)
    categories = CategorySerializer(many=True, read_only=True)
    #declaramos tambien categories_id para al realizar el insert pongamos solo las ID (write only)
    categories_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), write_only=True,many=True)
    author = ProfileSerializer(read_only=True)
    description = serializers.CharField(required=False)
    verified = serializers.BooleanField(default=False)

    favorited = serializers.SerializerMethodField()
    favoritesCount = serializers.SerializerMethodField(
        method_name='get_favorites_count'
    )

    class Meta:
        model = Exercice
        #añadimos el campo categories y categories_id
        fields = ('id', 'slug', 'name', 'description', 'image', 'favorited', 'favoritesCount', 'author','verified', 'categories','categories_id')

    
    def create(self, validated_data):
        #a categories añadimos las ID insertadas al realizar el POST
        categories = validated_data.pop('categories_id')
        author = self.context.get('author', None)
        exercice = Exercice.objects.create(author=author, **validated_data)

        #hacemos un for por todas las categorias y las añadimos una a una a categories
        for category in categories:
            exercice.categories.add(category)  
        return exercice

    def update(self, instance, validated_data):
        print(instance)
        #a categories añadimos las ID insertadas al realizar el POST
        categories = validated_data.pop('categories_id')
        author = self.context.get('author', None)

        for (key, value) in validated_data.items():
            setattr(instance, key, value)
        instance.categories.set([]) #Elimanamos las categorias que tuviera anterioremente
        #hacemos un for por todas las categorias y las añadimos una a una a categories
        for category in categories:
            instance.categories.add(category)
        instance.save()
        return instance

    def get_favorited(self, instance):
        request = self.context.get('request', None)

        if request is None:
            return False

        # if not request.user.is_authenticated():
        if not request.user.is_authenticated:
            return False

        return request.user.profile.has_favorited(instance)

    def get_favorites_count(self, instance):
        return instance.favorited_by.count()
