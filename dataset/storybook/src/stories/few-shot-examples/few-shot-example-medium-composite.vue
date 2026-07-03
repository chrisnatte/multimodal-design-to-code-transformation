<template>
  <Card
    :pt="{
      root: 'w-md p-8 gap-6',
      body: 'flex flex-col gap-4 !p-0',
      content: 'flex flex-col gap-4',
      footer: 'mt-2',
    }"
  >
    <template #header>
      <h1 class="text-lg font-medium">Anmelden</h1>
    </template>
    <template #content>
      <InputText v-model="email" type="email" placeholder="E-Mail-Adresse" input-id="email-input" />
      <Password v-model="password" input-id="password-input" toggle-mask input-class="w-full" />
      <div class="flex items-center justify-between">
        <Badge value="Beliebt" severity="info" />
        <ProgressBar :value="50" :show-value="false" class="!h-1 w-[84px]" />
      </div>
    </template>
    <template #footer>
      <Button label="Jetzt starten" severity="primary" class="w-full" />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Badge from 'primevue/badge'
  import Button from 'primevue/button'
  import Password from 'primevue/password'
  import InputText from 'primevue/inputtext'
  import ProgressBar from 'primevue/progressbar'

  const email = ref('')
  const password = ref('password')
</script>
