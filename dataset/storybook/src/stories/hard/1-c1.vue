<template>
  <div class="min-h-screen bg-black/40 flex items-center justify-center p-6">
    <Dialog
      v-model:visible="state.visible"
      :modal="true"
      :draggable="false"
      :closable="true"
      :dismissableMask="false"
      :showHeader="false"
      class="w-full max-w-[380px]"
      contentClass="rounded-xl"
    >
      <div class="flex flex-col gap-4 p-1">
        <div class="flex items-start justify-between">
          <h2 class="text-3xl font-semibold text-slate-700">Profil bearbeiten</h2>
          <Button
            icon="pi pi-times"
            text
            rounded
            severity="secondary"
            class="!w-8 !h-8"
            @click="state.visible = false"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="name" class="text-slate-600 text-xl">Name</label>
          <InputText
            id="name"
            v-model="state.name"
            class="w-full"
            placeholder="Max Mustmann"
          />
        </div>

        <div class="flex flex-col gap-2 relative">
          <label for="role" class="text-slate-600 text-xl">Rolle</label>
          <Dropdown
            id="role"
            v-model="state.role"
            :options="roles"
            optionLabel="label"
            optionValue="value"
            class="w-full"
            :pt="{
              root: { class: '!border-emerald-500 !shadow-none' },
              item: { class: 'text-slate-700' },
              itemLabel: { class: 'text-lg' }
            }"
          />
        </div>

        <div class="flex items-center gap-2 pt-1">
          <Checkbox
            inputId="active"
            v-model="state.active"
            binary
          />
          <label for="active" class="text-slate-600 text-xl">Ist aktiv</label>
        </div>

        <div class="flex justify-end gap-3 pt-2">
          <Button
            label="Abbrechen"
            text
            severity="secondary"
            class="!text-slate-700"
            @click="state.visible = false"
          />
          <Button
            label="Speichern"
            severity="success"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'

const roles = [
  { label: 'Administrator', value: 'Administrator' },
  { label: 'Projektleiter', value: 'Projektleiter' },
  { label: 'Gast', value: 'Gast' }
]

const state = reactive({
  visible: true,
  name: 'Max Mustmann',
  role: 'Administrator',
  active: false
})
</script>