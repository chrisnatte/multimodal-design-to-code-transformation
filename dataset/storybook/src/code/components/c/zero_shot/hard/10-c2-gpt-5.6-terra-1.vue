<template>
    <div class="mx-6 mt-7 w-[728px]">
        <DataTable :value="users" size="small" class="text-sm" tableStyle="min-width: 100%">
            <Column header="Nutzer" headerClass="w-[36%]">
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <Avatar :label="data.initial" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
                        <span class="text-slate-700">{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column header="Status" headerClass="w-[15%]">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="data.severity" class="!px-2 !py-0.5 !text-xs !font-semibold" />
                </template>
            </Column>

            <Column header="Fortschritt" headerClass="w-[38%]">
                <template #body="{ data }">
                    <div class="w-60">
                        <div class="mb-1 flex items-center justify-between text-[10px] text-slate-600">
                            <span>{{ data.program }}</span>
                            <span>{{ data.progress }} %</span>
                        </div>
                        <ProgressBar :value="data.progress" :showValue="false" class="!h-1.5" />
                    </div>
                </template>
            </Column>

            <Column header="Aktion" headerClass="w-[11%]">
                <template #body="{ data }">
                    <Button
                        v-if="data.id === 3"
                        ref="activeMenuButton"
                        icon="pi pi-ellipsis-h"
                        variant="text"
                        severity="secondary"
                        aria-label="Aktionen für Lisa Weber"
                        class="!h-7 !w-7 !bg-slate-100"
                        @click="toggleActions"
                    />
                    <Button
                        v-else
                        icon="pi pi-ellipsis-h"
                        variant="text"
                        severity="secondary"
                        :aria-label="`Aktionen für ${data.name}`"
                        class="!h-7 !w-7"
                        @click="toggleActions"
                    />
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover" appendTo="body" :dismissable="true">
            <div class="flex w-44 flex-col gap-2">
                <Button
                    label="Profil bearbeiten"
                    icon="pi pi-pencil"
                    variant="outlined"
                    severity="secondary"
                    size="small"
                    fluid
                    class="!justify-start"
                    @click="hideActions"
                />
                <Button
                    label="Status ändern"
                    icon="pi pi-flag"
                    variant="outlined"
                    severity="secondary"
                    size="small"
                    fluid
                    class="!justify-start"
                    @click="hideActions"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    variant="outlined"
                    severity="secondary"
                    size="small"
                    fluid
                    class="!justify-start"
                    @click="hideActions"
                />
                <Button
                    label="Deaktivieren"
                    icon="pi pi-trash"
                    variant="outlined"
                    severity="secondary"
                    size="small"
                    fluid
                    class="!justify-start"
                    @click="hideActions"
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
const activeMenuButton = ref();

const users = ref([
    {
        id: 1,
        initial: 'M',
        name: 'Max Mustermann',
        status: 'In Prüfung',
        severity: 'danger',
        program: 'Zertifizierung',
        progress: 45
    },
    {
        id: 2,
        initial: 'A',
        name: 'Anna Schmidt',
        status: 'Aktiv',
        severity: 'success',
        program: 'Onboarding',
        progress: 87
    },
    {
        id: 3,
        initial: 'L',
        name: 'Lisa Weber',
        status: 'Inaktiv',
        severity: 'warn',
        program: 'Onboarding',
        progress: 4
    },
    {
        id: 4,
        initial: 'P',
        name: 'Paul Müller',
        status: 'Inaktiv',
        severity: 'warn',
        program: 'Onboarding',
        progress: 11
    }
]);

const toggleActions = (event) => {
    actionsPopover.value.toggle(event);
};

const hideActions = () => {
    actionsPopover.value.hide();
};

onMounted(async () => {
    await nextTick();

    const button = Array.isArray(activeMenuButton.value)
        ? activeMenuButton.value[0]
        : activeMenuButton.value;

    if (button?.$el) {
        actionsPopover.value.show({ currentTarget: button.$el });
    }
});
</script>