<template>
    <div class="flex w-[264px] flex-col gap-2.5 bg-white p-6">
        <div class="flex w-[216px] flex-col gap-0.5">
            <Select
                v-model="selectedAssignee"
                :options="filteredAssignees"
                optionLabel="name"
                placeholder="Verantwortlichen aus."
                showClear
                fluid
                class="h-[33px] text-sm"
                aria-label="Verantwortlichen auswählen"
            >
                <template #header>
                    <div class="flex flex-col px-2.5 pb-[3.5px] pt-[7px]">
                        <div class="relative">
                            <InputText
                                v-model="searchQuery"
                                placeholder="Suche..."
                                variant="filled"
                                fluid
                                class="h-[33px] pr-9 text-sm"
                                aria-label="Verantwortliche suchen"
                            />
                            <i
                                class="pi pi-search pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </template>
            </Select>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

const selectedAssignee = ref(null);
const searchQuery = ref('');

const assignees = ref([
    { name: 'Max Mustermann' },
    { name: 'Anna Schmidt' },
    { name: 'Lisa Weber' },
    { name: 'Paul Müller' }
]);

const filteredAssignees = computed(() => {
    const query = searchQuery.value.trim().toLocaleLowerCase();

    if (!query) {
        return assignees.value;
    }

    return assignees.value.filter((assignee) =>
        assignee.name.toLocaleLowerCase().includes(query)
    );
});
</script>