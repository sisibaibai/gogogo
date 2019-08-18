import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

Vue.prototype.$http = async options => {
  const p = options.method || get
  const { data: res } = await axios(options)
  if (res.meta.status !== 200)
    return options.error && options.that.$message.error(options.error)
  options.success(res.data)
  options.successMess && options.that.$message.success(options.successMess)
}
