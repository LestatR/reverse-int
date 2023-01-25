module.exports = function reverse(n) {
    n = n + "";
    if (n >= 0) {
        return n.split("").reverse().join("");
    } else {
        return (n.split("").reverse().join("")).slice(0, -1);
    }
}