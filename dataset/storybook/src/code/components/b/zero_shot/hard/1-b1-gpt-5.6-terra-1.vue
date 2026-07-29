<template>
  <div class="flex h-[768px] w-[768px] flex-col gap-2.5 bg-white">
    <div class="flex h-[768px] w-full flex-col items-center justify-center bg-black py-[280px]">
      <div
        v-if="dialogVisible"
        class="flex w-[384px] flex-col rounded-xl border border-[#e2e8f0] bg-white"
      >
        <div class="flex items-center justify-between px-[17.5px] py-[17.5px]">
          <span class="text-[17.5px] font-semibold">Profil bearbeiten</span>
          <div class="flex flex-col gap-[7px]">
            <Button
              icon="pi pi-times"
              severity="secondary"
              text
              aria-label="Dialog schließen"
              class="h-7 w-[35px] p-0"
              @click="dialogVisible = false"
            />
          </div>
        </div>

        <div class="flex flex-col items-center gap-4 px-[17.5px] pb-[17.5px]">
          <div class="flex w-full flex-col">
            <label for="name" class="mb-[7px] text-sm">Name</label>
            <InputText
              id="name"
              v-model="name"
              class="h-[33px] w-full rounded-md px-[10.5px] py-[7px] text-sm"
            />
          </div>

          <div class="relative flex h-[169px] w-full flex-col gap-[2px]">
            <label for="role" class="mb-[5px] text-sm">Rolle</label>
            <Select
              ref="roleSelect"
              input-id="role"
              v-model="selectedRole"
              :options="roles"
              option-label="label"
              class="h-[33px] w-full text-sm"
              append-to="self"
            />
          </div>

          <div class="flex items-center gap-[7px]">
            <Checkbox v-model="isActive" input-id="active" binary />
            <label for="active" class="text-sm">Ist aktiv</label>
          </div>
        </div>

        <div class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
          <Button
            label="Abbrechen"
            severity="secondary"
            text
            class="h-[31px] text-sm"
            @click="dialogVisible = false"
          />
          <Button
            label="Speichern"
            class="h-[33px] text-sm"
            @click="dialogVisible = false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const dialogVisible = ref(true)
const name = ref('Max Mustmann')
const selectedRole = ref({ label: 'Administrator' })
const isActive = ref(false)
const roleSelect = ref()

const roles = ref([
  { label: 'Administrator' },
  { label: 'Projektleiter' },
  { label: 'Gast' }
])

onMounted(() => {
  roleSelect.value?.show()
})
</script>