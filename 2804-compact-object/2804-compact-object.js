var compactObject = function(obj) {
    if (obj == null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    return Object.fromEntries(
        Object.entries(obj)
            .map(([k, v]) => [k, compactObject(v)])
            .filter(([_, v]) => Boolean(v))
    );
};
