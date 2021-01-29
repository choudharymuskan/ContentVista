from django.db import models

class Article(models.Model): 
    title=models.CharField(max_length=120)
    content=models.TextField()
    username=models.TextField()


    def __str__self(self): 
        return self.title

