from django.urls import path

from .views import Home, Portfolio, About, emailView, successView

app_name = 'porfolio'

urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('contact/', emailView, name='contact'),
    path('emailsent/', successView, name='success'),
    path('portfolio/', Portfolio.as_view(), name='portfolio'),
    path('about/', About.as_view(), name='about'),
]
