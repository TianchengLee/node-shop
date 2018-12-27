const sqlExcute = require('../db')
module.exports = {
  getBanners(req, res) {
    sqlExcute('SELECT id, img, ctime FROM banner WHERE del_state = 0 LIMIT 0, 5')
      .then(result => {
        res.sendSucc('获取轮播图列表成功!', result)
      })
      .catch(e => {
        res.sendErr(500, e.message)
      })
  }
}