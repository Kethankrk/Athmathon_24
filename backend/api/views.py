from django.shortcuts import render
from rest_framework.views import APIView, Response
from rest_framework.decorators import api_view
from .google_auth import GoogleAuthProvider, create_token
from .serializer import userSerializer


@api_view(['POST'])
def auth(request):
    try:
        token = request.data[token]
        if not token:
            return Response({"Error": "Token not provided"}, status=400)
        user_info = GoogleAuthProvider(token=token).get_decoded_data()
        serializer = userSerializer(data=user_info)
        if not serializer.is_valid():
            return Response(serializer.errors, status=400)
        user = serializer.save()
        simple_jwt_tokens = create_token(user=user)

        return Response(simple_jwt_tokens)
    
    except Exception as e:
        print(e)
        return Response({"Error": "server error"}, status=500)

