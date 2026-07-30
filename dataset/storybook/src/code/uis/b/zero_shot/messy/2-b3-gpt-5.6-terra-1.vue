<template>
  <div class="flex min-h-screen items-center justify-center bg-black p-6 font-sans">
    <section class="flex h-[565px] w-[512px] flex-col overflow-hidden rounded-xl border border-[#e2e8f0] bg-white">
      <header class="flex h-16 shrink-0 items-center justify-between px-[17px]">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm !font-normal !text-slate-900" />
          <div class="flex flex-col">
            <span class="text-sm leading-[17px] text-slate-900">Max Mustermann</span>
            <span class="text-[10px] font-light leading-3 text-slate-700">Manager</span>
          </div>
        </div>

        <div class="flex items-center gap-[15px]">
          <Tag value="Aktiv" class="!rounded-md !bg-[#d1fae5] !px-[7px] !py-[3px] !text-[12px] !font-bold !text-slate-900" />
          <Button
            icon="pi pi-times"
            text
            rounded
            aria-label="Schließen"
            class="!h-7 !w-[35px] !text-slate-700"
          />
        </div>
      </header>

      <main class="flex flex-1 flex-col px-[17px]">
        <div class="flex h-[46px] shrink-0 border border-[#e2e8f0]">
          <Button
            label="Persönliche Daten"
            text
            class="!h-full !w-[157px] !rounded-none !border-x-0 !border-t-0 !border-b-2 !border-[#10b981] !bg-black !px-[15px] !text-sm !font-bold !text-white"
          />
          <Button
            label="Einstellungen"
            text
            class="!h-full !w-[126px] !rounded-none !border-x-0 !border-t-0 !border-b !border-[#e2e8f0] !bg-black !px-[15px] !text-sm !font-bold !text-slate-900"
          />
          <div class="flex-1 border-b border-[#e2e8f0] bg-black"></div>
        </div>

        <div class="flex flex-1 flex-col gap-4 px-1 pt-3">
          <div class="flex flex-col gap-[7px]">
            <label for="name" class="text-sm leading-[21px] text-slate-900">Name</label>
            <InputText
              id="name"
              v-model="name"
              class="!h-[33px] !w-full !rounded-md !border-[#cbd5e1] !px-[11px] !text-sm"
            />
          </div>

          <div class="flex flex-col gap-[7px]">
            <label for="email" class="text-sm leading-[21px] text-slate-900">E-Mail</label>
            <InputText
              id="email"
              v-model="email"
              class="!h-[33px] !w-full !rounded-md !border-[#cbd5e1] !px-[11px] !text-sm"
            />
          </div>

          <div class="flex flex-col gap-[7px]">
            <label for="role" class="text-sm leading-[21px] text-slate-900">Rolle</label>
            <Select
              id="role"
              v-model="role"
              :options="roles"
              option-label="label"
              option-value="value"
              class="!h-[33px] !w-full !rounded-md !border-[#10b981] !text-sm"
            />
            <Listbox
              v-model="role"
              :options="roles"
              option-label="label"
              option-value="value"
              class="!h-[106px] !w-full !rounded-md !border-[#e2e8f0] !p-[3px] !text-sm"
              list-class="!p-0"
            />
          </div>

          <div class="flex items-center gap-[7px]">
            <Checkbox v-model="isActive" input-id="active" binary class="!h-[18px] !w-[18px]" />
            <label for="active" class="text-sm leading-[17px] text-slate-900">Ist aktiv</label>
          </div>
        </div>
      </main>

      <footer class="flex h-[50px] shrink-0 items-start justify-end gap-[7px] px-[17px]">
        <Button
          label="Abbrechen"
          severity="secondary"
          class="!h-[33px] !rounded-md !border-[#f1f5f9] !bg-[#f1f5f9] !px-[11px] !text-sm !font-medium !text-slate-900"
        />
        <Button
          label="Speichern"
          class="!h-[33px] !rounded-md !border-[#10b981] !bg-[#10b981] !px-[11px] !text-sm !font-medium !text-white"
        />
      </footer>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'
import Tag from 'primevue/tag'

const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const isActive = ref(true)

const roles = [
  { label: 'Manager', value: 'Manager' },
  { label: 'Mitarbeiter', value: 'Mitarbeiter' },
  { label: 'Kunde', value: 'Kunde' }
]
</script>