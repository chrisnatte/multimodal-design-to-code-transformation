<template>
    <div class="min-h-[410px] w-full bg-white p-6">
        <DataTable
            :value="users"
            class="w-[728px]"
            tableStyle="min-width: 728px"
            :tableProps="{ 'aria-label': 'Nutzerverwaltung' }"
        >
            <Column header="Nutzer" class="w-[256px]" headerClass="!px-[14px] !py-[10px]" bodyClass="!px-[14px] !py-[10px]">
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <Avatar :label="data.initials" shape="circle" class="h-7 w-7 !bg-surface-200 !text-sm !text-surface-700" />
                        <span class="text-sm">{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column header="Status" class="w-[108px]" headerClass="!px-[14px] !py-[10px]" bodyClass="!px-[14px] !py-[10px]">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="data.statusSeverity" class="!text-xs" />
                </template>
            </Column>

            <Column header="Fortschritt" class="w-[256px]" headerClass="!px-[14px] !py-[10px]" bodyClass="!px-[14px] !py-[10px]">
                <template #body="{ data }">
                    <div class="flex w-full flex-col gap-1">
                        <div class="flex items-end justify-between">
                            <span class="text-[10px]">{{ data.progressLabel }}</span>
                            <span class="text-xs">{{ data.progress }} %</span>
                        </div>
                        <ProgressBar :value="data.progress" :showValue="false" class="h-[6px] w-full" />
                    </div>
                </template>
            </Column>

            <Column header="Aktionen" class="w-[108px]" headerClass="!px-[14px] !py-[10px] text-center" bodyClass="!px-[14px] !py-[10px]">
                <template #body="{ data }">
                    <div class="flex justify-center">
                        <Button
                            icon="pi pi-ellipsis-h"
                            variant="text"
                            severity="secondary"
                            aria-label="Aktionen anzeigen"
                            class="!h-7 !w-[35px]"
                            :class="{ '!bg-surface-100': selectedUser?.name === data.name }"
                            @click="toggleActions($event, data)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover">
            <div v-if="selectedUser" class="flex w-[169px] flex-col gap-2">
                <Button label="Profil bearbeiten" icon="pi pi-pencil" severity="secondary" variant="outlined" size="small" fluid />
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
        initials: 'M',
        name: 'Max Mustermann',
        status: 'In Prüfung',
        statusSeverity: 'danger',
        progressLabel: 'Zertifizierung',
        progress: 45
    },
    {
        initials: 'A',
        name: 'Anna Schmidt',
        status: 'Aktiv',
        statusSeverity: 'success',
        progressLabel: 'Onboarding',
        progress: 87
    },
    {
        initials: 'L',
        name: 'Lisa Weber',
        status: 'Inaktiv',
        statusSeverity: 'warn',
        progressLabel: 'Onboarding',
        progress: 4
    },
    {
        initials: 'P',
        name: 'Paul Müller',
        status: 'Inaktiv',
        statusSeverity: 'warn',
        progressLabel: 'Onboarding',
        progress: 11
    }
]);

const toggleActions = (event, user) => {
    selectedUser.value = user;
    actionsPopover.value.toggle(event);
};
</script>