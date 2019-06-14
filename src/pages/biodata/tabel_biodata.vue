<template>
    <div class="q-pa-md">
        <q-table
                title="Biodata"
                :data="data"
                :columns="columns"
                row-key="npm"
        />
    </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          name: 'npm',
          required: true,
          label: 'NPM',
          align: 'left',
          field: 'npm',
          sortable: true
        },
        { name: 'nama', align: 'center', label: 'NAMA', field: 'nama', sortable: true },
        { name: 'alamat', align: 'center', label: 'ALAMAT', field: 'alamat', sortable: true },
        { name: 'tgl_lahir', align: 'center', label: 'TANGGAL LAHIR', field: 'tgl_lahir', sortable: true },
        { name: 'notelp', align: 'center', label: 'NO HP', field: 'notelp', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: []
    }
  },
  methods: {
    loadData () {
      this.loading = true
      this.$store.dispatch({
        type: 'biodata/get'
      })
        .then((response) => {
          if (response.success) {
            this.data = response.message
            this.loading = false
          } else {
            this.$notify({
              color: 'negative',
              message: 'Tidak ada data',
              icon: 'close'
            })
          }
        })
    }
  },
  mounted () {
    this.loadData()
  }
}
</script>

<style scoped>

</style>
