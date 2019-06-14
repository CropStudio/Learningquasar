/*
export function someAction (context) {
}
*/
import { axiosInstance } from 'boot/axios'
const qs = require('qs')
export function get ({ commit }, payload) {
  return new Promise((resolve, reject) => {
    axiosInstance.get('databiodata')
      .then(({ data }) => {
        resolve(data)
      })
      .catch(() => {
        reject()
      })
  })
}
export function simpan ({ commit }, payload) {
  return new Promise((resolve, reject) => {
    axiosInstance.post('inputbiodata', qs.stringify({
      nama: payload.nama,
      npm: payload.npm,
      alamat: payload.alamat,
      notelp: payload.notelp,
      tgl_lahir: payload.tgl_lahir
    }))
      .then(({ data }) => {
        resolve(data)
      })
      .catch(() => {
        reject()
      })
  })
}
export function hapus ({ commit }, payload) {
  return new Promise((resolve, reject) => {
    axiosInstance.delete('databiodata')
      .then(({ data }) => {
        resolve(data)
      })
      .catch(() => {
        reject()
      })
  })
}
