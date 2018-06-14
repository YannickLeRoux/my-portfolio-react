from django.urls import path

from .views import Blog, PostDetail

app_name = 'blog'

urlpatterns = [
        path('', Blog.as_view(), name='blog'),
        path('<slug:slug>/', PostDetail.as_view(), name='post')
        ]
