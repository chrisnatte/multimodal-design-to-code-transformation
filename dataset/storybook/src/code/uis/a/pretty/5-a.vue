<template>
  <div>
    <div class="flex gap-3 items-center justify-end">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" />
    </div>
    <div>
      <Card>
        <div class="flex flex-col gap-[7px]">
          <span>Datum wählen</span>
        </div>
        <template #content>
          <DatePicker v-model="_state.n110_5200" :showWeek="true" />
        </template>
      </Card>
      <Card>
        <div class="flex flex-col gap-[7px]">
          <span>Zeitslot wählen</span>
        </div>
        <template #content>
          <div class="flex flex-col gap-2">
            <RadioButton v-model="_state.n110_6259" value="option1" />
            <RadioButton v-model="_state.n110_6260" value="option1" />
            <RadioButton v-model="_state.n110_6261" value="option1" />
            <RadioButton v-model="_state.n110_6269" value="option1" />
          </div>
          <div class="flex flex-col gap-2">
            <label>Dienstleistung</label>
            <Select
              v-model="_state.n110_6273"
              :options="_options_n110_6273"
              placeholder="Deutschland"
             />
          </div>
        </template>
      </Card>
      <Card>
        <div class="flex flex-col gap-[7px]">
          <span>Deine Daten</span>
        </div>
        <template #content>
          <InputText placeholder="Placeholder" v-model="_state.n110_6308" />
          <InputText placeholder="Placeholder" v-model="_state.n110_6309" />
          <div class="flex flex-col gap-3">
            <span class="text-sm">Anmerkungen</span>
            <Textarea
              placeholder="Placeholder"
              v-model="_state.n110_6329"
              rows="4"
             />
          </div>
          <div class="flex gap-3 px-1 items-center">
            <ToggleSwitch v-model="_state.n110_6406" />
            <div class="flex flex-col">
              <span class="text-sm font-semibold">Erinnerung senden</span>
              <span>Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
            </div>
          </div>
        </template>
      </Card>
    </div>
    <div class="flex gap-4 items-center">
      <div class="flex gap-[7px] p-2 items-center" />
      <div class="flex flex-col gap-1">
        <span class="font-bold">Termin buchen</span>
        <span class="text-base">Buche einen Termin für dich bei uns.</span>
      </div>
    </div>
    <Dialog v-model:visible="_state.n111_6447Visible" :modal="true">
      <template #header>
        <div class="flex p-[18px] items-center justify-between">
          <span class="font-semibold">Buchung bestätigen</span>
          <div class="flex flex-col gap-[7px]">
            <Button severity="secondary" variant="text" />
          </div>
        </div>
      </template>
      <div
        class="flex flex-col gap-2 px-[18px] pb-[18px] justify-center"
      >
        <div class="flex gap-2 items-center">
          <span class="text-sm">Datum: </span>
          <span class="text-sm font-semibold">15. Juni 2029</span>
        </div>
        <div class="flex gap-2 items-center">
          <span class="text-sm">Zeit</span>
          <span class="text-sm font-semibold">11:00 - 12:30</span>
        </div>
        <div class="flex gap-2 items-center">
          <span class="text-sm">Dienstleistung</span>
          <span class="text-sm font-semibold">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <div class="flex gap-[7px] px-[18px] pb-[18px] justify-end">
          <Button label="Abbrechen" severity="secondary" />
          <Button label="Bestätigen" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import DatePicker from 'primevue/datepicker'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const _state = reactive({ n110_5200: null, n110_6259: null, n110_6260: null, n110_6261: null, n110_6269: null, n110_6273: null, n110_6308: null, n110_6309: null, n110_6329: null, n110_6406: null, n111_6447Visible: null })
</script>
