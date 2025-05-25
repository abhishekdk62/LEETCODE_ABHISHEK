var TimeLimitedCache = function() {
    this.cache = new Map(); // key -> { value, expiryTime }
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    const hasValid = this.cache.has(key) && this.cache.get(key).expiry > now;
    this.cache.set(key, {
        value: value,
        expiry: now + duration
    });
    return hasValid;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();
    const entry = this.cache.get(key);
    if (entry && entry.expiry > now) {
        return entry.value;
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let count = 0;
    for (const [key, { expiry }] of this.cache.entries()) {
        if (expiry > now) {
            count++;
        }
    }
    return count;
};
