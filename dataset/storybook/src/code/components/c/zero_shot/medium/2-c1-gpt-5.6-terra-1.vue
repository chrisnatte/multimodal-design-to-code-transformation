<template>
  <div class="min-h-screen bg-white px-6 py-8 text-slate-700">
    <div class="w-full max-w-lg">
      <div class="flex items-center border-b border-slate-200">
        <button
          type="button"
          class="flex items-center gap-2 border-b border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-500"
        >
          <i class="pi pi-user-edit text-sm"></i>
          <span>Profil &amp; Konto</span>
        </button>

        <button
          type="button"
          class="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-500"
        >
          <i class="pi pi-shield text-sm"></i>
          <span>Sicherheit &amp; Präferenzen</span>
        </button>
      </div>

      <div class="flex flex-col gap-5 px-4 py-6">
        <div class="relative h-14 w-14">
          <div class="flex h-14 w-14 items-center justify-center rounded-md bg-slate-200 text-2xl text-slate-600">
            P
          </div>
          <span class="absolute -right-6 -top-3 rounded-md bg-emerald-500 px-2 py-1 text-xs font-semibold text-white">
            Edit
          </span>
        </div>

        <div class="flex flex-col gap-2">
          <label for="username" class="text-sm text-slate-700">Benutzername</label>
          <InputText
            id="username"
            v-model="username"
            placeholder="Benutzername eingeben"
            class="w-64"
          />
        </div>

        <Textarea
          v-model="profileInfo"
          placeholder="Informationen über dich...."
          rows="5"
          class="w-64 resize-none"
        />

        <div class="flex items-center gap-3">
          <ToggleSwitch v-model="isPublic" />
          <label for="visibility" class="text-sm text-slate-700">Öffentlich sichtbar</label>
        </div>

        <Button
          label="Speichern"
          severity="success"
          class="w-fit"
          @click="saveProfile"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const username = ref('')
const profileInfo = ref('')
const isPublic = ref(false)

const saveProfile = () => {}
</script>