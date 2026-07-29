<template>
  <Card
    style="width: 25rem; overflow: hidden"
    :pt="{
      body: 'gap-4',
      caption: 'gap-1',
    }"
  >
    <template #header>
      <img
        alt="header graphic"
        src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800"
        class="w-full h-40 object-cover"
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
        <Checkbox v-model="rememberMe" input-id="remember-me" binary />
        <label for="remember-me">Angemeldet bleiben</label>
      </div>
    </template>
    <template #footer>
      <div class="flex gap-2 mt-1">
        <Button label="Save" severity="secondary" />
        <Button label="Anmelden" icon="pi pi-lock" severity="primary" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Button from 'primevue/button'
  import Password from 'primevue/password'
  import InputText from 'primevue/inputtext'
  import Checkbox from 'primevue/checkbox'

  const email = ref('')
  const password = ref('')
  const rememberMe = ref(false)
</script>