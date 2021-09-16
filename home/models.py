from django.db import models
from django import forms

# Create your models here.

class Comment(models.Model):
    name = models.CharField(max_length=500)
    phone_number = models.CharField(max_length=100)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        exclude = []