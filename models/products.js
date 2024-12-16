const db = require('../util/database');

module.exports = class Products {
  constructor(id, pname, price, detail, cid, cname) {
    this.id = id;
    this.pname = pname;
    this.price = price;
    this.detail = detail;
    this.cid = cid;
    this.cname = cname;
  }

  // CREATE

  static add(req, res) {
    console.log(req.body.pname, req.body.price, req.body.cid, req.body.editor1)
    return db.execute(
      'INSERT INTO product (pname, price, cid, detail) VALUE (?, ?, ?, ?)',
      [req.body.pname, req.body.price, req.body.cid, req.body.editor1]
    );

  }

  // READ
  static fetchAll() {
    return db.execute('SELECT P.id, P.pname, P.price, P.detail, P.cid, C.cname FROM product P, category C WHERE P.cid = C.id;');
  }

  static findProductsById(id) {
    return db.execute('SELECT * FROM product where id = ?', [id]);
  }


     // UPDATE
  static updateById(req, res) {
  const id = req.body.id;
  const pname = req.body.pname;
  const price = req.body.price;
  const cid = req.body.cid;
  const detail = req.body.editor1;
  console.log('model:updateById()', id, pname, price, cid, detail);
    return db.execute(
      'UPDATE product SET pname = ?, price = ?, cid = ?, detail = ? WHERE id = ?',[pname, price, cid, detail, id]);
  }

// DELETE
  static deleteById(id) {
    return db.execute(
      'DELETE FROM product WHERE id = ?', [id]);
  }

};