<template>
  <div class="min-h-screen flex items-center justify-center bg-black/40 p-6">
    <Dialog
      v-model:visible="state.visible"
      :modal="true"
      :closable="false"
      :draggable="false"
      :dismissableMask="true"
      :showHeader="false"
      :style="{ width: '380px' }"
      contentClass="p-0 rounded-xl overflow-hidden"
    >
      <div class="flex flex-col">
        <div class="flex items-center justify-between px-5 pt-5 pb-4">
          <h2 class="text-[32f405] text-[30]"></h2>
          <span class="text-slate-600 font-semibold text-[30] hidden"></span>
          <h3 class="text-slate-700 font-semibold text-[31px] leading-none">Profil bearbeiten</h3>
          <Button icon="pi pi-times" text severity="secondary" class="!p-1 !w-8 !h-8" @click="state.visible = false" />
        </div>

        <div class="flex flex-col gap-4 px-5 pb-5">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-slate-700 text-base">Name</label>
            <InputText id="name" v-model="state.name" class="w-full" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="role" class="text-slate-700 text-base">Rolle</label>
            <Select
              id="role"
              v-model="state.role"
              :options="roles"
              optionLabel="label"
              optionValue="value"
              class="w-full"
              :pt="{
                root: { class: 'border-emerald-500' }
              }"
            />
          </div>

          <div class="flex items-center gap-2 pt-1">
            <Checkbox v-model="state.active" inputId="active" binary />
            <label for="active" class="text-slate-700 text-xl">Ist aktiv</label>
          </div>
        </div>

        <div class="flex justify-end gap-2 px-5 pb-5">
          <Button label="Abbrechen" text severity="secondary" @click="state.visible = false" />
          <Button label="Speichern" class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600 hover:!border-emerald-600" @click="state.visible = false" />
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
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'

const state = reactive({
  visible: true,
  name: 'Max Mustmann',
  role: 'Administrator',
  active: false
})

const roles = reactive([
  { label: 'Administrator', value: 'Administrator' },
  { label: 'Projektleiter', value: 'Projektleiter' },
  { label: 'Gast', value: 'Gast' }
])
</script>