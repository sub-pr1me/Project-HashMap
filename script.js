import murmurhash3_32_gc from "./murmurhash3_gc.js";

let mmh3 = murmurhash3_32_gc;

function HashMap() {

    let capacity = 16;    
    let buckets = [];

    for (let i = 0; i < capacity; i++) {
        buckets.push([]);
    };

    return {
        hash: function(key) {
            let h = mmh3(key, 5);
            return h % capacity;
        },

        set: function(key, value) {
            let b = this.hash(key);
            if (buckets[b].length) {
                for (let entry of buckets[b]) {
                    if (entry.key === key) {
                        entry.value = value;                        
                    } else {
                        buckets[b].push({ key, value });
                    };
                    break;
                };
            } else {
                buckets[b].push({ key, value });
            };
            if (this.length()/capacity > 0.75) {
                this.expand();
            };
        },

        get: function(key) {
            for (let bucket of buckets) {
                for (let entry of bucket) {
                    if (entry.key === key) {
                        return entry.value;
                    };
                };                
            };
            return null;
        },

        has: function(key) {
            if (this.get(key)) {
                return true;
            };
            return false;
        },

        remove: function(key) {
            for (let bucket of buckets) {
                for (let entry of bucket) {
                    if (entry.key === key) {
                        const index = bucket.indexOf(entry);
                        bucket.splice(index, 1);
                        return true;
                    };
                };
            };
            return false;
        },

        length: function() {
            let result = 0;
            for (let bucket of buckets) {
                for (let entry of bucket) {
                    if (entry) {
                        result++;
                    };
                };                
            };
            return result;
        },

        clear: function() {
            buckets = [];
        },

        keys: function() {
            let arr = [];
            for (let bucket of buckets) {
                for (let entry of bucket){
                    arr.push(entry.key);
                };
            };
            return arr;
        },

        values: function() {
            let arr = [];
            for (let bucket of buckets) {
                for (let entry of bucket){
                    arr.push(entry.value);
                };
            };
            return arr;
        },

        entries: function() {
            let arr = [];
            for (let bucket of buckets) {
                for (let entry of bucket){
                    arr.push([entry.key, entry.value]);
                };
            };
            return arr;
        },

        expand: function() {
            let temp = this.entries();
            this.clear();
            capacity = capacity*2;
            for (let i = 0; i < capacity; i++) {
                buckets.push([]);
            };
            for (let entry of temp) {
                this.set(entry[0], entry[1]);
            };               
        }
    };
};
export { HashMap };