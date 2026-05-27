<template>
  <div class="min-h-screen bg-gray-100 p-6 flex items-start">
    <Card class="w-60 h-[512px] bg-slate-200 border-0 shadow-none rounded-none">
      <template #content>
        <div class="h-full flex flex-col">
          <div class="flex flex-col gap-5">
            <h1 class="text-5xl font-medium text-slate-700 text-center leading-none">Emails</h1>

            <Button
              label="Postfach"
              icon="pi pi-inbox"
              severity="secondary"
              text
              class="!justify-start !w-full !bg-slate-100 !text-slate-600 !px-4 !py-2"
            />

            <Button
              label="Ordner"
              icon="pi pi-folder"
              text
              class="!justify-start !w-full !text-slate-600 !px-2 !py-2"
            />

            <Button
              label="Konto"
              icon="pi pi-user"
              text
              class="!justify-start !w-full !text-slate-600 !px-2 !py-2"
            />
          </div>

          <div class="mt-auto flex flex-col gap-4">
            <Divider class="!my-0" />
            <div class="flex items-center gap-4 px-1">
              <Avatar :label="state.avatarLabel" shape="circle" size="xlarge" class="!bg-slate-500 !text-white" />
              <span class="text-slate-700 text-3xl">{{ state.username }}</span>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Avatar from 'primevue/avatar'

const state = reactive({
  avatarLabel: 'B',
  username: 'Benutzername'
})
</script>