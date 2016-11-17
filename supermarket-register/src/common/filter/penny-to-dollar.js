export default function () {
    return function (amount = 0) {
        return (amount / 100).toFixed(2);
    }
}
