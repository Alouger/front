import md5 from 'md5'
import { ref } from 'vue'

export const getSecret = () => {
  const codetype = Number.parseInt(Date.now() / Math.pow(10, 3))
  const icode = md5(`${codetype}LGD_Sunday-1991-12-30`)
  return { codetype, icode }
}
