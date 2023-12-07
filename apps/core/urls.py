from django.urls import path
from . import views

app_name = 'juiceapp'

urlpatterns = [
    path('/', views.portfolio, name='portfolio'),
]