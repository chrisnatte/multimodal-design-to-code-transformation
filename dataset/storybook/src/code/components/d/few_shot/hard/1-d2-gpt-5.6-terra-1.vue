<template>
  <div class="min-h-screen">
    <Dialog
      v-model:visible="visible"
      modal
      header="Profil bearbeiten"
      :draggable="false"
      :closable="true"
      :close-button-props="{
        severity: 'secondary',
        variant: 'text',
        'aria-label': 'Schließen',
      }"
      :pt="{
        root: 'w-[384px] overflow-visible rounded-xl border border-slate-200 shadow-xl',
        header: 'px-[17.5px] py-[17.5px]',
        title: 'text-[17.5px] font-semibold text-slate-700',
        headerActions: 'gap-0',
        content: 'overflow-visible px-[17.5px] pb-[17.5px] pt-0',
        footer: 'flex justify-end gap-[7px] px-[17.5px] pb-[17.5px] pt-0',
        mask: 'bg-black/35',
      }"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="profile-name" class="text-sm text-slate-700">Name</label>
          <InputText id="profile-name" v-model="name" fluid />
        </div>

        <div class="relative flex flex-col gap-2 pb-[92px]">
          <label for="profile-role" class="text-sm text-slate-700">Rolle</label>
          <Select
            ref="roleSelect"
            v-model="role"
            input-id="profile-role"
            :options="roles"
            fluid
            append-to="self"
            :pt="{
              root: 'border-emerald-500',
              overlay: 'border border-slate-200 shadow-md',
              list: 'gap-0 p-[3.5px]',
              option: 'px-[10.5px] py-[7px]',
            }"
          />
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="active" input-id="active" binary />
          <label for="active" class="text-sm text-slate-700">Ist aktiv</label>
        </div>
      </div>

      <template #footer>
        <Button
          label="Abbrechen"
          severity="secondary"
          variant="text"
          @click="visible = false"
        />
        <Button
          label="Speichern"
          class="!border-emerald-500 !bg-emerald-500 hover:!border-emerald-600 hover:!bg-emerald-600"
          @click="visible = false"
        />
      </template>
    </Dialog>
  </div>
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
const roleSelect = ref<InstanceType<typeof Select> | null>(null)

const roles = ref(['Administrator', 'Projektleiter', 'Gast'])

onMounted(async () => {
  await nextTick()
  roleSelect.value?.show?.()
})
</script>