from django.urls import path
from . import views

urlpatterns = [
    path("auth/", views.auth),
    path("task/", views.taskView.as_view()),
    path("emotion/", views.emotionApiView.as_view()),
]
