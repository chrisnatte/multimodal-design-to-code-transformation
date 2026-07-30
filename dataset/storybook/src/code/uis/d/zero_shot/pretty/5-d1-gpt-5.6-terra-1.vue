<template>
  <main class="min-h-screen bg-white px-6 py-10 text-slate-800">
    <div class="mx-auto w-full max-w-[833px]">
      <header class="mb-12 flex items-center gap-4">
        <Button
          icon="pi pi-times-circle"
          text
          rounded
          severity="secondary"
          class="!h-12 !w-12 !bg-slate-100 !text-slate-600"
          aria-label="Schließen"
        />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold leading-none">Termin buchen</h1>
          <p class="text-base text-slate-500">Buche einen Termin für dich bei uns.</p>
        </div>
      </header>

      <section class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="rounded-xl bg-slate-100 p-[18px]">
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium">Datum wählen</h2>
            <DatePicker
              v-model="selectedDate"
              inline
              show-week
              class="w-fit"
            />
          </div>
        </div>

        <div class="rounded-xl bg-slate-100 p-[18px]">
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium">Zeitslot wählen</h2>

            <div class="flex flex-col gap-2">
              <div v-for="slot in timeSlots" :key="slot" class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" :input-id="slot" name="time" :value="slot" />
                <label :for="slot" class="text-sm">{{ slot }}</label>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label for="service" class="text-sm">Dienstleistung</label>
              <Select
                ref="serviceSelect"
                v-model="selectedService"
                input-id="service"
                :options="services"
                class="w-full"
              />
            </div>
          </div>
        </div>

        <div class="rounded-xl bg-slate-100 p-[18px] md:col-span-2">
          <div class="flex flex-col gap-3">
            <h2 class="text-lg font-medium">Deine Daten</h2>

            <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div class="flex flex-col gap-2">
                <label for="name" class="text-sm">Name</label>
                <InputText id="name" v-model="name" class="w-full" />
              </div>
              <div class="flex flex-col gap-2">
                <label for="email" class="text-sm">E-Mail</label>
                <InputText id="email" v-model="email" class="w-full" />
              </div>
            </div>

            <div class="flex flex-col gap-3">
              <label for="notes" class="text-sm">Anmerkungen</label>
              <Textarea
                id="notes"
                v-model="notes"
                placeholder="Optionale Nachricht..."
                rows="4"
                class="w-full resize-none"
              />
            </div>

            <div class="flex items-center gap-3 px-1">
              <ToggleSwitch v-model="sendReminder" input-id="reminder" />
              <label for="reminder" class="flex flex-col">
                <span class="text-sm font-semibold">Erinnerung senden</span>
                <span class="text-[10px] font-light text-slate-500">
                  Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>

      <footer class="mt-[74px] flex justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" @click="confirmationVisible = false" />
        <Button label="Buchen" class="!border-emerald-500 !bg-emerald-500" @click="confirmationVisible = true" />
      </footer>
    </div>

    <Dialog
      v-model:visible="confirmationVisible"
      modal
      :closable="true"
      header="Buchung bestätigen"
      class="w-[350px]"
      :pt="{
        mask: { class: 'bg-black/40' },
        header: { class: 'px-[18px] pt-[18px] pb-4' },
        content: { class: 'px-[18px] pb-4' },
        footer: { class: 'px-[18px] pb-[18px] pt-0' }
      }"
    >
      <div class="flex flex-col gap-2 text-sm">
        <div class="flex items-center justify-between">
          <span>Datum:</span>
          <strong>15. Juni 2029</strong>
        </div>
        <div class="flex items-center justify-between">
          <span>Zeit</span>
          <strong>{{ selectedTime }}</strong>
        </div>
        <div class="flex items-center justify-between">
          <span>Dienstleistung</span>
          <strong>{{ selectedService }}</strong>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Abbrechen" severity="secondary" @click="confirmationVisible = false" />
          <Button label="Bestätigen" class="!border-emerald-500 !bg-emerald-500" @click="confirmationVisible = false" />
        </div>
      </template>
    </Dialog>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const selectedDate = ref(new Date(2026, 6, 15))
const selectedTime = ref('11:00 - 12:30')
const selectedService = ref('Untersuchung')
const name = ref('Max Mustermann')
const email = ref('max@example.com')
const notes = ref('')
const sendReminder = ref(true)
const confirmationVisible = ref(true)
const serviceSelect = ref()

const timeSlots = ['09:00 - 10:30', '11:00 - 12:30', '14:00 - 15:30', '16:00 - 17:30']
const services = ['Beratungsgespräch', 'Untersuchung']

onMounted(() => {
  serviceSelect.value?.show?.()
})
</script>