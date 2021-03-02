from rest_framework import serializers
from app.modules.fitness.exercice.serializers import ExerciceSerializer
from app.modules.fitness.exercice.models import Exercice
from app.modules.profiles.serializers import ProfileSerializer
from app.modules.fitness.training.models import Difficulty
import json

from .models import Training
#https://bitbucket.org/snippets/adautoserpa/MeLa/django-rest-framework-manytomany-through

class DifficultySerializer(serializers.ModelSerializer):
    ex_id = serializers.PrimaryKeyRelatedField(queryset=Exercice.objects.all(),required=False, source='exercice' )
    sets = serializers.CharField(required=False)
    duration = serializers.CharField(required=False)
    repetitions = serializers.CharField(required=False)
    exercice = ExerciceSerializer(required=False)
    class Meta:
        model = Difficulty
        fields = (
            "exercice",
            "sets",
            "duration",
            "repetitions",
            "ex_id"
        )

class TrainingSerializer(serializers.ModelSerializer):
    difficulties = DifficultySerializer(many = True, source="exercices_t") #SOURCE HACE REFERENCIA A RELATED_NAME EN MODELO TRAINING/MODELS.PY DE 
    author = ProfileSerializer(read_only=True)
    class Meta:
        model = Training
        fields = ['id', 'name', 'slug','image','description','verified','author','difficulties']
    def create(self, validated_data):
        difficulties_data = validated_data.pop('exercices_t')
        author = self.context.get('author', None)

        training = Training.objects.create(author=author, **validated_data)
        for difficultie in difficulties_data:
            d=dict(difficultie)
            Difficulty.objects.create(training=training, **d)
        return training