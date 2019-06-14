<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-toolbar class="text-white bg-primary shadow-5">
          <q-toolbar-title>
            My Website
          </q-toolbar-title>
        </q-toolbar>
        <div class="q-pa-md">
              <q-list padding class="menu-list">
                <q-item active exact clickable v-ripple to="/">
                  <q-item-section avatar>
                    <q-icon name="inbox" />
                  </q-item-section>

                  <q-item-section>
                    Biodata
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple exact to="/inputbiodata">
                  <q-item-section avatar>
                    <q-icon name="star" />
                  </q-item-section>

                  <q-item-section>
                    Input Biodata
                  </q-item-section>
                </q-item>
              </q-list>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      drawer: true
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus" scoped>
  .menu-list .q-item
    border-radius 0 32px 32px 0
</style>
