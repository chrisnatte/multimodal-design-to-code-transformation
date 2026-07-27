<template>
  <div class="flex h-[768px] w-full flex-col items-center justify-center bg-black py-[280px]">
    <div class="flex w-[384px] flex-col rounded-xl border border-slate-200 bg-white">
      <div class="flex items-center justify-between px-[17.5px] py-[17.5px]">
        <span class="text-[17.5px] font-semibold leading-[21px] text-slate-900">Profil bearbeiten</span>
        <Button
          icon="pi pi-times"
          severity="secondary"
          text
          aria-label="Dialog schließen"
          class="!h-7 !w-[35px]"
        />
      </div>

      <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px]">
        <div class="flex flex-col gap-[7px]">
          <label for="name" class="text-sm leading-[21px] text-slate-700">Name</label>
          <InputText
            id="name"
            v-model="name"
            class="w-full !rounded-md !border-slate-300 !px-[10.5px] !py-[7px] !text-sm"
          />
        </div>

        <div class="flex flex-col gap-0.5">
          <div class="flex flex-col gap-[7px]">
            <label for="role" class="text-sm leading-[21px] text-slate-700">Rolle</label>
            <Select
              id="role"
              v-model="role"
              :options="roles"
              option-label="label"
              option-value="value"
              class="w-full !rounded-md !border-emerald-500 !text-sm"
            />
          </div>

          <div class="rounded-md border border-slate-200 bg-white p-[3.5px]">
            <Listbox
              v-model="role"
              :options="roles"
              option-label="label"
              option-value="value"
              class="w-full border-0 !text-sm"
              list-class="!p-0 !gap-0.5"
            >
              <template #option="{ option, selected }">
                <div
                  class="flex h-[31px] w-full items-center rounded px-[10.5px]"
                  :class="selected ? 'bg-emerald-50' : ''"
                >
                  <span>{{ option.label }}</span>
                </div>
              </template>
            </Listbox>
          </div>
        </div>

        <div class="flex items-center gap-[7px]">
          <Checkbox v-model="active" input-id="active" binary />
          <label for="active" class="text-sm leading-[17px] text-slate-700">Ist aktiv</label>
        </div>
      </div>

      <div class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
        <Button label="Abbrechen" severity="secondary" text />
        <Button label="Speichern" class="!border-emerald-500 !bg-emerald-500 hover:!border-emerald-600 hover:!bg-emerald-600" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'

const name = ref('Max Mustmann')
const role = ref('administrator')
const active = ref(false)

const roles = ref([
  { label: 'Administrator', value: 'administrator' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' }
])
</script>