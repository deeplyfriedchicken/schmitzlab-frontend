'use strict'

import axios from 'axios'

import { baseUrl, token } from './base'

const timeout = 3000

export const buttered = {
  conn: axios.create({
    baseURL: baseUrl,
    timeout: timeout
  }),
  getFilteredCollection: function (collection, param, value) {
    return this.conn.get(
      `content/?keys=${collection}[${param}=${value}]&auth_token=${token}`)
  }
}
