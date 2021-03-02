from django.db import models
from django.template.defaultfilters import slugify
from app.modules.fitness.exercice.models import Exercice
from random import randint



class Training(models.Model):
    slug = models.SlugField(unique=True, null = True, blank = True)
    name = models.CharField(max_length=60)
    description = models.TextField()
    image = models.CharField(max_length=255, default='https://upload.wikimedia.org/wikipedia/commons/8/84/Musculation_exercice_abdominal.png',blank = True,null = True)
    verified = models.BooleanField(default=False)
    author = models.ForeignKey('profiles.Profile', on_delete=models.CASCADE, related_name='trainings')
    # exercices = models.ManyToManyField(Exercice, through='Difficulty')
    difficulties = models.ManyToManyField(Exercice, through='Difficulty', related_name='difficulties',related_query_name='difficulties')

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)+"-"+str(randint(1000,9999))
        super(Training, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

class Difficulty(models.Model):
    training = models.ForeignKey(Training, on_delete=models.CASCADE, related_name='exercices_t',related_query_name='exercices_t')
    exercice = models.ForeignKey(Exercice, on_delete=models.CASCADE)
    duration = models.CharField(max_length=60)
    repetitions = models.CharField(max_length=60)
    sets = models.CharField(max_length=60)
    ex_id = models.CharField(max_length=60)
    def __str__(self):
        return self.sets
    