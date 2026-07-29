<template>
  <Dialog
    v-model:visible="profileDialogVisible"
    modal
    header="Profil bearbeiten"
    :draggable="false"
    :style="{ width: '24rem' }"
    :content-style="{ overflow: 'visible' }"
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
        <Checkbox v-model="active" input-id="profile-active" binary />
        <label for="profile-active" class="text-sm">Ist aktiv</label>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end gap-2 pt-1">
        <Button
          label="Abbrechen"
          severity="secondary"
          variant="text"
          @click="profileDialogVisible = false"
        />
        <Button label="Speichern" @click="profileDialogVisible = false" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const profileDialogVisible = ref(true)
const name = ref('Max Mustmann')
const role = ref('Administrator')
const active = ref(false)
const roleSelect = ref()

const roles = ['Administrator', 'Projektleiter', 'Gast']

onMounted(() => {
  roleSelect.value?.show()
})
</script>