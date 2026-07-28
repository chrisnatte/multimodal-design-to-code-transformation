<template>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    :draggable="false"
    class="w-[384px] overflow-visible"
    :pt="{
      root: { class: 'rounded-xl border border-slate-200 shadow-xl' },
      header: { class: 'px-[17.5px] py-[17.5px]' },
      title: { class: 'text-[17.5px] font-semibold text-slate-700' },
      headerActions: { class: 'ml-auto' },
      closeButton: { class: 'h-7 w-[35px] text-slate-500' },
      content: { class: 'overflow-visible px-[17.5px] pb-0 pt-0' },
      footer: { class: 'px-[17.5px] pb-[17.5px] pt-0' }
    }"
  >
    <template #header>
      <span>Profil bearbeiten</span>
    </template>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-[7px]">
        <label for="name" class="text-sm text-slate-700">Name</label>
        <InputText
          id="name"
          v-model="name"
          class="h-[34px] w-full text-sm"
          placeholder="Name eingeben"
        />
      </div>

      <div class="flex flex-col gap-[2px]">
        <label for="role" class="text-sm text-slate-700">Rolle</label>
        <Select
          ref="roleSelect"
          id="role"
          v-model="role"
          :options="roles"
          optionLabel="label"
          optionValue="value"
          appendTo="self"
          class="h-[34px] w-full text-sm"
          :pt="{
            root: { class: 'border-emerald-500 ring-0' },
            label: { class: 'py-[7px] pl-[10.5px] text-sm' },
            dropdown: { class: 'w-[35px]' },
            overlay: { class: 'mt-[2px] rounded-md border border-slate-200 shadow-md' },
            listContainer: { class: 'p-[3.5px]' },
            list: { class: 'gap-[2px]' },
            option: { class: 'min-h-[31px] px-[10.5px] py-[7px] text-sm' }
          }"
        />
      </div>

      <div class="flex items-center gap-[7px]">
        <Checkbox v-model="active" inputId="active" binary />
        <label for="active" class="text-sm text-slate-700">Ist aktiv</label>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end gap-[7px] pt-4">
        <Button
          label="Abbrechen"
          text
          severity="secondary"
          class="h-[31px] px-[10.5px] text-sm"
          @click="dialogVisible = false"
        />
        <Button
          label="Speichern"
          class="h-[33px] border-emerald-500 bg-emerald-500 px-[10.5px] text-sm hover:border-emerald-600 hover:bg-emerald-600"
          @click="dialogVisible = false"
        />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
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

const roles = [
  { label: 'Administrator', value: 'Administrator' },
  { label: 'Projektleiter', value: 'Projektleiter' },
  { label: 'Gast', value: 'Gast' }
]

onMounted(async () => {
  await nextTick()
  roleSelect.value?.show()
})
</script>