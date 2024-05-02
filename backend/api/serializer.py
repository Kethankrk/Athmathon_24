from rest_framework import serializers
from .models import User, Profile, Emotions
from django.db import transaction


class userSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        with transaction.atomic():
            user, created = User.objects.get_or_create(email=validated_data['email'], username=validated_data['username'])
            if not created:
                return user
            user.save()
            profile = Profile(user=user, image=validated_data['image'])
            profile.save()

            return user
    image = serializers.URLField()
    class Meta:
        model = User
        fields = ['email', 'username', 'image']
    

class emotionSerializer:
    class Meta:
        model = Emotions
        fields = ["user", "emotion"]