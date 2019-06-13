<template>
    <div class="q-pa-md">
        <q-table
                title="Treats"
                :data="data"
                :columns="columns"
                row-key="name"
        />
    </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'NPM',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'nama', align: 'center', label: 'NAMA', field: 'nama', sortable: true },
        { name: 'prodi', align: 'center', label: 'PRODI', field: 'prodi', sortable: true },
        { name: 'ttl', align: 'center', label: 'TTL', field: 'ttl' },
        { name: 'alamat', align: 'center', label: 'ALAMAT', field: 'alamat' },
        { name: 'email', align: 'center', label: 'EMAIL', field: 'email' },
        { name: 'nohp', align: 'center', label: 'NO HP', field: 'nohp', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'nohportu', align: 'center', label: 'NO HP ORTU', field: 'nohportu', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: '16411033',
          nama: 'Farida',
          prodi: 'Sistem Informasi',
          ttl: '29 Mei 1999',
          alamat: 'Perum Fajar Baru Blok D no 14',
          email: 'frdfarida29@gmail.com',
          nohp: '0895700656651',
          nohportu: '082182392629'
        },
        {
          name: '16411029',
          nama: 'Bella Savira',
          prodi: 'Sistem Informasi',
          ttl: '10 Oktober 1998',
          alamat: 'Sukabumi',
          email: 'bella123@gmail.com',
          nohp: '089598027772',
          nohportu: '082179765557'
        },
        {
          name: '16411039',
          nama: 'Dinda Puspita Dewi',
          prodi: 'Sistem Informasi',
          ttl: '10 Juli 1998',
          alamat: 'Natar',
          email: 'dinda123@gmail.com',
          nohp: '0897563890689',
          nohportu: '0813987589996'
        },
        {
          name: '16411040',
          nama: 'Raihan Faza',
          prodi: 'Sistem Informasi',
          ttl: '18 Juni 1998',
          alamat: 'Sukarame',
          email: 'raihan123@gmail.com',
          nohp: '0897890678900',
          nohportu: '081389900066'
        },
        {
          name: '16411046',
          nama: 'Anggi Raka Siwi',
          prodi: 'Sistem Informasi',
          ttl: '5 Januari 1998',
          alamat: 'Gudang lelang',
          email: 'anggi123@gmail.com',
          nohp: '0897590667689',
          nohportu: '0813988907776'
        },
        {
          name: '16411060',
          nama: 'Zog Breaneslami',
          prodi: 'Sistem Informasi',
          ttl: '10 Desember 1998',
          alamat: 'Natar',
          email: 'zog123@gmail.com',
          nohp: '08966787999536',
          nohportu: '081294663777'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
