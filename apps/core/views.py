from django.shortcuts import render
from django.views import View
from apps.core.models import Skill, Job, Project

class Portfolio(View):
    template_name = "core/portfolio.html"

    def get(self, request, *args, **kwargs):
        context = {
            'skills': Skill.objects.all(),
            'jobs': Job.objects.all(),
            'projects': Project.objects.all()
        }

        return render(request, self.template_name, context)
