<template>
  <main class="flex min-h-screen items-center justify-center bg-[#a3a3a3] p-4">
    <section
      v-if="isOpen"
      class="w-full max-w-[384px] overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-[0_18px_24px_rgba(0,0,0,0.28)]"
      aria-label="Termin vereinbaren"
    >
      <header class="flex items-center justify-between px-4 py-4">
        <div class="flex items-center gap-3">
          <Avatar
            label="M"
            shape="circle"
            class="!h-[42px] !w-[42px] !bg-[#e2e8f0] !text-[21px] !text-[#40516b]"
          />
          <div class="flex flex-col">
            <span class="text-sm font-normal leading-[17px] text-[#40516b]">Dr. Mustermann</span>
            <span class="text-[10px] font-light leading-3 text-[#64748b]">Allgemeinmedizin</span>
          </div>
        </div>

        <Button
          icon="pi pi-times"
          severity="secondary"
          text
          rounded
          aria-label="Schließen"
          class="!h-7 !w-[35px] !p-0 !text-[#64748b]"
          @click="isOpen = false"
        />
      </header>

      <Divider class="!my-0" />

      <div class="flex flex-col gap-[7px] px-[17.5px] pb-[17.5px]">
        <nav class="flex h-[42px] items-center gap-[7px] px-[14px]" aria-label="Fortschritt">
          <span class="text-sm text-[#64748b]">Arzt wählen</span>
          <i class="pi pi-chevron-right text-xs text-[#94a3b8]" />
          <span class="rounded-md border border-emerald-500 px-1 text-sm leading-[18px] text-[#64748b]">
            Termin wählen
          </span>
          <i class="pi pi-chevron-right text-xs text-[#94a3b8]" />
          <span class="text-sm text-[#64748b]">Bestätigen</span>
        </nav>

        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-[7px]">
            <label for="date" class="text-sm leading-[21px] text-[#334155]">Datum</label>
            <InputGroup class="h-[34px]">
              <InputGroupAddon class="!border-[#cbd5e1] !bg-white !px-[10.5px] !text-[#94a3b8]">
                <i class="pi pi-calendar text-sm" />
              </InputGroupAddon>
              <DatePicker
                id="date"
                v-model="date"
                date-format="dd.mm.yy"
                placeholder="Datum auswählen"
                class="w-full"
                input-class="!h-[34px] !rounded-l-none !border-l-0 !border-[#cbd5e1] !px-0 !text-sm !text-[#64748b] !shadow-none"
              />
            </InputGroup>
          </div>

          <div class="flex flex-col gap-[7px]">
            <label for="time" class="text-sm leading-[21px] text-[#334155]">Uhrzeit</label>
            <InputGroup class="h-[34px]">
              <InputGroupAddon class="!border-[#cbd5e1] !bg-white !px-[10.5px] !text-[#94a3b8]">
                <i class="pi pi-clock text-sm" />
              </InputGroupAddon>
              <DatePicker
                id="time"
                v-model="time"
                time-only
                hour-format="24"
                placeholder="Uhrzeit auswählen"
                class="w-full"
                input-class="!h-[34px] !rounded-l-none !border-l-0 !border-[#cbd5e1] !px-0 !text-sm !text-[#64748b] !shadow-none"
              />
            </InputGroup>
          </div>

          <Textarea
            v-model="note"
            placeholder="Anmerkung eingeben..."
            rows="4"
            class="!h-[101px] !w-full !resize-none !rounded-md !border-[#cbd5e1] !px-[10.5px] !py-[7px] !text-sm !text-[#64748b] !shadow-none"
          />
        </div>
      </div>

      <footer class="flex items-center justify-between px-[17.5px] pb-[17.5px]">
        <Button
          label="Zurück"
          icon="pi pi-angle-left"
          severity="secondary"
          class="!h-[33px] !bg-[#f1f5f9] !px-[11px] !py-2 !text-sm !font-medium !text-[#40516b] !border-0"
        />
        <Button
          label="Weiter"
          icon="pi pi-angle-right"
          icon-pos="right"
          class="!h-[33px] !border-0 !bg-[#10b981] !px-[11px] !py-2 !text-sm !font-medium !text-white"
        />
      </footer>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Divider from 'primevue/divider'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import Textarea from 'primevue/textarea'

const isOpen = ref(true)
const date = ref(null)
const time = ref(null)
const note = ref('')
</script>