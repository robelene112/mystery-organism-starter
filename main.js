// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Returns a P. Aequor object
function pAequorFactory(number, dnaBaseArray) {
  return {
    specimenNum: number,
    dna: dnaBaseArray,
    // Mutates one dna base in the dna property
    mutate: function () {
      this.dna[Math.floor(Math.random() * 15)] = returnRandBase();
      return this.dna;
    },
    // Compares dna bases with another P. Aequor instance and return the % both instanes have in
    // common
    compareDNA: function (pAequorObject) {
      let commoncount = 0;
      for (i = 0; i < 15; i++) {
        if (this.dna[i] === pAequorObject.dna[i]) {
          commoncount += 1;
        }
      }
      let percentage = Math.round((100 / 15) * commoncount);
      console.log(
        `Specimen #1 and specimen #2 have ${percentage}% DNA in common`
      );
    },
    // Checks whether or not the dna of a P. Aequor instance is made up at least 60% 'G' and 'C' bases
    willLikelySurvive: function () {
      let count = 0;
      for (i = 0; i < 15; i++) {
        if (this.dna[i] === "G" || this.dna[i] === "C") {
          count += 1;
        }
      }
      return (100 / 15) * count >= 60;
    },
  };
}

// Create an array of 30 P. Aequor instances
let arrayOfPaequor = [];

for (i = 0; i < 30; i++) {
  arrayOfPaequor.push(pAequorFactory(i, mockUpStrand()));
}

console.log(arrayOfPaequor);
