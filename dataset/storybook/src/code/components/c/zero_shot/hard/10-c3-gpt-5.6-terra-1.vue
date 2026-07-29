<template>
    <div class="p-6">
        <DataTable
            :value="users"
            class="w-full max-w-[46rem]"
            tableClass="w-full"
            size="small"
        >
            <Column header="Nutzer" headerClass="w-[36%]">
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <Avatar :label="data.initials" shape="circle" class="!bg-slate-200 !text-slate-600 !w-7 !h-7 !text-sm" />
                        <span class="text-sm text-slate-700">{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column header="Status" headerClass="w-[15%]">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="data.statusSeverity" class="!text-xs" />
                </template>
            </Column>

            <Column header="Fortschritt" headerClass="w-[37%]">
                <template #body="{ data }">
                    <div class="w-full pr-2">
                        <div class="mb-1 flex items-center justify-between text-[10px] text-slate-600">
                            <span>{{ data.course }}</span>
                            <span>{{ data.progress }} %</span>
                        </div>
                        <div class="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                            <div class="h-full bg-emerald-500" :style="{ width: `${data.progress}%` }"></div>
                        </div>
                    </div>
                </template>
            </Column>

            <Column header="Aktion" headerClass="w-[12%]">
                <template #body="{ data }">
                    <Button
                        :id="`action-${data.id}`"
                        icon="pi pi-ellipsis-h"
                        text
                        rounded
                        severity="secondary"
                        size="small"
                        aria-label="Aktionen"
                        @click="toggleActions($event, data)"
                    />
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionPopover" appendTo="body">
            <div class="flex w-[10.5rem] flex-col gap-2">
                <Button
                    label="Profil bearbeiten"
                    icon="pi pi-pencil"
                    outlined
                    severity="secondary"
                    size="small"
                    class="!justify-start"
                />
                <Button
                    label="Status ändern"
                    icon="pi pi-flag"
                    outlined
                    severity="secondary"
                    size="small"
                    class="!justify-start"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    outlined
                    severity="secondary"
                    size="small"
                    class="!justify-start"
                />
                <Button
                    label="Deaktivieren"
                    icon="pi pi-trash"
                    outlined
                    severity="secondary"
                    size="small"
                    class="!justify-start"
                />
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Popover from 'primevue/popover';
import Tag from 'primevue/tag';

const actionPopover = ref();
const activeUser = ref(null);

const users = [
    {
        id: 1,
        initials: 'M',
        name: 'Max Mustermann',
        status: 'In Prüfung',
        statusSeverity: 'danger',
        course: 'Zertifizierung',
        progress: 45
    },
    {
        id: 2,
        initials: 'A',
        name: 'Anna Schmidt',
        status: 'Aktiv',
        statusSeverity: 'success',
        course: 'Onboarding',
        progress: 87
    },
    {
        id: 3,
        initials: 'L',
        name: 'Lisa Weber',
        status: 'Inaktiv',
        statusSeverity: 'warn',
        course: 'Onboarding',
        progress: 4
    },
    {
        id: 4,
        initials: 'P',
        name: 'Paul Müller',
        status: 'Inaktiv',
        statusSeverity: 'warn',
        course: 'Onboarding',
        progress: 11
    }
];

const toggleActions = (event, user) => {
    activeUser.value = user;
    actionPopover.value.toggle(event);
};

onMounted(() => {
    const target = document.getElementById('action-3');

    if (target) {
        activeUser.value = users[2];
        actionPopover.value.show(target);
    }
});
</script>