//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(score) {
    this.score = score
    this.map = [
      { score: 128, allergen: 'cats' },
      { score: 64, allergen: 'pollen' },
      { score: 32, allergen: 'chocolate' },
      { score: 16, allergen: 'tomatoes' },
      { score: 8, allergen: 'strawberries' },
      { score: 4, allergen: 'shellfish' },
      { score: 2, allergen: 'peanuts' },
      { score: 1, allergen: 'eggs' }
    ]
    this.allergies = []
    this.createAllergyList()
  }

  list() {
    return this.allergies
  }

  createAllergyList() {
    let score = this.score
    while (score > 256) {
      score -= 256
    }
    for (let allergy of this.map) {
      if (score - allergy.score >= 0) {
        this.allergies.unshift(allergy.allergen)
        score -= allergy.score
      }
    }
  }


  allergicTo(food) {
    return this.allergies.includes(food)
  }

}