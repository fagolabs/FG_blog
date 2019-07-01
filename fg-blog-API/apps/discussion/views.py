from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializers import PostCommentsSerializer
from rest_framework.generics import ListAPIView
# Create your views here.


class ListCommentInPostView(ListAPIView):
    serializer_class = PostCommentsSerializer

    def get_queryset(self, *args, **kwargs):
        post_id = kwargs.get('post_id', None)
        query = PostComment.objects.none()
        if post_id:
            query = PostComment.objects.filter(post_parent=post_id)
        return query

