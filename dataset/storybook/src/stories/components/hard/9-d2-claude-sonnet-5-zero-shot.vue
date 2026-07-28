<template>
  <div class="w-full h-screen flex items-center justify-center bg-black">
    <Dialog
      v-model:visible="visible"
      modal
      :closable="false"
      :draggable="false"
      class="w-96"
      :pt="{ header: { class: 'p-0' }, content: { class: 'p-0' } }"
    >
      <template #container>
        <div class="bg-white rounded-xl border border-surface-200 overflow-hidden">
          <!-- Header -->
          <div class="flex items-center justify-between p-4">
            <div class="flex items-center gap-3">
              <Avatar label="M" size="large" shape="circle" />
              <div class="flex flex-col">
                <span class="text-sm">Dr. Mustermann</span>
                <span class="text-xs font-light text-surface-500">Allgemeinmedizin</span>
              </div>
            </div>
            <Button
              icon="pi pi-times"
              severity="secondary"
              text
              rounded
              aria-label="Close"
              @click="closeDialog"
            />
          </div>

          <Divider class="!my-0" />

          <!-- Content -->
          <div class="flex flex-col gap-4 p-[17.5px]">
            <Breadcrumb :model="breadcrumbItems" class="w-full">
              <template #item="{ item }">
                <span
                  :class="[
                    'text-sm px-1',
                    item.active ? 'border border-primary rounded-md text-primary' : 'text-surface-500'
                  ]"
                >
                  {{ item.label }}
                </span>
              </template>
              <template #separator>
                <i class="pi pi-chevron-right text-xs text-surface-400"></i>
              </template>
            </Breadcrumb>

            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <label for="datum" class="text-sm">Datum</label>
                <DatePicker
                  id="datum"
                  v-model="datum"
                  showIcon
                  iconDisplay="input"
                  placeholder="Datum auswählen"
                  fluid
                />
              </div>

              <div class="flex flex-col gap-2">
                <label for="uhrzeit" class="text-sm">Uhrzeit</label>
                <DatePicker
                  id="uhrzeit"
                  v-model="uhrzeit"
                  timeOnly
                  showIcon
                  iconDisplay="input"
                  placeholder="Uhrzeit auswählen"
                  fluid
                >
                  <template #inputicon="slotProps">
                    <i class="pi pi-clock" @click="slotProps.clickCallback" />
                  </template>
                </DatePicker>
              </div>

              <Textarea
                v-model="anmerkung"
                rows="4"
                placeholder="Anmerkung eingeben..."
                fluid
              />
            </div>
          </div>

          <!-- Footer -->
          <div class="flex items-center justify-between p-[17.5px]">
            <Button
              label="Zurück"
              icon="pi pi-angle-left"
              severity="secondary"
              @click="onBack"
            />
            <Button
              label="Weiter"
              iconPos="right"
              icon="pi pi-angle-right"
              @click="onNext"
            />
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Breadcrumb from 'primevue/breadcrumb';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';

const visible = ref(true);
const datum = ref(null);
const uhrzeit = ref(null);
const anmerkung = ref('');

const breadcrumbItems = ref([
  { label: 'Arzt wählen', active: false },
  { label: 'Termin wählen', active: true },
  { label: 'Bestätigen', active: false }
]);

const closeDialog = () => {
  visible.value = false;
};

const onBack = () => {
  console.log('Zurück clicked');
};

const onNext = () => {
  console.log('Weiter clicked');
};
</script>