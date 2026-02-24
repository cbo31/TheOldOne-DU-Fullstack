from django.contrib import admin
from .models import CustomUsers

@admin.register(CustomUsers)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['id', 'email', 'name', 'created_at']
    search_fields = ['email', 'name']
    list_filter = ['created_at']
