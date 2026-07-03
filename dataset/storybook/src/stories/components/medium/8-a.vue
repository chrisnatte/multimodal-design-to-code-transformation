<template>
  <div class="flex flex-col gap-6 p-6 items-center justify-between">
    <div class="flex flex-col gap-6 items-center">
      <span class="text-2xl">Emails</span>
      <div class="flex flex-col gap-4">
        <Button
          label="Postfach"
          severity="secondary"
          variant="outlined"
         />
        <Button
          label="Ordner"
          severity="secondary"
          variant="outlined"
         />
        <Button
          label="Konto"
          severity="secondary"
          variant="outlined"
         />
      </div>
    </div>
    <div class="flex flex-col items-center">
      <Divider />
      <div class="flex gap-4 items-center">
        <Avatar
          label="B"
          size="large"
          shape="circle"
         />
        <span class="text-base">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
</script>
