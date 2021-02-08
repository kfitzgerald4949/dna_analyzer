from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from Bio.Seq import Seq

def index(request):
    return render(request,'dna_analyzer/index.html')

def dna_to_protien(request):
    dnaSeq = request.GET.get('param')
    coding_dna = Seq(dnaSeq)
    data = coding_dna.translate()
    return HttpResponse(data, 200)