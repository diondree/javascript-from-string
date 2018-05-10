"use strict"

function convert(jsString) {
    return new Promise((resolve, reject) => {
        if (jsString === '' || jsString === null) {
            reject("No string supplied");
        }
        resolve(Function(`"use strict";return (${jsString})`)());    
    })

}

module.exports = {
    convert
}