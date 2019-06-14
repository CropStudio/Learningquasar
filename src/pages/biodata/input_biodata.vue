<template>
    <div class="q-pa-md" style="max-width: 400px">

        <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
        >
            <q-input
                    filled
                    v-model="npm"
                    label="NPM"
                    maxlength="15"
                    hint="NPM"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Silahkan masukkan NPM']"
            />
            <q-input
                    filled
                    v-model="nama"
                    label="NAMA"
                    :rules="[ val => val && val.length > 0 || 'Silahkan masukkan NAMA']"
                    maxlength="30"
                    hint="NAMA"
            />
            <q-input
                    filled
                    v-model="alamat"
                    label="Alamat"
                    hint="Alamat"
                    :rules="[ val => val && val.length > 0 || 'Silahkan masukkan Alamat']"
            />
            <q-input
                    filled
                    v-model="notelp"
                    label="No Handphone"
                    maxlength="15"
                    :rules="[ val => val && val.length > 0 || 'Silahkan masukkan No Handphone']"
                    hint="No Handphone"
            />
            <q-input :rules="[ val => val && val.length > 0 || 'Silahkan masukkan Tanggal Lahyir', 'date']" filled v-model="tgl_lahir" mask="date" label="Tanggal Lahir">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="tgl_lahir" @input="() => $refs.qDateProxy.hide()" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <div>
                <q-btn label="Submit" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>

    </div>
</template>

<script>
export default {
  data () {
    return {
      nama: '',
      npm: '',
      alamat: '',
      notelp: '',
      tgl_lahir: ''
    }
  },

  methods: {
    onSubmit () {
      this.$q.loading.show()
      this.$store.dispatch({
        type: 'biodata/simpan',
        nama: this.nama,
        npm: this.npm,
        alamat: this.alamat,
        notelp: this.notelp,
        tgl_lahir: this.tgl_lahir
      })
        .then((response) => {
          this.$q.loading.hide()
          if (response.success) {
            this.$q.notify({
              message: 'Berhasil simpan',
              color: 'positive',
              icon: 'checkmark'
            })
          } else {
            this.$q.notify({
              message: 'Gagal simpan',
              color: 'negative',
              icon: 'close'
            })
          }
        })
    },

    onReset () {
      this.nama = ''
      this.npm = ''
      this.alamat = ''
      this.no_telp = ''
      this.tgl_lahir = ''
    }
  }
}
</script>

<style scoped>

</style>
