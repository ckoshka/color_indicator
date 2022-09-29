import { Indicator } from "../indicator.ts";


const range = [-15, -5, 0, 0.3, 0.5, 0.04, 0.6, 1.1, 2.5];
const colorise = Indicator({
    colors: ["green", "blue", "magenta"],
    range
});

range.forEach(int => {
    const hexcode = colorise(int);
    console.log("%c" + int, `color: ${hexcode}`);
})