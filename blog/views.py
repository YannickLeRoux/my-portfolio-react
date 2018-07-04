from django.utils import timezone
from .models import Post
from .serializers import PostSerializer
from rest_framework import generics

class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

