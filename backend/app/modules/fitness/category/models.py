from django.db import models

# from django.template.defaultfilters import slugify
# from random import randint

# class Employee(models.Model):
#     name = models.CharField(max_length=60)
#     alias = models.CharField(max_length=60)
#     def __str__(self):
#         return self.name

# class Coche(models.Model):
#     modelo = models.CharField(max_length=60)
#     marca = models.CharField(max_length=60)
#     propietario = models.ForeignKey(Employee, on_delete=models.CASCADE, blank=True, null=False, default=1, related_name='cars')
#     def __str__(self):
#         return self.modelo+" - "+self.marca

class Category(models.Model):
    # slug = models.SlugField(unique=True, null = True, blank = True)
    name = models.CharField(max_length=60)
    image = models.CharField(max_length=254, null = True)

    # def save(self, *args, **kwargs):
    #     self.slug = slugify(self.name)+"-"+str(randint(1000,9999))
    #     super(Category, self).save(*args, **kwargs)

    # def __str__(self):
    #     return self.name


