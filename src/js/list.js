require('../css/list.css');

var P = {},
    class2type = {},
    toString = class2type.toString;

function ptype(obj) {
    return obj == null ? String(obj) : class2type[toString.call(obj)] || "object"
}

function isWindow(obj) {
    return obj != null && obj == obj.window
}

function likeArray(obj) {
    var length = !!obj && 'length' in obj && obj.length,
        type = ptype(obj)

    return 'function' != type && !isWindow(obj) && (
        'array' == type || length === 0 ||
        (typeof length == 'number' && length > 0 && (length - 1) in obj)
    )
}

function flatten(array) {
    return array.length > 0 ? $.fn.concat.apply([], array) : array
}

P.map = function(elements, callback) {
    var value, values = [],
        i, key
    if (likeArray(elements))
        for (i = 0; i < elements.length; i++) {
            value = callback(elements[i], i)
            if (value != null) values.push(value)
        }
    else
        for (key in elements) {
            value = callback(elements[key], key)
            if (value != null) values.push(value)
        }
    return flatten(values)
}


var multiplyMap = P.map([1, 2, 3, 4, 5], function(item, index) {
    if (item > 1) {
        return item * item;
    }
});

console.log(multiplyMap)