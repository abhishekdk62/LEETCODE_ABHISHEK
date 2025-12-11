var maxNumEdgesToRemove = function(n, edges) {
    class DSU {
        constructor(n) {
            this.parent = Array.from({length: n+1}, (_, i) => i);
            this.rank = Array(n+1).fill(0);
            this.count = n; // number of connected components
        }

        find(x) {
            if (this.parent[x] !== x) {
                this.parent[x] = this.find(this.parent[x]);
            }
            return this.parent[x];
        }

        union(a, b) {
            let pa = this.find(a);
            let pb = this.find(b);
            if (pa === pb) return false; // already connected → redundant

            if (this.rank[pa] < this.rank[pb])
                this.parent[pa] = pb;
            else if (this.rank[pb] < this.rank[pa])
                this.parent[pb] = pa;
            else {
                this.parent[pb] = pa;
                this.rank[pa]++;
            }

            this.count--;
            return true;
        }
    }

    // DSU for Alice and Bob
    let alice = new DSU(n);
    let bob = new DSU(n);

    let removed = 0;

    // Step 1: Use all type 3 edges first (shared)
    for (let [type, u, v] of edges) {
        if (type === 3) {
            let mergedA = alice.union(u, v);
            let mergedB = bob.union(u, v);
            if (!mergedA && !mergedB) removed++; // redundant
        }
    }

    // Step 2: Type 1 for Alice
    for (let [type, u, v] of edges) {
        if (type === 1) {
            if (!alice.union(u, v)) removed++;
        }
    }

    // Step 3: Type 2 for Bob
    for (let [type, u, v] of edges) {
        if (type === 2) {
            if (!bob.union(u, v)) removed++;
        }
    }

    // Check if both graphs are fully traversable
    if (alice.count !== 1 || bob.count !== 1) return -1;

    return removed;
};
