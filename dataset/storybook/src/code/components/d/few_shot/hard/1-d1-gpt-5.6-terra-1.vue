<template>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    header="Profil bearbeiten"
    :style="{ width: '24rem' }"
    :pt="{
      header: 'px-[17.5px] py-[17.5px]',
      content: 'px-[17.5px] pb-[17.5px]',
      footer: 'flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]',
    }"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="profile-name">Name</label>
        <InputText id="profile-name" v-model="name" class="w-full" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="profile-role">Rolle</label>
        <Select
          ref="roleSelect"
          id="profile-role"
          v-model="role"
          :options="roles"
          class="w-full"
          append-to="self"
        />
      </div>

      <div class="flex items-center gap-2">
        <Checkbox v-model="isActive" input-id="is-active" binary />
        <label for="is-active">Ist aktiv</label>
      </div>
    </div>

    <template #footer>
      <Button label="Abbrechen" severity="secondary" text @click="dialogVisible = false" />
      <Button label="Speichern" severity="primary" @click="dialogVisible = false" />
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

const dialogVisible = ref(true)
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