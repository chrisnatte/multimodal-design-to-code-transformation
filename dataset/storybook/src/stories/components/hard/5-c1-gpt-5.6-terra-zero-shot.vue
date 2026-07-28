<template>
  <Dialog
    v-model:visible="visible"
    modal
    :draggable="false"
    :style="{ width: '512px' }"
    class="max-w-[calc(100vw-2rem)]"
    :pt="{
      header: { class: 'px-[18px] pt-[20px] pb-[14px]' },
      content: { class: 'px-[18px] py-0' },
      footer: { class: 'px-[18px] pt-8 pb-[18px]' }
    }"
  >
    <template #header>
      <span class="text-lg font-semibold text-slate-700">Neues Projekt</span>
    </template>

    <div class="border-b border-slate-200">
      <div class="flex items-end gap-1">
        <Button
          label="1 - Allgemein"
          text
          size="small"
          :class="[
            'rounded-none px-4 py-3 font-semibold',
            activeTab === 1
              ? 'border-b-2 border-emerald-500 text-emerald-500'
              : 'border-b-2 border-transparent text-slate-500'
          ]"
          @click="activeTab = 1"
        />
        <Button
          label="2 - Zeitplan"
          text
          size="small"
          :class="[
            'rounded-none px-3 py-3 font-semibold',
            activeTab === 2
              ? 'border-b-2 border-emerald-500 text-emerald-500'
              : 'border-b-2 border-transparent text-slate-500'
          ]"
          @click="activeTab = 2"
        />
        <Button
          label="3 - Einstellungen"
          text
          size="small"
          :class="[
            'rounded-none px-3 py-3 font-semibold',
            activeTab === 3
              ? 'border-b-2 border-emerald-500 text-emerald-500'
              : 'border-b-2 border-transparent text-slate-500'
          ]"
          @click="activeTab = 3"
        />
      </div>
    </div>

    <div class="flex flex-col gap-4 pt-[14px]">
      <div class="flex flex-col gap-2">
        <label for="project-name" class="text-sm text-slate-700">Projektname</label>
        <InputText
          id="project-name"
          v-model="projectName"
          size="small"
          class="w-full !h-[34px]"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="category" class="text-sm text-slate-700">Kategorie</label>
        <Select
          id="category"
          v-model="category"
          :options="categories"
          size="small"
          class="w-full !h-[34px]"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="assignee" class="text-sm text-slate-700">Verantwortlicher</label>
        <Select
          id="assignee"
          v-model="assignee"
          :options="assignees"
          optionLabel="name"
          size="small"
          class="w-full !h-[34px]"
        >
          <template #value="{ value }">
            <div v-if="value" class="flex items-center gap-2">
              <Avatar label="M" shape="circle" class="!h-6 !w-6 !bg-slate-200 !text-xs !text-slate-600" />
              <span>{{ value.name }}</span>
            </div>
          </template>
          <template #option="{ option }">
            <div class="flex items-center gap-2">
              <Avatar label="M" shape="circle" class="!h-6 !w-6 !bg-slate-200 !text-xs !text-slate-600" />
              <span>{{ option.name }}</span>
            </div>
          </template>
        </Select>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button
          label="Abbrechen"
          severity="secondary"
          size="small"
          @click="visible = false"
        />
        <Button
          label="Weiter"
          severity="success"
          size="small"
          @click="activeTab = 2"
        />
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Avatar from 'primevue/avatar'

const visible = ref(true)
const activeTab = ref(1)
const projectName = ref('')
const categories = ref(['Entwicklung', 'Marketing', 'Design'])
const category = ref('Entwicklung')
const assignees = ref([
  { name: 'Max Mustmann' },
  { name: 'Erika Musterfrau' }
])
const assignee = ref(assignees.value[0])
</script>