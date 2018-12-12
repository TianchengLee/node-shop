class ResBody {
  /**
   * 响应对象构造函数
   * @param {number} status 状态码
   * @param {Object} data 数据
   * @param {string} succMsg 成功响应的消息
   * @param {string} errMsg 错误响应的消息
   */
  constructor(status, data, succMsg, errMsg) {
    this.status = status
    this.data = data
    this.succMsg = succMsg
    this.errMsg = errMsg
  }
}

module.exports = ResBody