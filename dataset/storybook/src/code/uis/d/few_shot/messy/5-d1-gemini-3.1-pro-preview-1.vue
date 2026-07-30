<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-white p-8">
    <div class="mb-12 flex items-center gap-4">
      <Button icon="pi pi-times" rounded severity="secondary" text class="!bg-slate-100" />
      <div>
        <h1 class="text-3xl font-bold">Termin buchen</h1>
        <p class="text-slate-600">Buche einen Termin für dich bei uns.</p>
      </div>
    </div>

    <div class="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
      <div class="flex flex-col gap-4 rounded-xl bg-slate-100 p-6">
        <h2 class="text-lg font-medium">Datum wählen</h2>
        <div class="rounded-lg border border-slate-200 bg-white p-4">
          <div class="mb-4 flex items-center justify-between">
            <Button icon="pi pi-chevron-left" text rounded severity="secondary" />
            <div class="flex gap-2 font-bold">
              <span>July</span>
              <span>2026</span>
            </div>
            <Button icon="pi pi-chevron-right" text rounded severity="secondary" />
          </div>
          <div class="grid grid-cols-7 gap-2 text-center text-sm">
            <div class="font-medium text-slate-500">Wk</div>
            <div class="font-medium text-slate-500">Su</div>
            <div class="font-medium text-slate-500">Mo</div>
            <div class="font-medium text-slate-500">Tu</div>
            <div class="font-medium text-slate-500">We</div>
            <div class="font-medium text-slate-500">Th</div>
            <div class="font-medium text-slate-500">Fr</div>
            <div class="font-medium text-slate-500">Sa</div>

            <div class="text-slate-400">8</div>
            <div class="text-slate-400">27</div>
            <div class="text-slate-400">28</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>

            <div class="text-slate-400">9</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>

            <div class="text-slate-400">10</div>
            <div>13</div>
            <div>14</div>
            <div class="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
              15
            </div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
            <div>19</div>

            <div class="text-slate-400">11</div>
            <div>20</div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26</div>

            <div class="text-slate-400">12</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <div>30</div>
            <div>31</div>
            <div class="text-slate-400">1</div>
            <div class="text-slate-400">2</div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 rounded-xl bg-slate-100 p-6">
        <h2 class="text-lg font-medium">Zeitslot wählen</h2>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <RadioButton v-model="timeSlot" inputId="slot1" name="slot" value="09:00 - 10:30" />
            <label for="slot1">09:00 - 10:30</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="timeSlot" inputId="slot2" name="slot" value="11:00 - 12:30" />
            <label for="slot2">11:00 - 12:30</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="timeSlot" inputId="slot3" name="slot" value="14:00 - 15:30" />
            <label for="slot3">14:00 - 15:30</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="timeSlot" inputId="slot4" name="slot" value="16:00 - 17:30" />
            <label for="slot4">16:00 - 17:30</label>
          </div>
        </div>

        <div class="mt-4 flex flex-col gap-2">
          <label class="text-sm">Dienstleistung</label>
          <Dropdown
            v-model="service"
            :options="services"
            optionLabel="name"
            placeholder="Untersuchung"
            class="w-full"
          />
        </div>
      </div>

      <div class="col-span-1 flex flex-col gap-4 rounded-xl bg-slate-100 p-6 md:col-span-2">
        <h2 class="text-lg font-medium">Deine Daten</h2>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-sm">Name</label>
            <InputText id="name" v-model="name" placeholder="Max Mustermann" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm">E-Mail</label>
            <InputText id="email" v-model="email" placeholder="max@example.com" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label for="notes" class="text-sm">Anmerkungen</label>
          <Textarea id="notes" v-model="notes" rows="4" placeholder="Optionale Nachricht..." />
        </div>
        <div class="mt-2 flex items-center gap-4">
          <InputSwitch v-model="reminder" inputId="reminder" />
          <div>
            <label for="reminder" class="font-semibold">Erinnerung senden</label>
            <p class="text-xs text-slate-500">
              Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 flex w-full max-w-4xl justify-end gap-4">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Buchen" severity="primary" @click="showDialog = true" />
    </div>

    <Dialog
      v-model:visible="showDialog"
      modal
      header="Buchung bestätigen"
      :style="{ width: '25rem' }"
    >
      <div class="flex flex-col gap-4 py-4">
        <div class="flex justify-between">
          <span class="text-slate-600">Datum:</span>
          <span class="font-semibold">15. Juni 2029</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-600">Zeit</span>
          <span class="font-semibold">11:00 - 12:30</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-600">Dienstleistung</span>
          <span class="font-semibold">Untersuchung</span>
        </div>
      </div>
      <template #footer>
        <Button label="Abbrechen" severity="secondary" @click="showDialog = false" />
        <Button label="Bestätigen" severity="primary" @click="showDialog = false" />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import RadioButton from 'primevue/radiobutton'
  import Dropdown from 'primevue/dropdown'
  import InputText from 'primevue/inputtext'
  import Textarea from 'primevue/textarea'
  import InputSwitch from 'primevue/inputswitch'
  import Dialog from 'primevue/dialog'

  const timeSlot = ref('11:00 - 12:30')
  const service = ref({ name: 'Untersuchung', code: 'UN' })
  const services = ref([
    { name: 'Untersuchung', code: 'UN' },
    { name: 'Beratungsgespräch', code: 'BG' },
  ])
  const name = ref('Max Mustermann')
  const email = ref('')
  const notes = ref('')
  const reminder = ref(true)
  const showDialog = ref(true)
</script>