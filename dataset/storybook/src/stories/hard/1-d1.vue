<template>
  <div class="min-h-screen w-full bg-black/40 flex items-center justify-center p-8">
    <div class="w-[380px] bg-white rounded-xl shadow-2xl">
      <div class="flex items-center justify-between px-5 pt-5 pb-4">
        <h2 class="text-3xl font-semibold text-slate-700">Profil bearbeiten</h2>
        <Button icon="pi pi-times" text rounded severity="secondary" class="!w-8 !h-8 !text-slate-500" />
      </div>

      <div class="flex flex-col gap-4 px-5 pb-5">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm text-slate-700">Name</label>
          <InputText id="name" v-model="form.name" class="w-full" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="role" class="text-sm text-slate-700">Rolle</label>
          <Select
            id="role"
            v-model="form.role"
            :options="roles"
            optionLabel="label"
            optionValue="value"
            class="w-full"
            :pt="{
              option: ({ context }) => ({
                class: context.selected ? 'bg-emerald-100 text-emerald-700' : ''
              })
            }"
          />
        </div>

        <div class="flex items-center gap-2 mt-1">
          <Checkbox inputId="active" v-model="form.active" :binary="true" />
          <label for="active" class="text-sm text-slate-700">Ist aktiv</label>
        </div>
      </div>

      <div class="flex justify-end gap-2 px-5 pb-5">
        <Button label="Abbrechen" text severity="secondary" class="!text-slate-700" />
        <Button label="Speichern" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'

const roles = [
  { label: 'Administrator', value: 'administrator' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' }
]

const form = reactive({
  name: 'Max Mustmann',
  role: 'administrator',
  active: false
})
</script>