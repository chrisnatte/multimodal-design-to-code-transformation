<template>
  <div class="min-h-screen bg-surface-0 p-6">
    <div class="max-w-[560px] flex flex-col gap-6">
      <div class="flex items-center gap-8 border-b border-surface-200 pb-3">
        <Button
          label="Profil & Konto"
          icon="pi pi-user-edit"
          text
          class="!text-emerald-500 !font-semibold !px-0 !py-0"
        />
        <Button
          label="Sicherheit & Präferenzen"
          icon="pi pi-shield"
          text
          class="!text-slate-500 !font-semibold !px-0 !py-0"
        />
      </div>

      <Card class="!shadow-none !border-0">
        <template #content>
          <div class="flex flex-col gap-6">
            <div class="relative w-fit">
              <Avatar
                :label="state.avatarLabel"
                shape="square"
                size="xlarge"
                class="!bg-slate-200 !text-slate-700"
              />
              <Tag
                value="Edit"
                severity="success"
                rounded
                class="absolute -top-3 left-1/2 -translate-x-1/2"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="username" class="text-slate-700 text-2xl">Benutzername</label>
              <InputText
                id="username"
                v-model="state.username"
                placeholder="Benutzername eingeben"
                class="w-[260px]"
              />
            </div>

            <div class="flex flex-col gap-2">
              <Textarea
                v-model="state.bio"
                placeholder="Informationen über dich...."
                rows="4"
                autoResize
                class="w-[260px]"
              />
            </div>

            <div class="flex items-center gap-3">
              <ToggleSwitch v-model="state.publicVisible" inputId="visible" />
              <label for="visible" class="text-slate-700">Öffentlich sichtbar</label>
            </div>

            <div>
              <Button
                label="Speichern"
                severity="success"
                class="!bg-emerald-400 !border-emerald-400"
              />
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const state = reactive({
  avatarLabel: 'P',
  username: '',
  bio: '',
  publicVisible: false
})
</script>