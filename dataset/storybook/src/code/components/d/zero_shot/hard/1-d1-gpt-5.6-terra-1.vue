<template>
  <div class="min-h-screen">
    <Dialog
      v-model:visible="dialogVisible"
      modal
      :closable="false"
      :dismissableMask="false"
      class="w-[384px] overflow-hidden rounded-xl"
      :pt="{
        mask: { class: 'bg-black/35' },
        root: { class: 'border border-slate-200 shadow-xl' },
        header: { class: 'hidden' },
        content: { class: 'p-0' }
      }"
    >
      <div class="flex flex-col">
        <div class="flex items-center justify-between px-[17.5px] py-[17.5px]">
          <h2 class="text-[17.5px] font-semibold text-slate-700">Profil bearbeiten</h2>
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            aria-label="Dialog schließen"
            class="h-7 w-[35px] p-0"
            @click="dialogVisible = false"
          />
        </div>

        <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px]">
          <div class="flex flex-col gap-[7px]">
            <label for="name" class="text-sm text-slate-700">Name</label>
            <InputText
              id="name"
              v-model="name"
              class="h-[34px] w-full text-sm"
            />
          </div>

          <div class="flex flex-col gap-0.5">
            <div class="flex flex-col gap-[7px]">
              <label for="role" class="text-sm text-slate-700">Rolle</label>
              <Select
                id="role"
                v-model="role"
                :options="roles"
                class="h-[34px] w-full text-sm"
              />
            </div>

            <Listbox
              v-model="role"
              :options="roles"
              class="w-full overflow-hidden rounded-md border border-slate-200 shadow-md"
              :pt="{
                root: { class: 'mt-0.5' },
                listContainer: { class: 'max-h-none overflow-hidden' },
                list: { class: 'p-[3.5px]' },
                option: { class: 'min-h-[31px] px-[10.5px] py-[7px] text-sm' }
              }"
            />
          </div>

          <div class="flex items-center gap-[7px]">
            <Checkbox
              v-model="active"
              inputId="active"
              :binary="true"
            />
            <label for="active" class="text-sm text-slate-700">Ist aktiv</label>
          </div>
        </div>

        <div class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
          <Button
            label="Abbrechen"
            severity="secondary"
            text
            class="h-[31px] px-[10.5px] text-sm"
            @click="dialogVisible = false"
          />
          <Button
            label="Speichern"
            class="h-[33px] px-[10.5px] text-sm"
            @click="dialogVisible = false"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'

const dialogVisible = ref(true)
const name = ref('Max Mustmann')
const role = ref('Administrator')
const active = ref(false)
const roles = ['Administrator', 'Projektleiter', 'Gast']
</script>