from rest_framework import serializers, validators
from .models import User, Profile, Emotions, Task
from django.db import transaction
from django.utils import timezone
from datetime import timedelta


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
    

class emotionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emotions
        fields = ["user", "emotion", "date"]
        read_only_fields = ["date"]
    


class taskSerializer(serializers.ModelSerializer):
    expired = serializers.SerializerMethodField("is_expired")
    # expire_in_min = serializers.SerializerMethodField("expire_min")
    expire = serializers.CharField()

    def create(self, validated_data):
        expire_min = validated_data.pop('expire')
        validated_data['expire'] = self.get_expire(int(expire_min))
        return Task.objects.create(**validated_data)
    class Meta:
        model = Task
        fields = ['task','user', 'reward', 'done', 'created_at', 'expire', 'user', 'expired', 'category']
        read_only_fields = ['expired']

    def is_expired(self, task):
        return timezone.now() > task.expire

    def get_expire(self, minutes):
        return timezone.now() + timedelta(minutes=minutes)

    # def expire_min(self, task):
    #     return  task.expire - datetime.now(timezone.utc)