<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :draggable="false"
    class="w-[512px] overflow-hidden rounded-xl border border-[#e2e8f0]"
    :pt="{
      root: { class: 'border border-[#e2e8f0] shadow-none' },
      header: { class: 'p-0' },
      content: { class: 'p-0' }
    }"
  >
    <template #header>
      <div class="flex h-16 w-full items-center justify-between px-[17px]">
        <div class="flex items-center gap-3">
          <div class="flex h-7 w-7 items-center justify-center rounded-full bg-[#e2e8f0] text-sm text-surface-900">
            M
          </div>
          <div class="flex flex-col">
            <span class="text-sm leading-[17px] text-surface-900">Max Mustermann</span>
            <span class="text-[10px] font-light leading-3 text-surface-600">Manager</span>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <span class="rounded-md bg-[#d1fae5] px-[7px] py-[3px] text-[12px] font-bold leading-[15px] text-surface-900">
            Aktiv
          </span>
          <Button
            icon="pi pi-times"
            text
            rounded
            severity="secondary"
            aria-label="Schließen"
            class="h-7 w-[35px]"
            @click="visible = false"
          />
        </div>
      </div>
    </template>

    <div class="px-[17px]">
      <div class="flex h-[46px] border border-[#e2e8f0]">
        <Button
          label="Persönliche Daten"
          text
          class="h-full w-[157px] rounded-none border-b-2 border-[#10b981] !bg-black !px-4 !text-sm !font-bold !text-white"
          @click="selectedTab = 'personal'"
        />
        <Button
          label="Einstellungen"
          text
          class="h-full w-[126px] rounded-none border-x border-[#e2e8f0] !px-4 !text-sm !font-bold !text-surface-900"
          @click="selectedTab = 'settings'"
        />
      </div>

      <div v-if="selectedTab === 'personal'" class="pt-3">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-[7px]">
            <label for="name" class="text-sm leading-[21px] text-surface-900">Name</label>
            <InputText
              id="name"
              v-model="name"
              class="h-[33px] w-full rounded-md !border-[#cbd5e1] !px-[11px] !text-sm"
            />
          </div>

          <div class="flex flex-col gap-[7px]">
            <label for="email" class="text-sm leading-[21px] text-surface-900">E-Mail</label>
            <InputText
              id="email"
              v-model="email"
              class="h-[33px] w-full rounded-md !border-[#cbd5e1] !px-[11px] !text-sm"
            />
          </div>

          <div class="flex flex-col gap-[7px]">
            <label for="role" class="text-sm leading-[21px] text-surface-900">Rolle</label>
            <Select
              id="role"
              v-model="role"
              :options="roles"
              class="h-[33px] w-full rounded-md !border-[#10b981] !text-sm"
            />
          </div>

          <Listbox
            v-model="role"
            :options="roles"
            class="h-[106px] w-full rounded-md border border-[#e2e8f0] p-[3px]"
            :pt="{
              list: { class: 'p-0' },
              option: { class: 'mb-[2px] h-[31px] rounded px-[10px] py-[7px] text-sm last:mb-0' }
            }"
          />

          <div class="flex items-center gap-[7px] pt-0.5">
            <Checkbox v-model="active" input-id="active" binary />
            <label for="active" class="text-sm text-surface-900">Ist aktiv</label>
          </div>
        </div>
      </div>

      <div v-else class="flex h-[369px] items-center justify-center text-sm text-surface-500">
        Einstellungen
      </div>
    </div>

    <div class="flex h-[67px] items-start justify-end gap-[7px] px-[17px] pt-[17px]">
      <Button
        label="Abbrechen"
        severity="secondary"
        class="h-[33px] !border-[#f1f5f9] !bg-[#f1f5f9] !px-[11px] !text-sm !font-medium !text-surface-900"
        @click="visible = false"
      />
      <Button
        label="Speichern"
        class="h-[33px] !border-[#10b981] !bg-[#10b981] !px-[11px] !text-sm !font-medium"
        @click="visible = false"
      />
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'

const visible = ref(true)
const selectedTab = ref('personal')
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const active = ref(true)
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
</script>