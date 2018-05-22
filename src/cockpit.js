'use strict'

import axios from 'axios'

import { baseUrl } from './base'

const token = 'd374483a73f4b8a5bd570053ce585c'
const timeout = 3000

export const cockpit = {
  conn: axios.create({
    baseURL: baseUrl,
    timeout: timeout
  }),
  getCollection: function (collection) {
    return this.conn.get(`api/collections/get/${collection}?token=${token}`)
  },
  listCollections: function () {
    return this.conn.get(`api/collections/listCollections?token=${token}`)
  },
  getRegion: function (region) {
    return this.conn.get(`api/regions/get/${region}?token=${token}`)
  },
  listRegions: function (region) {
    return this.conn.get(`api/regions/listRegions?token=${token}`)
  }
}
