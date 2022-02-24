const db = require('../util/database');

module.exports = class Category {
  constructor(id, cname) {
    this.id = id;
    this.cname = cname;
  }

  // CREATE

  static add(req, res) {

    return db.execute(
      'INSERT INTO category (cname) VALUE (?, ?, ?, ?)',
      [req.body.cname]
    );
  }

  // READ
  static fetchAll() {
    return db.execute('SELECT C.id, C.cname FROM category C');
  }

  static findCategoryById(id) {
    return db.execute('SELECT * FROM category where id = ?', [id]);
  }


     // UPDATE
  static updateById(req, res) {
  const id = req.body.id;
  const cname = req.body.cname;
  console.log('model:updateById()', id, cname);
    return db.execute(
      'UPDATE category SET cname = ? WHERE id = ?', [cname, id]);
  }

// DELETE
  static deleteById(id) {
    return db.execute(
      'DELETE FROM category WHERE id = ?', [id]);
  }

};