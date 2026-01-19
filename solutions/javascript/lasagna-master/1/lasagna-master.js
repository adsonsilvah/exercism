export function cookingStatus(time){
  if(time > 0){
    return 'Not done, please wait.';
  }
  else if(time === 0){
    return 'Lasagna is done.';
  }
  return 'You forgot to set the timer.';
}

export function preparationTime(layers, time) {
  if(Boolean(layers) === false){
    return 0;
  }
  else if(Boolean(time) === false){
    return layers.length*2;
  }
  return layers.length * time;
}

export function quantities(array) {
  let qtdNoodles = 0;
  let qtdSauce = 0;

  for (const item of array) {
    if (item === 'noodles') {
      qtdNoodles += 1;
    }
    if (item === 'sauce') {
      qtdSauce += 1;
    }
  }

  return {
    noodles: qtdNoodles * 50,
    sauce: qtdSauce * 0.2
  };
}

export function addSecretIngredient(arr1, arr2) {
  const lastIngredient = arr1[arr1.length - 1];
  arr2.push(lastIngredient);
  return;
}

export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};

  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = (recipe[ingredient] / 2) * portions;
  }

  return scaledRecipe;
}


