#translate DNA to protien:
from Bio.Seq import Seq

def run(args*): 
 dnaSeq = args
 coding_dna = Seq(dnaSeq)
 protienId = coding_dna.translate()
 return protienId