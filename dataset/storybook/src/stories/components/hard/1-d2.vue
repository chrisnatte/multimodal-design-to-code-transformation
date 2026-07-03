<template>
  <div class="min-h-screen flex items-center justify-center bg-black/40 p-8">
    <Dialog
      v-model:visible="state.visible"
      modal
      :closable="false"
      :draggable="false"
      :style="{ width: '24rem' }"
      class="rounded-xl"
      :pt="{
        root: { class: 'rounded-xl' },
        content: { class: 'p-0' },
        header: { class: 'hidden' }
      }"
    >
      <div class="flex flex-col">
        <div class="flex items-center justify-between p-4 pb-3">
          <h2 class="text-[30B] text-slate-700 font-semibold text-[1.75rem] leading-none">Profil bearbeiten</h2>
          <Button
            icon="pi pi-times"
            variant="text"
            severity="secondary"
            rounded
            aria-label="Schließen"
            @click="state.visible = false"
            class="!w-8 !h-8"
          />
        </div>

        <div class="flex flex-col gap-4 px-4 pb-4">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-slate-700 text-lg">Name</label>
            <InputText id="name" v-model="state.name" class="w-full" />
          </div>

          <div class="flex flex-col gap-1">
            <label for="rolle" class="text-slate-700 text-lg">Rolle</label>
            <Select
              id="rolle"
              v-model="state.role"
              :options="roles"
              optionLabel="label"
              optionValue="value"
              class="w-full"
              :pt="{
                root: { class: 'border-emerald-500' }
              }"
            />
            <div class="rounded-md border border-slate-200 shadow-sm bg-white p-1">
              <div class="flex flex-col gap-0.5">
                <div class="px-3 py-2 rounded bg-emerald-100 text-emerald-700">Administator</div>
                <div class="px-3 py-2 rounded text-slate-700">Projektleiter</div>
                <div class="px-3 py-2 rounded text-slate-700">Gast</div>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2 pt-1">
            <Checkbox v-model="state.active" binary inputId="active" />
            <label for="active" class="text-slate-700 text-lg">Ist aktiv</label>
          </div>
        </div>

        <div class="flex justify-end gap-2 p-4 pt-1">
          <Button label="Abbrechen" variant="text" severity="secondary" @click="state.visible = false" />
          <Button label="Speichern" @click="state.visible = false" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Checkbox from 'primevue/checkbox';

const state = reactive({
  visible: true,
  name: 'Max Mustmann',
  role: 'administrator',
  active: false
});

const roles = [
  { label: 'Administrator', value: 'administrator' },
  { label: 'Projektleiter', value: 'projektleiter' },
  { label: 'Gast', value: 'gast' }
];
</script>