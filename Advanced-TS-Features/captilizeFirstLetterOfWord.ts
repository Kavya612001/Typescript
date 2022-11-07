const pageTitle1 = "some amazing title";
const pageTitle2 = "Another Amazing Title";
const pageTitle3 = "A rEaly weiRD TiTle";
const pageTitle4 = "";

const capitalizeWord = (str: string) => {
    const firstChar = str.charAt(0).toLocaleUpperCase();
    const restOfStr = str.substring(1).toLocaleLowerCase();
    return firstChar+restOfStr;
}

const capitalizeEachWord = (str: string) => ( 
    str.split(" ").map((word) => (
        capitalizeWord(word)
    )
    ).join(" ")
)

console.log(capitalizeEachWord(pageTitle1));
console.log(capitalizeEachWord(pageTitle2));
console.log(capitalizeEachWord(pageTitle3));
console.log(capitalizeEachWord(pageTitle4));