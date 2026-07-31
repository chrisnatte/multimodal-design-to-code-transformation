<template>
  <Card>
    <div class="flex flex-col gap-[7px]">
      <span>Anmelden</span>
      <span class="text-sm">Melde dich mit deiner E-Mail-Adresse und Passwort an.</span>
    </div>
    <template #content>
      <InputText placeholder="Placeholder" v-model="_state.n12_1032" />
    </template>
    <template #content>
      <Password v-model="_state.n12_1182" :toggleMask="true" />
    </template>
    <template #content>
      <Checkbox v-model="_state.n12_1376" binary />
    </template>
    <template #footer>
      <Button
        label="Abbrechen"
        severity="secondary"
        :rounded="true"
       />
    </template>
    <template #footer>
      <Button label="Anmelden" :rounded="true" />
    </template>
  </Card>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

const _state = reactive({ n12_1032: null, n12_1182: null, n12_1376: null })
</script>
