function seaSick(x) {
    var count = 0;

    x.split('').reduce(function (first, second) {
        first != second ? ++count : count;
        return second;
    });

    if ((count / x.length) * 100 > 20) {
        return "Throw Up";
    }

    return "No Problem";
}