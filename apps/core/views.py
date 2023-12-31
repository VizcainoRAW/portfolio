from django.shortcuts import render
from django.views import View
from apps.core.models import Skill, Job, Project, Technology

class Portfolio(View):
    template_name = "core/portfolio.html"

    def get(self, request, *args, **kwargs):
        context = {
            'technologies': Technology.objects.all(),
            'jobs': Job.objects.all().order_by('-start_date'),
            'projects': Project.objects.all(),
        }

        return render(request, self.template_name, context)
