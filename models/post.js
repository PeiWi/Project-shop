const db = require('../util/database');

module.exports = class Post {
  constructor(id, pname, price, detail, cid, cname) {
    this.id = id;
    this.pname = pname;
    this.price = price;
    this.detail = detail;
    this.cid = cid;
    this.cname = cname;
  }


  // READ
  static fetchAll() {
    return db.execute('SELECT P.id, P.pname, P.price, P.detail, C.cname FROM product P, category C WHERE P.cid = C.id;');
  }

  static findById(id) {
    return db.execute('SELECT * FROM product where id = ?', [id]);
  }
};