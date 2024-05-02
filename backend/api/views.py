from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework.decorators import api_view
from .google_auth import create_token
from . import serializer as serial
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated


@api_view(['POST'])
def auth(request):
    try:
        serializer = serial.userSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=400)
        user = serializer.save()
        simple_jwt_tokens = create_token(user=user)

        return Response(simple_jwt_tokens)
    
    except Exception as e:
        print(e)
        return Response({"Error": "server error"}, status=500)


class emotionApiView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        try:
            data = {**request.data, "user": request.user}
            serializer = serial.emotionSerializer(data=data)
            if not serializer.is_valid():
                return Response(serializer.errors, status=400)
            result = serializer.save()
            return Response(result, status=201)

        except Exception as e:
            print(e)
            return Response({"error": "Server error"}, status=500)