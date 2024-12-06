type Dog = {
  name: string;
  color: string;
}[];

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
export const commonColor = (dogs: Dog) => {
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
  //jag ska gå igenom alla hundar och spara deras färg i en array, sen ska jag hitta det element som återkommer flest gånger

  return mostFrequent;
};

export default Dog;
