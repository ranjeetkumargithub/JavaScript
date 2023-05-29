// object destructuring

const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    trendingSong: "kashmir"
};

// const name = band.bandName;
// const song = band.famousSong;
// console.log(name, song);

const {bandName, famousSong, ...restProperties} = band;
console.log(bandName);
console.log(famousSong);
console.log(restProperties);
