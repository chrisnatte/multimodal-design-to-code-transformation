<template>
  <Dialog
    v-model:visible="isVisible"
    modal
    closable
    :draggable="false"
    :style="{ width: '24rem' }"
    :pt="{
      header: { class: 'border-b border-surface-200 px-4 py-4' },
      content: { class: 'px-4 pt-4 pb-5' }
    }"
  >
    <template #header>
      <div class="flex items-center gap-3">
        <Avatar label="M" shape="circle" class="bg-surface-200 text-surface-700" />
        <div class="flex flex-col">
          <span class="text-sm font-medium text-surface-700">Dr. Mustermann</span>
          <span class="text-[10px] leading-3 text-surface-500">Allgemeinmedizin</span>
        </div>
      </div>
    </template>

    <div class="flex flex-col gap-5">
      <Breadcrumb
        :model="steps"
        class="border-0 bg-transparent p-0"
        :pt="{
          list: { class: 'gap-1' },
          separator: { class: 'mx-1 text-surface-400' }
        }"
      >
        <template #item="{ item, props }">
          <a
            v-bind="props.action"
            :class="[
              'text-sm no-underline',
              item.active
                ? 'rounded-lg border border-emerald-500 px-1.5 py-0.5 text-surface-600'
                : 'text-surface-500'
            ]"
          >
            {{ item.label }}
          </a>
        </template>
        <template #separator>
          <i class="pi pi-angle-right text-xs text-surface-400"></i>
        </template>
      </Breadcrumb>

      <div class="flex flex-col gap-2">
        <label for="date" class="text-sm font-medium text-surface-700">Datum</label>
        <IconField>
          <InputIcon class="pi pi-calendar text-sm text-surface-400" />
          <InputText
            id="date"
            v-model="date"
            placeholder="Datum auswählen"
            class="w-full"
          />
        </IconField>
      </div>

      <div class="flex flex-col gap-2">
        <label for="time" class="text-sm font-medium text-surface-700">Uhrzeit</label>
        <IconField>
          <InputIcon class="pi pi-clock text-sm text-surface-400" />
          <InputText
            id="time"
            v-model="time"
            placeholder="Uhrzeit auswählen"
            class="w-full"
          />
        </IconField>
      </div>

      <Textarea
        v-model="note"
        placeholder="Anmerkung eingeben..."
        rows="4"
        class="w-full resize-none"
      />

      <div class="flex items-center justify-between pt-0.5">
        <Button
          label="Zurück"
          icon="pi pi-angle-left"
          iconPos="left"
          size="small"
          severity="secondary"
          @click="goBack"
        />
        <Button
          label="Weiter"
          icon="pi pi-angle-right"
          iconPos="right"
          size="small"
          severity="success"
          @click="goNext"
        />
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Avatar from 'primevue/avatar'
import Breadcrumb from 'primevue/breadcrumb'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Button from 'primevue/button'

const isVisible = ref(true)
const date = ref('')
const time = ref('')
const note = ref('')

const steps = ref([
  { label: 'Arzt wählen' },
  { label: 'Termin wählen', active: true },
  { label: 'Bestätigen' }
])

const goBack = () => {}
const goNext = () => {}
</script>