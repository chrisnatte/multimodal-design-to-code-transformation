<template>
  <div class="flex min-h-screen items-center justify-center bg-black p-8">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="false"
      :pt="{
        root: 'w-[384px] bg-white rounded-xl border border-slate-200',
        header: 'flex justify-between items-center p-4',
        content: 'flex flex-col p-0',
        footer: 'flex justify-between p-4',
      }"
    >
      <template #header>
        <div class="flex items-center gap-3">
          <Avatar label="M" size="large" shape="circle" class="bg-slate-200 text-xl" />
          <div class="flex flex-col">
            <span class="text-sm font-normal text-black">Dr. Mustermann</span>
            <span class="text-[10px] font-light text-black">Allgemeinmedizin</span>
          </div>
        </div>
        <Button
          icon="pi pi-times"
          severity="secondary"
          text
          rounded
          aria-label="Close"
          @click="visible = false"
          class="!p-0 h-7 w-7"
        />
      </template>

      <Divider class="!my-0 !border-slate-200" />

      <div class="flex flex-col gap-4 p-4">
        <Breadcrumb :model="breadcrumbItems" class="rounded-md bg-white p-3.5">
          <template #item="{ item }">
            <span
              :class="[
                'text-sm',
                item.active ? 'rounded-md border border-white px-1' : '',
              ]"
            >
              {{ item.label }}
            </span>
          </template>
          <template #separator>
            <i class="pi pi-chevron-right text-xs"></i>
          </template>
        </Breadcrumb>

        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <label class="text-sm">Datum</label>
            <DatePicker v-model="date" placeholder="Datum auswählen" fluid />
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-sm">Uhrzeit</label>
            <DatePicker v-model="time" time-only placeholder="Uhrzeit auswählen" fluid />
          </div>

          <Textarea
            v-model="notes"
            placeholder="Anmerkung eingeben..."
            rows="4"
            fluid
            class="resize-none"
          />
        </div>
      </div>

      <template #footer>
        <Button
          label="Zurück"
          icon="pi pi-angle-left"
          severity="secondary"
          class="border-none bg-slate-50 text-black"
        />
        <Button
          label="Weiter"
          icon-pos="right"
          icon="pi pi-angle-right"
          severity="primary"
          class="border-none bg-emerald-500"
        />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Dialog from 'primevue/dialog'
  import Avatar from 'primevue/avatar'
  import Button from 'primevue/button'
  import Divider from 'primevue/divider'
  import Breadcrumb from 'primevue/breadcrumb'
  import DatePicker from 'primevue/datepicker'
  import Textarea from 'primevue/textarea'

  const visible = ref(true)
  const date = ref()
  const time = ref()
  const notes = ref('')

  const breadcrumbItems = ref([
    { label: 'Arzt wählen' },
    { label: 'Termin wählen', active: true },
    { label: 'Bestätigen' },
  ])
</script>