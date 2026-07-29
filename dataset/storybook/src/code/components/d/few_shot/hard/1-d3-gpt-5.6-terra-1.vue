<template>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    :draggable="false"
    :style="{ width: '384px' }"
    :pt="{
      root: 'overflow-visible rounded-xl',
      header: 'px-[17.5px] py-[17.5px]',
      title: 'text-[17.5px] font-semibold',
      headerActions: 'gap-0',
      closeButton: '!h-7 !w-[35px]',
      content: 'overflow-visible px-[17.5px] pb-[17.5px]',
      footer: 'flex justify-end gap-[7px] px-[17.5px] pb-[17.5px] pt-0',
    }"
    @hide="dialogVisible = false"
  >
    <template #header>
      <span>Profil bearbeiten</span>
    </template>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-[7px]">
        <label for="profile-name" class="text-sm">Name</label>
        <InputText
          id="profile-name"
          v-model="name"
          fluid
          class="h-[33px] text-sm"
        />
      </div>

      <div class="flex flex-col gap-[7px]">
        <label for="profile-role" class="text-sm">Rolle</label>
        <Select
          ref="roleSelect"
          v-model="role"
          input-id="profile-role"
          :options="roles"
          fluid
          :pt="{
            root: 'h-[33px] !border-primary',
            label: 'flex items-center py-[7px] px-[10.5px] text-sm',
            dropdown: 'w-[35px]',
            overlay: 'mt-0',
            listContainer: 'p-[3.5px]',
            option: 'h-[31px] px-[10.5px] py-[7px] text-sm',
          }"
        />
      </div>

      <div class="flex items-center gap-[7px]">
        <Checkbox v-model="active" input-id="profile-active" binary />
        <label for="profile-active" class="text-sm">Ist aktiv</label>
      </div>
    </div>

    <template #footer>
      <Button
        label="Abbrechen"
        severity="secondary"
        text
        @click="dialogVisible = false"
      />
      <Button label="Speichern" @click="dialogVisible = false" />
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

const dialogVisible = ref(true)
const name = ref('Max Mustmann')
const role = ref('Administrator')
const active = ref(false)
const roleSelect = ref()

const roles = ref(['Administrator', 'Projektleiter', 'Gast'])

onMounted(() => {
  roleSelect.value?.show()
})
</script>