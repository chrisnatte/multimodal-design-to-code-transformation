<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Profil bearbeiten"
    :style="{ width: '24rem' }"
    :pt="{
      header: 'px-5 pt-5 pb-3',
      title: 'text-base font-semibold',
      content: 'px-5 pb-3',
      footer: 'px-5 pt-2 pb-5',
      closeButton: 'h-7 w-7'
    }"
  >
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="profile-name" class="text-sm">Name</label>
        <InputText id="profile-name" v-model="name" class="w-full" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="profile-role" class="text-sm">Rolle</label>
        <Select
          ref="roleSelect"
          v-model="role"
          input-id="profile-role"
          :options="roles"
          class="w-full"
        />
      </div>

      <div class="flex items-center gap-2">
        <Checkbox v-model="active" input-id="active-profile" binary />
        <label for="active-profile" class="text-sm">Ist aktiv</label>
      </div>
    </div>

    <template #footer>
      <div class="flex w-full justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" text />
        <Button label="Speichern" />
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
const active = ref(false)
const roles = ref(['Administrator', 'Projektleiter', 'Gast'])
const roleSelect = ref<InstanceType<typeof Select> | null>(null)

onMounted(async () => {
  await nextTick()
  roleSelect.value?.show()
})
</script>