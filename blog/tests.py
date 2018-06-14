from django.test import TestCase
from django.urls import reverse, resolve

from .models import Post
from .views import Blog

class BlogTests(TestCase):

    def test_blog_status_code(self):
        url = reverse('blog:blog')
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

    def test_blog_url_resolve_blog_view(self):
        view = resolve('/blog/')
        self.assertEquals(view.func.view_class, Blog)

    def slug_in_url_directs_to_blog_post(self):
        post = Post.objects.create(
                author = "Me",
                title = "This is not a test",
                category = "TDD",
                text = "Lorem"
                )
        url = reverse('/blog/' + post.slug)
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)
        self.assertInHTML('Lorem')


class PostModelTests(TestCase):
    
    @classmethod
    def setUpTestData(cls):
        Post.objects.create(
                author = "Me",
                title = "This is not a test",
                category = "TDD",
                text = "Lorem"
                )

    def test_post_is_created(self):
        self.assertEquals(Post.objects.count(), 1)

    
    def test_post_slug_is_correct(self):
        post = Post.objects.get(id=1)
        self.assertEquals(post.slug, 'this-is-not-a-test')





# Create your tests here.
