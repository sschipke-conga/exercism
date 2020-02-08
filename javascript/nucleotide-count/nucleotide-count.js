//
// This is only a SKELETON file for the 'Nucleotide-Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(sequence) {
    if(!sequence) {
      return '0 0 0 0'
    }
    const nucleotides = sequence.split('');
    let counts = [0, 0 ,0 ,0]
    
    for (let nucleotide of nucleotides) {
      if (!['A', 'C', 'T', 'G'].includes(nucleotide)) {
        throw new Error('Invalid nucleotide in strand')
      }
      if(nucleotide === 'A') { counts[0]++}
      if(nucleotide === 'C') {counts[1]++}
      if(nucleotide === 'G') {counts[2]++}
      if(nucleotide === 'T') { counts[3]++ }
    }
    return counts.join(' ')
  }
}
