const db = require('../util/database');

module.exports = class Item {
  constructor(id, pname, price, detail, cname) {
    this.id = id;
    this.pname = pname;
    this.price = price;
    this.detail = detail;
    this.cname = cname;
  }

  // READ
  static fetchAll() {
    return db.execute('SELECT P.id, P.pname, P.price, P.detail, C.cname FROM product P, category C WHERE P.cid = C.id;');
  }

  }