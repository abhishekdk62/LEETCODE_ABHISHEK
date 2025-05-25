/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let resolvedCount = 0;

        functions.forEach((fn, i) => {
            try {
                fn().then(res => {
                    results[i] = res;
                    resolvedCount++;
                    if (resolvedCount === functions.length) {
                        resolve(results);
                    }
                }).catch(reject); // reject immediately on error
            } catch (err) {
                reject(err); // in case the function itself throws
            }
        });

        if (functions.length === 0) {
            resolve([]);
        }
    });
};
