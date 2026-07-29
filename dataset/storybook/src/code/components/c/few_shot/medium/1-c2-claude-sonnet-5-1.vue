<template>
  <Card
    class="w-md overflow-hidden"
    :pt="{
      body: '!p-0',
      caption: 'flex flex-col gap-1 px-6 pt-6',
      content: 'flex flex-col gap-4 px-6 pb-6',
      footer: '!px-6 !pb-6',
    }"
  >
    <template #header>
      <img
        src="https://placehold.co/512x180/0a0e0a/2ea86f?text=+"
        alt="header"
        class="w-full h-[180px] object-cover"
      />
    </template>
    <template #title>Anmelden</template>
    <template #subtitle>Melde dich mit deiner E-Mail-Adresse und Passwort an.</template>
    <template #content>
      <div class="flex flex-col gap-2">
        <label for="email-input" class="text-sm">E-Mail-Adresse</label>
        <InputText v-model="email" type="email" input-id="email-input" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password-input" class="text-sm">Passwort</label>
        <Password v-model="password" input-id="password-input" toggle-mask :feedback="false" input-class="w-full" />
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="stayLoggedIn" input-id="stay-logged-in" binary />
        <label for="stay-logged-in">Angemeldet bleiben</label>
      </div>
    </template>
    <template #footer>
      <div class="flex items-center gap-3">
        <Button label="Save" severity="secondary" />
        <Button label="Anmelden" icon="pi pi-lock" severity="success" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Button from 'primevue/button'
  import InputText from 'primevue/inputtext'
  import Password from 'primevue/password'
  import Checkbox from 'primevue/checkbox'

  const email = ref('')
  const password = ref('')
  const stayLoggedIn = ref(false)
</script>