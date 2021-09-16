from django.contrib import admin
from .models import *
# Register your models here.


class CommentAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone_number', 'timestamp')


admin.site.register(Comment, CommentAdmin)
admin.site.site_header = 'Climax Tech Solutions'