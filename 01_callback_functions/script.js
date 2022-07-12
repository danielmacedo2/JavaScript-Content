function show(num) {
    console.log("A operação resultou em: " + num)
}

function sum(a, b, callback) {
    var operation = a + b;
    callback(operation)
}

function multiplication(a, b, cb) {
    var op = a * b;
    cb(op)
}

sum(2, 5, show);

multiplication(5, 10, show)