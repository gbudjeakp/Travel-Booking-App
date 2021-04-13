export const shuffleFunction = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const getUpdatedList = (cityList, favoriteList) => {
  const filteredFav = cityList.filter((place) =>
    favoriteList.includes(place.name),
  );
  const unLikesPlaceName = cityList.filter(
    (place) => !favoriteList.includes(place.name),
  );
  const shuffledArray = shuffleFunction(unLikesPlaceName);
  return [...filteredFav, ...shuffledArray];
};
