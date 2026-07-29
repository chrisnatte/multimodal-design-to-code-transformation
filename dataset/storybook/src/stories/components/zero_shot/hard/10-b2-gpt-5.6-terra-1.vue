<template>
    <div class="h-[410px] w-[897px] bg-white p-6">
        <DataTable
            :value="users"
            dataKey="id"
            class="w-[728px]"
            :tableStyle="{ width: '728px' }"
            :tableProps="{ 'aria-label': 'Nutzerverwaltung' }"
        >
            <Column header="Nutzer" :headerStyle="{ width: '256px' }" :bodyStyle="{ width: '256px' }">
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <Avatar :label="data.initial" shape="circle" class="!h-7 !w-7 !bg-surface-200 !text-sm !text-surface-700" />
                        <span class="text-sm">{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column header="Status" :headerStyle="{ width: '108px' }" :bodyStyle="{ width: '108px' }">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="data.statusSeverity" class="!text-[12px]" />
                </template>
            </Column>

            <Column header="Fortschritt" :headerStyle="{ width: '256px' }" :bodyStyle="{ width: '256px' }">
                <template #body="{ data }">
                    <div class="flex w-[240px] flex-col gap-1">
                        <div class="flex items-end justify-between">
                            <span class="text-[10px]">{{ data.progressLabel }}</span>
                            <span class="text-xs">{{ data.progress }} %</span>
                        </div>
                        <ProgressBar :value="data.progress" :showValue="false" class="!h-[6px]" />
                    </div>
                </template>
            </Column>

            <Column header="Aktionen" :headerStyle="{ width: '108px', textAlign: 'center' }" :bodyStyle="{ width: '108px', textAlign: 'center' }">
                <template #body="{ data }">
                    <Button
                        type="button"
                        icon="pi pi-ellipsis-h"
                        variant="text"
                        plain
                        aria-label="Aktionen anzeigen"
                        class="!h-7 !w-[35px] !p-0"
                        :class="{ '!bg-surface-100': selectedUser?.id === data.id }"
                        @click="openActions($event, data)"
                    />
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover">
            <div class="flex w-[169px] flex-col gap-2">
                <Button label="Profil bearbeiten" icon="pi pi-pen-to-square" severity="secondary" variant="outlined" size="small" fluid />
                <Button label="Status ändern" icon="pi pi-flag" severity="secondary" variant="outlined" size="small" fluid />
                <Button label="Duplizieren" icon="pi pi-clone" severity="secondary" variant="outlined" size="small" fluid />
                <Button label="Deaktiveren" icon="pi pi-trash" severity="secondary" variant="outlined" size="small" fluid />
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Popover from 'primevue/popover';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const actionsPopover = ref();
const selectedUser = ref(null);

const users = ref([
    {
        id: 1,
        initial: 'M',
        name: 'Max Mustermann',
        status: 'In Prüfung',
        statusSeverity: 'danger',
        progressLabel: 'Zertifizierung',
        progress: 45
    },
    {
        id: 2,
        initial: 'A',
        name: 'Anna Schmidt',
        status: 'Aktiv',
        statusSeverity: 'success',
        progressLabel: 'Onboarding',
        progress: 87
    },
    {
        id: 3,
        initial: 'L',
        name: 'Lisa Weber',
        status: 'Inaktiv',
        statusSeverity: 'warn',
        progressLabel: 'Onboarding',
        progress: 4
    },
    {
        id: 4,
        initial: 'P',
        name: 'Paul Müller',
        status: 'Inaktiv',
        statusSeverity: 'warn',
        progressLabel: 'Onboarding',
        progress: 11
    }
]);

const openActions = (event, user) => {
    selectedUser.value = user;
    actionsPopover.value.toggle(event);
};
</script>