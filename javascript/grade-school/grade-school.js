//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this._roster = {}
  }


  roster() {
    let readOnly = Object.keys(this._roster).reduce((acc, key) => {
      acc[key] = this._roster[key].concat();
      return acc;
    }, {});
    return readOnly
    // let roster = {...this._roster}
    // let readOnly = function() {
    //   let copy = {...roster}
    //   return copy
    // }
    // return readOnly()
  }

  add(student, grade) {
    if(!this._roster[grade]) {
      this._roster[grade] = []
    }
    this._roster[grade].push(student)
    this._roster[grade].sort()
  }

  grade(gradeLevel) {
    if(this._roster[gradeLevel]) {
      let copy = [...this._roster[gradeLevel]]
      return copy
    } else {
      return []
    }  
  }

}
