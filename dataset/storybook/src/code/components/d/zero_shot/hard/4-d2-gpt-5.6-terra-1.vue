<template>
    <div class="h-[323px] w-[777px] bg-white p-6 font-sans text-[14px] text-slate-700">
        <DataTable
            :value="projects"
            dataKey="id"
            class="w-[600px]"
            tableStyle="width: 600px"
            :pt="{
                table: { class: 'w-[600px]' },
                headerCell: { class: '!bg-white !border-slate-200 !px-3.5 !py-[10px] !text-slate-700' },
                bodyCell: { class: '!border-slate-200 !px-3.5 !py-[10px] !text-slate-700' }
            }"
        >
            <Column field="project" header="Projekt" headerClass="w-[224px] font-semibold" bodyClass="w-[224px] whitespace-nowrap" />
            <Column header="Status" headerClass="w-[160px] font-semibold" bodyClass="w-[160px]">
                <template #body="{ data }">
                    <Tag
                        :value="data.status"
                        :severity="data.severity"
                        class="!px-[7px] !py-[3px] !text-[12px] !font-bold"
                        :class="data.tagClass"
                    />
                </template>
            </Column>
            <Column field="dueDate" header="Fällig" headerClass="w-[124px] font-semibold" bodyClass="w-[124px] whitespace-nowrap" />
            <Column header="Aktionen" headerClass="w-[92px] font-semibold" bodyClass="w-[92px]">
                <template #body="{ data, index }">
                    <div class="flex justify-center">
                        <Button
                            :ref="(element) => setMenuTrigger(element, index)"
                            icon="pi pi-ellipsis-h"
                            variant="text"
                            severity="secondary"
                            aria-label="Aktionen anzeigen"
                            class="!h-7 !w-[35px] !p-0"
                            :class="activeMenuIndex === index ? '!bg-slate-100' : ''"
                            @click="toggleMenu($event, index)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover" appendTo="self" class="!w-48" :pt="{ content: { class: '!p-[10px]' } }">
            <div class="flex flex-col gap-2">
                <Button
                    label="Bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="!h-[33px] !justify-start !text-[14px] !font-medium"
                    @click="hideMenu"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="!h-[33px] !justify-start !text-[14px] !font-medium"
                    @click="hideMenu"
                />
                <Button
                    label="Löschen"
                    icon="pi pi-trash"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="!h-[33px] !justify-start !text-[14px] !font-medium"
                    @click="hideMenu"
                />
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Popover from 'primevue/popover';
import Tag from 'primevue/tag';

const actionsPopover = ref();
const activeMenuIndex = ref(1);
const menuTriggers = ref([]);

const projects = ref([
    {
        id: 1,
        project: 'Webseite Relaunch',
        status: 'Aktiv',
        dueDate: '15.04.2026',
        severity: 'success',
        tagClass: '!bg-emerald-100 !text-emerald-700'
    },
    {
        id: 2,
        project: 'Mobile App',
        status: 'In Prüfung',
        dueDate: '24.04.2026',
        severity: 'warn',
        tagClass: '!bg-orange-100 !text-orange-700'
    },
    {
        id: 3,
        project: 'Marketing Kampagne',
        status: 'Abgeschlossen',
        dueDate: '09.05.2026',
        severity: 'secondary',
        tagClass: '!bg-slate-100 !text-slate-600'
    },
    {
        id: 4,
        project: 'API Migration',
        status: 'Gestoppt',
        dueDate: '12.06.2026',
        severity: 'danger',
        tagClass: '!bg-red-100 !text-red-700'
    }
]);

const setMenuTrigger = (element, index) => {
    if (element) {
        menuTriggers.value[index] = element.$el ?? element;
    }
};

const toggleMenu = (event, index) => {
    activeMenuIndex.value = index;
    actionsPopover.value.toggle(event);
};

const hideMenu = () => {
    actionsPopover.value.hide();
};

onMounted(() => {
    nextTick(() => {
        const trigger = menuTriggers.value[1];

        if (trigger) {
            actionsPopover.value.show({ currentTarget: trigger });
        }
    });
});
</script>