<template>
    <div class="min-h-[410px] bg-white p-6 font-[Inter] text-slate-700">
        <DataTable
            :value="users"
            dataKey="id"
            class="w-[728px]"
            tableStyle="width: 728px; table-layout: fixed"
            :pt="{
                table: { class: 'border-collapse' }
            }"
        >
            <Column
                header="Nutzer"
                headerStyle="width: 256px; padding: 10px 14px; border-bottom: 1px solid #e2e8f0"
                bodyStyle="width: 256px; padding: 10px 14px; border-bottom: 1px solid #e2e8f0"
            >
                <template #body="{ data }">
                    <div class="flex items-center gap-3">
                        <Avatar
                            :label="data.initial"
                            shape="circle"
                            class="!h-7 !w-7 !bg-slate-200 !text-sm !font-normal !text-slate-600"
                        />
                        <span class="text-sm">{{ data.name }}</span>
                    </div>
                </template>
            </Column>

            <Column
                header="Status"
                headerStyle="width: 108px; padding: 10px 14px; border-bottom: 1px solid #e2e8f0"
                bodyStyle="width: 108px; padding: 10px 14px; border-bottom: 1px solid #e2e8f0"
            >
                <template #body="{ data }">
                    <Tag
                        :value="data.status"
                        :severity="data.statusSeverity"
                        class="!px-2 !py-0.5 !text-[12px] !font-bold"
                    />
                </template>
            </Column>

            <Column
                header="Fortschritt"
                headerStyle="width: 256px; padding: 10px 14px; border-bottom: 1px solid #e2e8f0"
                bodyStyle="width: 256px; padding: 10px 14px; border-bottom: 1px solid #e2e8f0"
            >
                <template #body="{ data }">
                    <div class="flex w-full flex-col gap-1">
                        <div class="flex items-end justify-between">
                            <span class="text-[10px] leading-3 text-slate-600">{{ data.progressLabel }}</span>
                            <span class="text-xs leading-4 text-slate-700">{{ data.progress }} %</span>
                        </div>
                        <ProgressBar
                            :value="data.progress"
                            :showValue="false"
                            class="!h-1.5 !rounded-full"
                            :pt="{
                                value: { class: '!bg-emerald-500' }
                            }"
                        />
                    </div>
                </template>
            </Column>

            <Column
                header="Aktion"
                headerStyle="width: 108px; padding: 10px 14px; border-bottom: 1px solid #e2e8f0; text-align: center"
                bodyStyle="width: 108px; padding: 10px 14px; border-bottom: 1px solid #e2e8f0; text-align: center"
            >
                <template #body="{ data }">
                    <div class="flex justify-center">
                        <Button
                            :ref="(element) => setActionTrigger(element, data)"
                            icon="pi pi-ellipsis-h"
                            variant="text"
                            severity="secondary"
                            size="small"
                            aria-label="Aktionen anzeigen"
                            :class="[
                                '!h-7 !w-[35px] !p-0',
                                selectedUser?.id === data.id ? '!bg-slate-100' : ''
                            ]"
                            @click="toggleActions($event, data)"
                        />
                    </div>
                </template>
            </Column>
        </DataTable>

        <Popover ref="actionsPopover" class="!w-48" :pt="{ content: { class: '!p-2.5' } }">
            <div class="flex flex-col gap-2">
                <Button
                    label="Profil bearbeiten"
                    icon="pi pi-pencil"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    class="!h-[33px] !w-full !justify-start !text-sm"
                    @click="closeActions"
                />
                <Button
                    label="Status ändern"
                    icon="pi pi-flag"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    class="!h-[33px] !w-full !justify-start !text-sm"
                    @click="closeActions"
                />
                <Button
                    label="Duplizieren"
                    icon="pi pi-clone"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    class="!h-[33px] !w-full !justify-start !text-sm"
                    @click="closeActions"
                />
                <Button
                    label="Deaktivieren"
                    icon="pi pi-trash"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    class="!h-[33px] !w-full !justify-start !text-sm"
                    @click="closeActions"
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

const actionsPopover = ref();
const selectedUser = ref(users.value[2]);
const activeActionTrigger = ref();

const setActionTrigger = (element, user) => {
    if (user.id === 3) {
        activeActionTrigger.value = element;
    }
};

const toggleActions = (event, user) => {
    selectedUser.value = user;
    actionsPopover.value.toggle(event);
};

const closeActions = () => {
    actionsPopover.value.hide();
};

onMounted(() => {
    nextTick(() => {
        if (activeActionTrigger.value?.$el) {
            actionsPopover.value.show({
                currentTarget: activeActionTrigger.value.$el
            });
        }
    });
});
</script>