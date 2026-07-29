<template>
  <div class="relative flex h-[768px] w-[768px] flex-col items-center justify-center bg-black py-[280px]">
    <Dialog
      v-model:visible="dialogVisible"
      modal
      append-to="self"
      :closable="false"
      :draggable="false"
      :style="{ width: '384px' }"
      content-class="!p-0"
      :pt="{
        root: '!rounded-xl',
        header: '!hidden',
        footer: '!hidden',
      }"
    >
      <div class="flex flex-col">
        <div class="flex items-center justify-between px-[17.5px] py-[17.5px]">
          <span class="text-[17.5px] font-semibold">Profil bearbeiten</span>
          <div class="flex flex-col gap-[7px]">
            <Button
              icon="pi pi-times"
              severity="secondary"
              text
              aria-label="Dialog schließen"
              @click="dialogVisible = false"
            />
          </div>
        </div>

        <div class="flex flex-col gap-4 px-[17.5px] pb-[17.5px]">
          <div class="flex flex-col gap-[7px]">
            <label for="name" class="text-sm">Name</label>
            <InputText
              id="name"
              v-model="name"
              placeholder="Name eingeben"
              fluid
            />
          </div>

          <div class="flex flex-col gap-[2px]">
            <label for="role" class="text-sm">Rolle</label>
            <Select
              id="role"
              v-model="role"
              :options="roles"
              placeholder="Rolle auswählen"
              fluid
            />
          </div>

          <div class="flex items-center gap-[7px]">
            <Checkbox v-model="isActive" input-id="is-active" binary />
            <label for="is-active" class="text-sm">Ist aktiv</label>
          </div>
        </div>

        <div class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
          <Button
            label="Abbrechen"
            plain
            text
            @click="dialogVisible = false"
          />
          <Button label="Speichern" @click="dialogVisible = false" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const dialogVisible = ref(true)
const name = ref('Max Mustmann')
const role = ref('Administrator')
const isActive = ref(false)

const roles = ref(['Administrator', 'Projektleiter', 'Gast'])
</script>