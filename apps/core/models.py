from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _

class Technology(models.Model):
    name = models.CharField(max_length=20)
    logo = models.FileField(upload_to="core/logos/technologies/")

    class Meta:
        verbose_name = _("Technology")
        verbose_name_plural = _("Technologies")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("technology_detail", kwargs={"pk": self.pk})

class Skill(models.Model):
    name = models.CharField(max_length=50)
    technology = models.OneToOneField(Technology, verbose_name=_("Technology"), on_delete=models.CASCADE)
    description = models.CharField(max_length=150)
    
    class Meta:
        verbose_name = _("Skill")
        verbose_name_plural = _("Skills")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("skill_detail", kwargs={"pk": self.pk})

class Job(models.Model):
    title = models.CharField(max_length=70)
    company = models.CharField(max_length=50)
    start_date = models.DateField(auto_now=False, auto_now_add=False)
    end_date = models.DateField(auto_now=False, auto_now_add=False)
    description = models.CharField(max_length=500)

    class Meta:
        verbose_name = _("Job")
        verbose_name_plural = _("Jobs")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("job_detail", kwargs={"pk": self.pk})

class Project(models.Model):
    name = models.CharField(max_length=70)
    description = models.CharField(max_length=500)    
    technologies = models.ManyToManyField(Technology, verbose_name=_("Technologies"))

    github_link = models.URLField(blank=True, null=True, verbose_name=_("GitHub Link"))
    web_url = models.URLField(blank=True, null=True, verbose_name=_("Web URL"))

    class Meta:
        verbose_name = _("Project")
        verbose_name_plural = _("Projects")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("project_detail", kwargs={"pk": self.pk})
