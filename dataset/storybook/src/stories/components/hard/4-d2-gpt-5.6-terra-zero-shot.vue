<template>
    <div class="min-h-[323px] w-full bg-white p-6 font-[Inter] text-[#334155]">
        <DataTable
            :value="projects"
            dataKey="id"
            class="w-[600px]"
            :tableStyle="{ width: '600px' }"
            :pt="{
                table: { class: 'border-collapse' },
                headerCell: { class: 'border-b border-[#e2e8f0] bg-white px-3.5 py-2.5 text-sm font-semibold text-[#334155]' },
                bodyCell: { class: 'border-b border-[#e2e8f0] bg-white px-3.5 py-[10.5px] text-sm text-[#334155]' }
            }"
        >
            <Column field="project" header="Projekt" :style="{ width: '224px' }" />
            <Column header="Status" :style="{ width: '160px' }">
                <template #body="{ data }">
                    <Tag
                        :value="data.status"
                        :severity="data.severity"
                        class="!px-[7px] !py-[3px] !text-[12px] !font-bold"
                    />
                </template>
            </Column>
            <Column field="dueDate" header="Fällig" :style="{ width: '124px' }" />
            <Column header="Aktionen" :style="{ width: '92px' }">
                <template #body="{ data, index }">
                    <div class="flex justify-center">
                        <Button
                            :ref="(el) => setActionButton(el, index)"
                            icon="pi pi-ellipsis-h"
                            variant="text"
                            severity="secondary"
                            aria-label="Aktionen anzeigen"
                            class="!h-7 !w-[35px] !p-0"
                            :class="{ '!bg-[#f1f5f9]': selectedAction === data.id }"
                            @click="toggleActions($event, data.id)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover" :pt="{ content: { class: '!p-[10.5px]' } }">
            <div class="flex w-[169px] flex-col gap-2">
                <Button
                    label="Bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="!h-[33px] !justify-start"
                    @click="closeActions"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="!h-[33px] !justify-start"
                    @click="closeActions"
                />
                <Button
                    label="Löschen"
                    icon="pi pi-trash"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="!h-[33px] !justify-start"
                    @click="closeActions"
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
const selectedAction = ref('mobile-app');
const actionButtons = ref([]);

const projects = ref([
    { id: 'website-relaunch', project: 'Webseite Relaunch', status: 'Aktiv', severity: 'success', dueDate: '15.04.2026' },
    { id: 'mobile-app', project: 'Mobile App', status: 'In Prüfung', severity: 'warn', dueDate: '24.04.2026' },
    { id: 'marketing-campaign', project: 'Marketing Kampagne', status: 'Abgeschlossen', severity: 'secondary', dueDate: '09.05.2026' },
    { id: 'api-migration', project: 'API Migration', status: 'Gestoppt', severity: 'danger', dueDate: '12.06.2026' }
]);

const setActionButton = (element, index) => {
    if (element) {
        actionButtons.value[index] = element;
    }
};

const toggleActions = (event, id) => {
    if (selectedAction.value === id) {
        actionsPopover.value.hide();
        selectedAction.value = null;
        return;
    }

    selectedAction.value = id;
    actionsPopover.value.show(event);
};

const closeActions = () => {
    actionsPopover.value.hide();
    selectedAction.value = null;
};

onMounted(async () => {
    await nextTick();

    const activeButton = actionButtons.value[1];

    if (activeButton?.$el) {
        actionsPopover.value.show({ currentTarget: activeButton.$el });
    }
});
</script>