from rest_framework import serializers, validators
from .models import User, Profile, Emotions, Task
from django.db import transaction
from django.utils import timezone


class userSerializer(serializers.Serializer):
    email = serializers.EmailField()
    username = serializers.CharField()
    image = serializers.URLField()
    def save(self, **kwargs):
        with transaction.atomic():
            user, created = User.objects.get_or_create(email=self.validated_data['email'], username=self.validated_data['username'])
            if not created:
                return user
            Profile.objects.create(user=user, image=self.validated_data['image'])
            return user
    def validate(self, attrs):
        email = attrs.get("email", None)
        if not email:
            raise validators.ValidationError("Email field is required")
        username = attrs.get("username", None)
        if not username:
            raise validators.ValidationError("Username field is required")
        image = attrs.get("image", None)
        if not image:
            raise validators.ValidationError("Image field is required")
        return {
            "email": email,
            "username": username,
            "image": image
        }
    

class emotionSerializer:
    class Meta:
        model = Emotions
        fields = ["user", "emotion"]
    


class taskSerializer(serializers.ModelSerializer):
    expired = serializers.SerializerMethodField("is_expired")
    class Meta:
        model = Task
        fields = ['task','user', 'reward', 'done', 'created_at', 'expire', 'user', 'expired']

    def is_expired(self, task):
        return timezone.now() > task.expire