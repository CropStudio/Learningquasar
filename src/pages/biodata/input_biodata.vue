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
                    hint="NPM"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type your NPM']"
            />
            <q-input
                    filled
                    v-model="nama"
                    label="NAMA"
                    hint="NAMA"
            />
            <q-input
                    filled
                    v-model="prodi"
                    label="PRODI"
                    hint="PRODI"
            />
            <q-input
                    filled
                    v-model="ttl"
                    label="TTL"
                    hint="Tempat Tanggal Lahir"
            />
            <q-input
                    filled
                    v-model="alamat"
                    label="Alamat"
                    hint="Alamat"
            />
            <q-input
                    filled
                    v-model="email"
                    label="Email"
                    hint="Email"
            />
            <q-input
                    filled
                    v-model="nohp"
                    label="No Handphone"
                    hint="No Handphone"
            />
            <q-input
                    filled
                    v-model="nohportu"
                    label="No Handphone Orang Tua"
                    hint="No Handphone Orang Tua"
            />

            <q-toggle v-model="accept" label="I accept the license and terms" />

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
      name: null,
      age: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>

</style>
