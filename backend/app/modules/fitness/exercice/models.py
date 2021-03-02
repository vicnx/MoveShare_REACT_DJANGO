from django.db import models
from app.modules.fitness.category.models import Category

from django.template.defaultfilters import slugify
from random import randint

class Exercice(models.Model):
    slug = models.SlugField(unique=True, null = True, blank = True)
    name = models.CharField(max_length=60)
    description = models.TextField()
    image = models.CharField(max_length=255, default='https://upload.wikimedia.org/wikipedia/commons/8/84/Musculation_exercice_abdominal.png',blank = True,null = True)

    author = models.ForeignKey('profiles.Profile', on_delete=models.CASCADE, related_name='exers')
    # categories = models.ManyToManyField(Category, blank=True)
    # categories = models.ManyToManyField(Category, related_name='categoriess') #FUNCIONAVA MIGRATE

    # categories = models.ManyToManyField(Category, through='ExerciceCategory', on_delete=models.CASCADE, related_name='categories')
    # categories = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='categories')

    # categories = models.ForeignKey(Category, on_delete=models.DO_NOTHING, blank=True, null=False, default=1, related_name='categories') #FUNCIONA MIGRATE

    verified = models.BooleanField(default=False)

    categories = models.ManyToManyField(Category, blank=True)
 

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)+"-"+str(randint(1000,9999))
        super(Exercice, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

# class ExerciceCategory(models.Model):
#     category = models.ForeignKey(Category)
#     exercice = models.ForeignKey(Exercice)