import { AllowedColors } from "../types/AllowedColors";
import Dog from "../types/dog";

export const numberOfColors = (dogs: Dog): number => {
  console.log(`numberOfColorsStarted`);
  const uniqueColors: string[] = [];
  dogs.forEach((dog) => {
    if (!uniqueColors.includes(dog.color)) {
      uniqueColors.push(dog.color);
    }
  });
  return uniqueColors.length;
};

/*  `Den vanligaste färgen bland alla hundar är: ${commonColor(dogs)}. */
export const commonColor = (dogs: Dog): string => {
  let allDogsColor: string[] = [];
  dogs.forEach((dog) => {
    allDogsColor.push(dog.color);
  });

  let mostFrequent = "";
  let maxCount = 0;

  allDogsColor.forEach((color) => {
    //c går till jämförelsen c lika med color
    /*När filter startas så söker den efter brown i allDogsColor, och sparar det i en minnesarray. Beräknar sen hur lång arrayen är och sätter värdet på count.
    Om vi på första iterationen av forloopen är på brown, så kommer filter leta efter fler element med brown.*/

    const count = allDogsColor.filter((c) => c === color).length;
    if (count > maxCount) {
      mostFrequent = color;
      maxCount = count;
    }
  });

  return mostFrequent;
};

export const printAllColors = (dogs: Dog) => {
  //gå igenom alla hundar och spara unika färger som ett nytt objekt
  const dogsByColor: { [key in AllowedColors]: string[] } = {
    white: [],
    brown: [],
    black: [],
    beige: [],
    gray: [],
  };

  // För varje hund, använd dess färg för att hitta (jämföra mot) rätt nyckel i dogsByColor och lägg till hundens namn i arrayen som är värdet för den nyckeln
  dogs.forEach((dog) => {
    dogsByColor[dog.color].push(dog.name);
  });

  //resultat
  let result: string = "";

  (Object.keys(dogsByColor) as AllowedColors[]).forEach((key, index, array) => {
    const dogNames = dogsByColor[key];
    result += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${dogNames.length} `;
    if (dogNames.length >= 2) {
      result += `st. Names: ${dogNames.join(", ")}`;
    } else result += `st. Name: ${dogNames.join(", ")}`;
    if (index < array.length - 1) {
      result += "\n";
    }
  });

  return `Hundar sorterade efter färg:\n${result}`;
};
