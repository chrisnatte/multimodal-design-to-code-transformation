<template>
  <div class="flex h-[512px] w-60 flex-col justify-between bg-slate-200 p-6">
    <div class="flex flex-col gap-6">
      <h1 class="text-center text-2xl">Emails</h1>
      <div class="flex flex-col gap-4">
        <Button
          label="Postfach"
          icon="pi pi-inbox"
          icon-pos="left"
          severity="secondary"
          class="!justify-start"
        />
        <Button
          label="Ordner"
          icon="pi pi-folder"
          icon-pos="left"
          severity="secondary"
          outlined
          class="!justify-start"
        />
        <Button
          label="Konto"
          icon="pi pi-user"
          icon-pos="left"
          severity="secondary"
          outlined
          class="!justify-start"
        />
      </div>
    </div>
    <div class="flex flex-col">
      <Divider type="solid" layout="horizontal" />
      <div class="flex items-center gap-4">
        <Avatar
          label="B"
          size="large"
          shape="circle"
          :pt="{
            root: '!bg-slate-500',
            label: 'text-white',
          }"
        />
        <span class="text-slate-700">Benutzername</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Button from 'primevue/button'
  import Divider from 'primevue/divider'
  import Avatar from 'primevue/avatar'
</script>
