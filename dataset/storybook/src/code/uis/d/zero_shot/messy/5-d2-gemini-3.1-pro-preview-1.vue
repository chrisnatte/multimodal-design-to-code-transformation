<template>
  <div class="min-h-screen bg-gray-400 flex items-center justify-center p-8 font-sans">
    <div class="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden relative">
      <!-- Header -->
      <div class="flex items-center gap-4 p-8 pb-4">
        <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
          <i class="pi pi-times text-xl"></i>
        </div>
        <div>
          <h1 class="text-3xl font-bold text-gray-900">Termin buchen</h1>
          <p class="text-gray-600">Buche einen Termin für dich bei uns.</p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="p-8 pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Left Column: Date Picker -->
        <div class="bg-gray-100 rounded-xl p-6 flex flex-col gap-4">
          <h2 class="text-lg font-medium text-gray-900">Datum wählen</h2>
          <div class="bg-white rounded-lg border border-gray-200 p-4">
            <div class="flex items-center justify-between mb-4">
              <Button icon="pi pi-chevron-left" text rounded aria-label="Previous Month" />
              <div class="font-bold text-gray-900">July 2026</div>
              <Button icon="pi pi-chevron-right" text rounded aria-label="Next Month" />
            </div>
            <div class="grid grid-cols-7 gap-1 text-center text-sm mb-2">
              <div class="font-medium text-gray-500 py-1">Wk</div>
              <div class="font-medium text-gray-500 py-1">Su</div>
              <div class="font-medium text-gray-500 py-1">Mo</div>
              <div class="font-medium text-gray-500 py-1">Tu</div>
              <div class="font-medium text-gray-500 py-1">We</div>
              <div class="font-medium text-gray-500 py-1">Th</div>
              <div class="font-medium text-gray-500 py-1">Fr</div>
              <div class="font-medium text-gray-500 py-1">Sa</div>
            </div>
            <div class="grid grid-cols-7 gap-1 text-center text-sm">
              <!-- Week 1 -->
              <div class="py-1 text-gray-400">8</div>
              <div class="py-1 text-gray-400">27</div>
              <div class="py-1 text-gray-400">28</div>
              <div class="py-1 text-gray-400">1</div>
              <div class="py-1 text-gray-400">2</div>
              <div class="py-1 text-gray-400">3</div>
              <div class="py-1 text-gray-400">4</div>
              <div class="py-1 text-gray-400">5</div>
              <!-- Week 2 -->
              <div class="py-1 text-gray-400">9</div>
              <div class="py-1 text-gray-700">6</div>
              <div class="py-1 text-gray-700">7</div>
              <div class="py-1 text-gray-700">8</div>
              <div class="py-1 text-gray-700">9</div>
              <div class="py-1 text-gray-700">10</div>
              <div class="py-1 text-gray-700">11</div>
              <div class="py-1 text-gray-700">12</div>
              <!-- Week 3 -->
              <div class="py-1 text-gray-400">10</div>
              <div class="py-1 text-gray-700">13</div>
              <div class="py-1 text-gray-700">14</div>
              <div class="py-1 bg-emerald-500 text-white rounded-full w-7 h-7 flex items-center justify-center mx-auto">15</div>
              <div class="py-1 text-gray-700">16</div>
              <div class="py-1 text-gray-700">17</div>
              <div class="py-1 text-gray-700">18</div>
              <div class="py-1 text-gray-700">19</div>
              <!-- Week 4 -->
              <div class="py-1 text-gray-400">11</div>
              <div class="py-1 text-gray-700">20</div>
              <div class="py-1 text-gray-700">21</div>
              <div class="py-1 text-gray-700">22</div>
              <div class="py-1 text-gray-700">23</div>
              <div class="py-1 text-gray-700">24</div>
              <div class="py-1 text-gray-700">25</div>
              <div class="py-1 text-gray-700">26</div>
              <!-- Week 5 -->
              <div class="py-1 text-gray-400">12</div>
              <div class="py-1 text-gray-700">27</div>
              <div class="py-1 text-gray-700">28</div>
              <div class="py-1 text-gray-700">29</div>
              <div class="py-1 text-gray-700">30</div>
              <div class="py-1 text-gray-700">31</div>
              <div class="py-1 text-gray-400">1</div>
              <div class="py-1 text-gray-400">2</div>
            </div>
          </div>
        </div>

        <!-- Right Column: Time Slot & Service -->
        <div class="bg-gray-100 rounded-xl p-6 flex flex-col gap-6">
          <div class="flex flex-col gap-4">
            <h2 class="text-lg font-medium text-gray-900">Zeitslot wählen</h2>
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" inputId="time1" name="time" value="09:00 - 10:30" />
                <label for="time1" class="text-gray-700">09:00 - 10:30</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" inputId="time2" name="time" value="11:00 - 12:30" />
                <label for="time2" class="text-gray-700">11:00 - 12:30</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" inputId="time3" name="time" value="14:00 - 15:30" />
                <label for="time3" class="text-gray-700">14:00 - 15:30</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="selectedTime" inputId="time4" name="time" value="16:00 - 17:30" />
                <label for="time4" class="text-gray-700">16:00 - 17:30</label>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-sm text-gray-700">Dienstleistung</label>
            <Dropdown v-model="selectedService" :options="services" optionLabel="name" placeholder="Untersuchung" class="w-full" />
          </div>
        </div>

        <!-- Bottom Section: User Data -->
        <div class="col-span-1 md:col-span-2 bg-gray-100 rounded-xl p-6 flex flex-col gap-6">
          <h2 class="text-lg font-medium text-gray-900">Deine Daten</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col gap-2">
              <label for="name" class="text-sm text-gray-700">Name</label>
              <InputText id="name" v-model="userName" placeholder="Max Mustermann" class="w-full" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="email" class="text-sm text-gray-700">E-Mail</label>
              <InputText id="email" v-model="userEmail" placeholder="max@example.com" class="w-full" />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="notes" class="text-sm text-gray-700">Anmerkungen</label>
            <Textarea id="notes" v-model="userNotes" rows="4" placeholder="Optionale Nachricht..." class="w-full" />
          </div>

          <div class="flex items-center gap-3">
            <InputSwitch v-model="sendReminder" inputId="reminder" />
            <div>
              <label for="reminder" class="font-semibold text-sm text-gray-900 block">Erinnerung senden</label>
              <span class="text-xs text-gray-500">Bekomme eine Nachricht als Erinnerung eine Stunde vor deinem Termin per E-Mail.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="p-8 pt-4 flex justify-end gap-3">
        <Button label="Abbrechen" severity="secondary" text class="bg-gray-100 hover:bg-gray-200 text-gray-700" />
        <Button label="Buchen" class="bg-emerald-500 hover:bg-emerald-600 border-none text-white" @click="showDialog = true" />
      </div>

      <!-- Overlay Dialog (Simulated) -->
      <Dialog v-model:visible="showDialog" modal header="Buchung bestätigen" :style="{ width: '25rem' }" :closable="true">
        <div class="flex flex-col gap-4 py-4">
          <div class="flex justify-between">
            <span class="text-gray-600">Datum:</span>
            <span class="font-semibold text-gray-900">15. Juni 2029</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Zeit</span>
            <span class="font-semibold text-gray-900">11:00 - 12:30</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-600">Dienstleistung</span>
            <span class="font-semibold text-gray-900">Untersuchung</span>
          </div>
        </div>
        <template #footer>
          <Button label="Abbrechen" severity="secondary" text class="bg-gray-100 hover:bg-gray-200 text-gray-700" @click="showDialog = false" />
          <Button label="Bestätigen" class="bg-emerald-500 hover:bg-emerald-600 border-none text-white" @click="showDialog = false" />
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import InputSwitch from 'primevue/inputswitch';
import Dialog from 'primevue/dialog';

const selectedTime = ref('11:00 - 12:30');
const selectedService = ref({ name: 'Untersuchung', code: 'US' });
const services = ref([
  { name: 'Untersuchung', code: 'US' },
  { name: 'Beratungsgespräch', code: 'BG' }
]);

const userName = ref('Max Mustermann');
const userEmail = ref('');
const userNotes = ref('');
const sendReminder = ref(true);

const showDialog = ref(true); // Set to true to match screenshot state
</script>