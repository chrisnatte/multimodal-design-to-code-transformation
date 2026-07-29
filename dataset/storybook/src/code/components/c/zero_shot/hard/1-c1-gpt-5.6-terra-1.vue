<template>
  <div class="min-h-screen">
    <Dialog
      v-model:visible="visible"
      modal
      :draggable="false"
      :closable="true"
      :dismissableMask="false"
      appendTo="self"
      class="w-[384px]"
      :pt="{
        mask: { class: 'bg-black/40' },
        root: { class: 'rounded-xl shadow-xl' },
        header: { class: 'px-5 pt-5 pb-3' },
        content: { class: 'px-5 pb-5 overflow-visible' },
        headerTitle: { class: 'text-lg font-semibold text-slate-700' },
        closeButton: { class: 'text-slate-500' }
      }"
    >
      <template #header>
        <span>Profil bearbeiten</span>
      </template>

      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm text-slate-700">Name</label>
          <InputText
            id="name"
            v-model="name"
            class="w-full"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="role" class="text-sm text-slate-700">Rolle</label>
          <Select
            id="role"
            ref="roleSelect"
            v-model="role"
            :options="roles"
            class="w-full"
            appendTo="self"
          />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox
            id="active"
            v-model="active"
            binary
          />
          <label for="active" class="text-sm text-slate-700">Ist aktiv</label>
        </div>

        <div class="flex items-center justify-end gap-4 pt-1">
          <Button
            label="Abbrechen"
            text
            severity="secondary"
            @click="visible = false"
          />
          <Button
            label="Speichern"
            severity="success"
            @click="visible = false"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const visible = ref(true)
const name = ref('Max Mustmann')
const role = ref('Administrator')
const active = ref(false)
const roles = ref(['Administrator', 'Projektleiter', 'Gast'])
const roleSelect = ref(null)

onMounted(async () => {
  await nextTick()
  roleSelect.value?.show?.()
})
</script>