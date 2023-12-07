from django.shortcuts import render


def portfolio(request):
    return render(request, 'core/portfolio.html')