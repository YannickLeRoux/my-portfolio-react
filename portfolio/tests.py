from django.urls import reverse, resolve
from django.test import TestCase

from .views import Home
from .forms import ContactForm

class HomeTests(TestCase):

    def test_home_view_status_code(self):
        url = reverse('portfolio:home')
        response = self.client.get(url)
        self.assertEquals(response.status_code, 200)

    def test_home_url_resolve_home_view(self):
        view = resolve('/')
        self.assertEquals(view.func.view_class, Home)

class ContactFormTests(TestCase):

    def test_csfr(self):
        url = reverse('portfolio:contact')
        response = self.client.get(url)
        self.assertContains(response, 'csrfmiddlewaretoken')

    def test_contains_form(self):
        url = reverse('portfolio:contact')
        response = self.client.get(url)
        form = response.context.get('form')
        self.assertIsInstance(form, ContactForm)

    # def test_contact_form_valid_data(self): TODO: finish this!
    #     url = reverse('portfolio:contact')
    #     form_data = {
    #             name: 'Yannick',
    #             email: 'test@gmail.com',
    #             message: 'Lorem Ipsum'}
    #     response = self.client.post(url, form_data)

# Create your tests here.
