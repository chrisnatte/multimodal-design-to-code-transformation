<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Profil bearbeiten"
    :draggable="false"
    :style="{ width: '24rem' }"
    :close-button-props="{ 'aria-label': 'Schließen' }"
    :pt="{
      title: 'text-base',
      content: 'pt-1',
      footer: 'pt-3',
    }"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="profile-name" class="text-sm">Name</label>
        <InputText id="profile-name" v-model="name" fluid />
      </div>

      <div class="flex flex-col gap-2">
        <label for="profile-role" class="text-sm">Rolle</label>
        <Select
          ref="roleSelect"
          v-model="role"
          input-id="profile-role"
          :options="roles"
          fluid
          append-to="self"
        />
      </div>

      <div class="flex items-center gap-2">
        <Checkbox v-model="isActive" input-id="profile-active" binary />
        <label for="profile-active" class="text-sm">Ist aktiv</label>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button label="Abbrechen" severity="secondary" variant="text" @click="visible = false" />
        <Button label="Speichern" @click="visible = false" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const visible = ref(true)
const name = ref('Max Mustmann')
const role = ref('Administrator')
const isActive = ref(false)
const roleSelect = ref()

const roles = ref(['Administrator', 'Projektleiter', 'Gast'])

onMounted(async () => {
  await nextTick()
  roleSelect.value?.show()
})
</script>