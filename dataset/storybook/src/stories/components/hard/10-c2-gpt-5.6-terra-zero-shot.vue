<template>
    <div class="w-full p-6">
        <div class="max-w-[728px]">
            <DataTable :value="users" dataKey="name" size="small" tableStyle="width: 100%">
                <Column header="Nutzer" style="width: 36%">
                    <template #body="{ data }">
                        <div class="flex items-center gap-3">
                            <Avatar :label="data.initials" shape="circle" class="bg-surface-200 text-surface-600" />
                            <span class="text-sm text-surface-700">{{ data.name }}</span>
                        </div>
                    </template>
                </Column>

                <Column header="Status" style="width: 15%">
                    <template #body="{ data }">
                        <Tag :value="data.status" :severity="data.severity" class="text-xs" />
                    </template>
                </Column>

                <Column header="Fortschritt" style="width: 38%">
                    <template #body="{ data }">
                        <div class="flex w-60 flex-col gap-1">
                            <div class="flex items-center justify-between text-[10px] text-surface-600">
                                <span>{{ data.course }}</span>
                                <span>{{ data.progress }} %</span>
                            </div>
                            <ProgressBar :value="data.progress" :showValue="false" class="h-1.5" />
                        </div>
                    </template>
                </Column>

                <Column header="Aktion" style="width: 11%">
                    <template #body="{ data }">
                        <Button
                            v-if="data.name !== 'Lisa Weber'"
                            icon="pi pi-ellipsis-h"
                            variant="text"
                            severity="secondary"
                            rounded
                            size="small"
                            :aria-label="`Aktionen für ${data.name}`"
                            @click="toggleMenu"
                        />
                        <Button
                            v-else
                            ref="actionButton"
                            icon="pi pi-ellipsis-h"
                            variant="text"
                            severity="secondary"
                            rounded
                            size="small"
                            :aria-label="`Aktionen für ${data.name}`"
                            @click="toggleMenu"
                        />
                    </template>
                </Column>
            </DataTable>
        </div>

        <Popover ref="actionMenu" :dismissable="false">
            <div class="flex w-42 flex-col gap-2">
                <Button
                    label="Profil bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="justify-start"
                    @click="hideMenu"
                />
                <Button
                    label="Status ändern"
                    icon="pi pi-flag"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="justify-start"
                    @click="hideMenu"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="justify-start"
                    @click="hideMenu"
                />
                <Button
                    label="Deaktivieren"
                    icon="pi pi-trash"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    fluid
                    class="justify-start"
                    @click="hideMenu"
                />
            </div>
        </Popover>
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Popover from 'primevue/popover';
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';

const actionMenu = ref();
const actionButton = ref();

const users = ref([
    {
        initials: 'M',
        name: 'Max Mustermann',
        status: 'In Prüfung',
        severity: 'danger',
        course: 'Zertifizierung',
        progress: 45
    },
    {
        initials: 'A',
        name: 'Anna Schmidt',
        status: 'Aktiv',
        severity: 'success',
        course: 'Onboarding',
        progress: 87
    },
    {
        initials: 'L',
        name: 'Lisa Weber',
        status: 'Inaktiv',
        severity: 'warn',
        course: 'Onboarding',
        progress: 4
    },
    {
        initials: 'P',
        name: 'Paul Müller',
        status: 'Inaktiv',
        severity: 'warn',
        course: 'Onboarding',
        progress: 11
    }
]);

const toggleMenu = (event) => {
    actionMenu.value.toggle(event);
};

const hideMenu = () => {
    actionMenu.value.hide();
};

onMounted(async () => {
    await nextTick();

    if (actionButton.value?.$el) {
        actionMenu.value.show({ currentTarget: actionButton.value.$el });
    }
});
</script>