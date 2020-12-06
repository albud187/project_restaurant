from django.db import models
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify

# Create your models here.

class Restaurant(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=120)
    email = models.CharField(max_length = 120)

    street_address = models.CharField(max_length=120)
    city = models.CharField(max_length = 120)
    state_province = models.CharField(max_length = 120)
    country = models.CharField(max_length = 120)

    type = models.CharField(max_length = 120)
    hours = models.TextField()
    public_email = models.CharField(max_length = 120)
    public_phonenumber = models.CharField(max_length = 120)

    slug = models.SlugField(blank=True, null=True)

    def save(self, *args, **kwargs):
            original_slug = slugify(self.name)
            queryset = Restaurant.objects.all().filter(slug__iexact=original_slug).count()

            count = 1
            slug = original_slug
            while(queryset):
                slug = original_slug + '-' + str(count)
                count += 1
                queryset = Restaurant.objects.all().filter(slug__iexact=slug).count()

            self.slug = slug

            # if self.featured:
            #     try:
            #         temp = NoteGroup.objects.get(featured=True)
            #         if self != temp:
            #             temp.featured = False
            #             temp.save()
            #     except NoteGroup.DoesNotExist:
            #         pass
            super(Restaurant, self).save(*args, **kwargs)


    def __str__(self):
        return (self.name)
