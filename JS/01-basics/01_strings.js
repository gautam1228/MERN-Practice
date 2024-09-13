const originalString = new String("Thisisaweirdstring-isntit");

const subString = originalString.substring(0,4); // can't give negative values in the range

const slicedString = originalString.slice(-8,4); // can give negative values in the range


let url = "https://gautamcodes.dev/gautam%20singh"

console.log(url.replace('%20', '-'));
