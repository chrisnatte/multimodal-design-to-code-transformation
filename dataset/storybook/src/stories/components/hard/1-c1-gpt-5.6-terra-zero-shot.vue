<template>
  <main class="min-h-screen bg-white">
    <Dialog
      v-model:visible="visible"
      modal
      closable
      header="Profil bearbeiten"
      :draggable="false"
      :pt="{
        root: { class: 'w-[24rem]' },
        header: { class: 'px-5 pt-5 pb-3' },
        content: { class: 'px-5 py-2' },
        footer: { class: 'px-5 pt-3 pb-5' },
        mask: { class: 'bg-black/40' }
      }"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-sm text-surface-700">Name</label>
          <InputText id="name" v-model="name" class="w-full" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="role" class="text-sm text-surface-700">Rolle</label>
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
          <Checkbox id="active" v-model="active" binary />
          <label for="active" class="text-sm text-surface-700">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center justify-end gap-2">
          <Button label="Abbrechen" text severity="secondary" @click="visible = false" />
          <Button label="Speichern" severity="success" @click="visible = false" />
        </div>
      </template>
    </Dialog>
  </main>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const visible = ref(true)
const name = ref('Max Mustmann')
const role = ref('Administrator')
const active = ref(false)
const roles = ref(['Administrator', 'Projektleiter', 'Gast'])
const roleSelect = ref()

onMounted(async () => {
  await nextTick()
  roleSelect.value?.show()
})
</script>