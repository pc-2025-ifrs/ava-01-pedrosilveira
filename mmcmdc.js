function mmc(a,b) {
    if (a === 0 || b === 0) {
        return 0;
    }
    max = Math.max(a,b);
    c = max;
    while(c % a != 0 || c % b != 0) {
        c += max;
    }
    return c;   
}

function mdc(a, b) {
    if (a === 0) return b;
    if (b === 0) return a;
    while (b) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}
