<template>
    <div class="relative flex min-h-[323px] items-start bg-white px-6 pt-8">
        <DataTable
            :value="projects"
            class="w-[600px] [&_.p-datatable-table]:w-full [&_.p-datatable-thead>tr>th]:!px-3.5 [&_.p-datatable-thead>tr>th]:!py-2 [&_.p-datatable-tbody>tr>td]:!px-3.5"
            tableStyle="min-width: 600px"
        >
            <Column field="project" header="Projekt" headerStyle="width: 224px"></Column>
            <Column field="status" header="Status" headerStyle="width: 160px">
                <template #body="{ data }">
                    <span
                        class="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold"
                        :class="data.statusClass"
                    >
                        {{ data.status }}
                    </span>
                </template>
            </Column>
            <Column field="dueDate" header="Fällig" headerStyle="width: 124px"></Column>
            <Column header="Aktionen" headerStyle="width: 92px">
                <template #body="{ data }">
                    <div class="flex justify-center">
                        <Button
                            :id="`action-${data.id}`"
                            icon="pi pi-ellipsis-h"
                            text
                            rounded
                            :class="data.id === activeAction ? '!bg-surface-100' : ''"
                            aria-label="Aktionen"
                            @click="showActions"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover" appendTo="body" class="!w-[208px]">
            <div class="flex flex-col gap-2">
                <Button
                    label="Bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    outlined
                    fluid
                    class="!justify-start !py-2"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    outlined
                    fluid
                    class="!justify-start !py-2"
                />
                <Button
                    label="Löschen"
                    icon="pi pi-trash"
                    severity="secondary"
                    outlined
                    fluid
                    class="!justify-start !py-2"
                />
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Popover from 'primevue/popover';

const actionsPopover = ref();
const activeAction = ref('mobile');

const projects = [
    {
        id: 'website',
        project: 'Webseite Relaunch',
        status: 'Aktiv',
        statusClass: 'bg-emerald-100 text-emerald-700',
        dueDate: '15.04.2026'
    },
    {
        id: 'mobile',
        project: 'Mobile App',
        status: 'In Prüfung',
        statusClass: 'bg-orange-100 text-orange-700',
        dueDate: '24.04.2026'
    },
    {
        id: 'marketing',
        project: 'Marketing Kampagne',
        status: 'Abgeschlossen',
        statusClass: 'bg-slate-100 text-slate-600',
        dueDate: '09.05.2026'
    },
    {
        id: 'api',
        project: 'API Migration',
        status: 'Gestoppt',
        statusClass: 'bg-red-100 text-red-700',
        dueDate: '12.06.2026'
    }
];

const showActions = (event) => {
    activeAction.value = event.currentTarget.id.replace('action-', '');
    actionsPopover.value.toggle(event);
};

onMounted(async () => {
    await nextTick();
    const trigger = document.getElementById('action-mobile');

    if (trigger) {
        actionsPopover.value.show({ currentTarget: trigger });
    }
});
</script>