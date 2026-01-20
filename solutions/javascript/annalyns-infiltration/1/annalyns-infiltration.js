export function canExecuteFastAttack(knightIsAwake) {
    if (knightIsAwake == true){
      return false;
    }
    return true;
  }
  
  export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if(knightIsAwake == true || prisonerIsAwake == true || archerIsAwake == true){
      return true
    }
    return false;
  }
  
  export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
    if(prisonerIsAwake == true && archerIsAwake == false){
      return true;
    }
    return false;
  }
  
export function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
    if (petDogIsPresent && !archerIsAwake) {
        return true;
    }
    if (!petDogIsPresent && prisonerIsAwake && !knightIsAwake && !archerIsAwake) {
        return true;
    }
    return false;
}

     
  