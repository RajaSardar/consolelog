module.exports = function tiny(string) {
    if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
    return string.replace(console.log, "//console.log");
};