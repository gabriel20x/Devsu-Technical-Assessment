export const validate = (input) => {
  let error = {};
  if (!input.name) {
    error.name = "";
  } else if (!/^.{2,15}$/.test(input.name)) {
    error.name = "Too long or too short";
  }

  if (!input.image) {
    error.image = "image required";
  } else if (!/(https?:\/\/.*\.(?:png|jpg))/i.test(input.image)) {
    error.image = "Must be a url image in png or jpg format";
  }

  if (input.attack <= 0 || input.attack > 100) {
    error.attack = "attack must be between 1 and 100";
  }

  if (input.defense <= 0 || input.defense > 100) {
    error.defense = "defense must be between 1 and 100";
  }

  return error;
};

export const compareData = (input, pokemonData) => {
  if (
    input.name === pokemonData.name &&
    input.image === pokemonData.image &&
    input.attack === pokemonData.attack &&
    input.defense === pokemonData.defense
  )
    return true;
  return false;
};
