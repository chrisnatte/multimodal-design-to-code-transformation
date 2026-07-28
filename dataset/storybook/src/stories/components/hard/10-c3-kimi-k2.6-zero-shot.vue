<template>
  <div class="p-8">
    <DataTable :value="users" tableStyle="min-width: 50rem">
      <Column field="name" header="Nutzer">
        <template #body="slotProps">
          <div class="flex items-center gap-3">
            <Avatar :label="slotProps.data.initial" shape="circle" class="bg-surface-200 text-surface-700" />
            <span class="text-surface-900">{{ slotProps.data.name }}</span>
          </div>
        </template>
      </Column>
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.status" :severity="slotProps.data.statusSeverity" />
        </template>
      </Column>
      <Column field="progress" header="Fortschritt">
        <template #body="slotProps">
          <div class="flex flex-col gap-1 w-full max-w-[16rem]">
            <div class="flex justify-between text-sm text-surface-600">
              <span>{{ slotProps.data.progressLabel }}</span>
              <span>{{ slotProps.data.progress }} %</span>
            </div>
            <ProgressBar :value="slotProps.data.progress" :showValue="false" class="h-1.5" :pt="{ value: { class: 'bg-emerald-500' } }" />
          </div>
        </template>
      </Column>
      <Column field="action" header="Aktion">
        <template #body="slotProps">
          <Button
            :ref="(el) => setButtonRef(el, slotProps.data.id)"
            label="..."
            variant="text"
            rounded
            class="text-surface-600"
            @click="toggle($event)"
          />
        </template>
      </Column>
    </DataTable>

    <Popover ref="op">
      <div class="flex flex-col gap-1 min-w-[13rem]">
        <Button icon="pi pi-pencil" label="Profil bearbeiten" variant="text" class="justify-start text-surface-700" />
        <Button icon="pi pi-flag" label="Status ändern" variant="text" class="justify-start text-surface-700" />
        <Button icon="pi pi-copy" label="Duplizieren" variant="text" class="justify-start text-surface-700" />
        <Button icon="pi pi-trash" label="Deaktivieren" variant="text" class="justify-start text-surface-700" />
      </div>
    </Popover>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import ProgressBar from 'primevue/progressbar';
import Button from 'primevue/button';
import Popover from 'primevue/popover';

const op = ref();
const buttonRefs = ref({});

const users = ref([
  { id: 1, name: 'Max Mustermann', initial: 'M', status: 'In Prüfung', statusSeverity: 'danger', progressLabel: 'Zertifizierung', progress: 45 },
  { id: 2, name: 'Anna Schmidt', initial: 'A', status: 'Aktiv', statusSeverity: 'success', progressLabel: 'Onboarding', progress: 87 },
  { id: 3, name: 'Lisa Weber', initial: 'L', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 4 },
  { id: 4, name: 'Paul Müller', initial: 'P', status: 'Inaktiv', statusSeverity: 'warn', progressLabel: 'Onboarding', progress: 11 }
]);

const setButtonRef = (el, id) => {
  if (el) {
    buttonRefs.value[id] = el;
  }
};

const toggle = (event) => {
  op.value.toggle(event);
};

onMounted(() => {
  setTimeout(() => {
    const btn = buttonRefs.value[3];
    if (btn && btn.$el) {
      const event = { currentTarget: btn.$el, target: btn.$el };
      op.value.show(event);
    }
  }, 100);
});
</script>