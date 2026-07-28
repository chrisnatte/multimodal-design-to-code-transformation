<template>
    <div class="min-h-[410px] w-full bg-white p-6 font-sans text-slate-700">
        <DataTable
            :value="users"
            dataKey="id"
            class="w-full max-w-[728px]"
            tableStyle="min-width: 728px"
            :pt="{
                table: { style: { borderCollapse: 'collapse' } },
                headerCell: { style: { background: '#ffffff' } }
            }"
        >
            <Column header="Nutzer" headerStyle="width: 256px" bodyStyle="width: 256px">
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <Avatar
                            :label="data.initial"
                            shape="circle"
                            class="h-7 w-7 !bg-slate-200 !text-sm !text-slate-600"
                        />
                        <span class="text-sm">{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column header="Status" headerStyle="width: 108px" bodyStyle="width: 108px">
                <template #body="{ data }">
                    <Tag
                        :value="data.status"
                        :severity="data.statusSeverity"
                        class="!px-2 !py-0.5 !text-xs !font-bold"
                        :class="{
                            '!bg-red-100 !text-red-600': data.status === 'In Prüfung',
                            '!bg-green-100 !text-green-600': data.status === 'Aktiv',
                            '!bg-orange-100 !text-orange-600': data.status === 'Inaktiv'
                        }"
                    />
                </template>
            </Column>

            <Column header="Fortschritt" headerStyle="width: 256px" bodyStyle="width: 256px">
                <template #body="{ data }">
                    <div class="flex w-[240px] flex-col gap-1">
                        <div class="flex items-end justify-between">
                            <span class="text-[10px]">{{ data.course }}</span>
                            <span class="text-xs">{{ data.progress }} %</span>
                        </div>
                        <ProgressBar
                            :value="data.progress"
                            :showValue="false"
                            class="h-1.5"
                            :pt="{
                                root: { style: { height: '6px', background: '#e2e8f0' } },
                                value: { style: { background: '#10b981' } }
                            }"
                        />
                    </div>
                </template>
            </Column>

            <Column header="Aktion" headerStyle="width: 108px; text-align: center" bodyStyle="width: 108px">
                <template #body="{ data }">
                    <div class="flex justify-center">
                        <Button
                            icon="pi pi-ellipsis-h"
                            variant="text"
                            severity="secondary"
                            size="small"
                            aria-label="Aktionen anzeigen"
                            :class="{ '!bg-slate-100': selectedUser?.id === data.id }"
                            @click="openActions($event, data)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover">
            <div class="flex w-[169px] flex-col gap-2">
                <Button
                    label="Profil bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    @click="actionsPopover?.hide()"
                />
                <Button
                    label="Status ändern"
                    icon="pi pi-flag"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    @click="actionsPopover?.hide()"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    @click="actionsPopover?.hide()"
                />
                <Button
                    label="Deaktivieren"
                    icon="pi pi-trash"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    @click="actionsPopover?.hide()"
                />
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
        course: 'Zertifizierung',
        progress: 45
    },
    {
        id: 2,
        initial: 'A',
        name: 'Anna Schmidt',
        status: 'Aktiv',
        statusSeverity: 'success',
        course: 'Onboarding',
        progress: 87
    },
    {
        id: 3,
        initial: 'L',
        name: 'Lisa Weber',
        status: 'Inaktiv',
        statusSeverity: 'warn',
        course: 'Onboarding',
        progress: 4
    },
    {
        id: 4,
        initial: 'P',
        name: 'Paul Müller',
        status: 'Inaktiv',
        statusSeverity: 'warn',
        course: 'Onboarding',
        progress: 11
    }
]);

const openActions = (event, user) => {
    selectedUser.value = user;
    actionsPopover.value.toggle(event);
};
</script>