from django.urls import path

from .views import PostList

app_name = 'blog'

urlpatterns = [
        path('posts/', PostList.as_view() ),
        ]
