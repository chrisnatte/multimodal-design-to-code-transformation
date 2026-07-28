<template>
    <div class="p-6">
        <DataTable
            :value="users"
            class="w-full max-w-[728px]"
            size="small"
            :pt="{
                table: { class: 'w-full' },
                headerCell: { class: 'bg-white border-x-0 border-t-0 border-b border-surface-200 px-3 py-2 text-sm font-semibold text-slate-700' },
                bodyCell: { class: 'border-x-0 border-t-0 border-b border-surface-200 px-3 py-2 text-sm text-slate-700' }
            }"
        >
            <Column header="Nutzer" style="width: 36%">
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <Avatar :label="data.initials" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
                        <span>{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column header="Status" style="width: 15%">
                <template #body="{ data }">
                    <Tag
                        :value="data.status"
                        :severity="data.statusSeverity"
                        class="!px-2 !py-1 !text-xs !font-semibold"
                    />
                </template>
            </Column>

            <Column header="Fortschritt" style="width: 39%">
                <template #body="{ data }">
                    <div class="w-[240px]">
                        <div class="mb-1 flex items-center justify-between text-[11px] text-slate-600">
                            <span>{{ data.course }}</span>
                            <span>{{ data.progress }} %</span>
                        </div>
                        <ProgressBar :value="data.progress" :showValue="false" class="!h-1.5" />
                    </div>
                </template>
            </Column>

            <Column header="Aktion" style="width: 10%">
                <template #body="{ data, index }">
                    <Button
                        v-if="index === 2"
                        ref="menuButton"
                        icon="pi pi-ellipsis-h"
                        text
                        rounded
                        severity="secondary"
                        size="small"
                        aria-label="Aktionen"
                        @click="toggleActions"
                    />
                    <Button
                        v-else
                        icon="pi pi-ellipsis-h"
                        text
                        rounded
                        severity="secondary"
                        size="small"
                        aria-label="Aktionen"
                    />
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover" :dismissable="false">
            <div class="flex w-[156px] flex-col gap-2">
                <Button
                    label="Profil bearbeiten"
                    icon="pi pi-pencil"
                    variant="outlined"
                    severity="secondary"
                    size="small"
                    fluid
                    class="!justify-start !text-slate-500"
                />
                <Button
                    label="Status ändern"
                    icon="pi pi-flag"
                    variant="outlined"
                    severity="secondary"
                    size="small"
                    fluid
                    class="!justify-start !text-slate-500"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    variant="outlined"
                    severity="secondary"
                    size="small"
                    fluid
                    class="!justify-start !text-slate-500"
                />
                <Button
                    label="Deaktivieren"
                    icon="pi pi-trash"
                    variant="outlined"
                    severity="secondary"
                    size="small"
                    fluid
                    class="!justify-start !text-slate-500"
                />
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Popover from 'primevue/popover';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const actionsPopover = ref();
const menuButton = ref();

const users = ref([
    {
        initials: 'M',
        name: 'Max Mustermann',
        status: 'In Prüfung',
        statusSeverity: 'danger',
        course: 'Zertifizierung',
        progress: 45
    },
    {
        initials: 'A',
        name: 'Anna Schmidt',
        status: 'Aktiv',
        statusSeverity: 'success',
        course: 'Onboarding',
        progress: 87
    },
    {
        initials: 'L',
        name: 'Lisa Weber',
        status: 'Inaktiv',
        statusSeverity: 'warn',
        course: 'Onboarding',
        progress: 4
    },
    {
        initials: 'P',
        name: 'Paul Müller',
        status: 'Inaktiv',
        statusSeverity: 'warn',
        course: 'Onboarding',
        progress: 11
    }
]);

const toggleActions = (event) => {
    actionsPopover.value.toggle(event);
};

onMounted(async () => {
    await nextTick();

    if (menuButton.value?.$el) {
        actionsPopover.value.show({
            currentTarget: menuButton.value.$el
        });
    }
});
</script>