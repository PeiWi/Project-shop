const db = require('../util/database');

module.exports = class Cid {
    constructor(id, cname) {
        this.id = id;
        this.cname = cname;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * FROM category');
    }

}