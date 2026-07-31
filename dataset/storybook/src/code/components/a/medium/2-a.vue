<template>
  <Tabs value="0">
    <TabList>
      <Tab value="0">Profil & Konto</Tab>
      <Tab value="1">Sicherheit & Präferenzen</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="0">
        <Password
          v-model="_state.n12_1928"
          value="********"
          :toggleMask="true"
         />
        <div class="flex gap-3 items-center">
          <ToggleSwitch v-model="_state.n12_1629" />
          <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
        </div>
        <Slider v-model="_state.n12_1633" />
        <div class="flex flex-col gap-3">
          <span class="text-sm">Sicherheitsstufe</span>
          <div class="flex gap-5">
            <RadioButton v-model="_state.n12_1725" value="option1" />
            <RadioButton v-model="_state.n12_1729" value="option1" />
            <RadioButton v-model="_state.n12_1733" value="option1" />
          </div>
        </div>
        <Button label="Speichern" :disabled="true" />
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Password from 'primevue/password'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import ToggleSwitch from 'primevue/toggleswitch'

const _state = reactive({ n12_1928: null, n12_1629: null, n12_1633: null, n12_1725: null, n12_1729: null, n12_1733: null })
</script>
