<template>
    <div class="flex w-[264px] flex-col gap-2.5 bg-white p-6">
        <div class="flex w-[216px] flex-col gap-0.5">
            <Select
                v-model="selectedPerson"
                :options="people"
                optionLabel="name"
                placeholder="Verantwortlichen aus."
                showClear
                size="small"
                class="w-full border-emerald-500"
                aria-label="Verantwortlichen auswählen"
            >
                <template #value="slotProps">
                    <span v-if="!slotProps.value || slotProps.value.id === 'placeholder'" class="text-sm text-slate-500">
                        Verantwortlichen aus.
                    </span>
                    <span v-else class="text-sm">{{ slotProps.value.name }}</span>
                </template>
            </Select>

            <div class="flex flex-col rounded-md border border-slate-200 bg-white shadow-md">
                <div class="px-2.5 pb-1 pt-2">
                    <IconField class="w-full">
                        <InputText
                            v-model="searchTerm"
                            placeholder="Suche..."
                            variant="filled"
                            size="small"
                            class="w-full border-slate-300 bg-slate-50 text-sm"
                            aria-label="Verantwortliche suchen"
                        />
                        <InputIcon class="pi pi-search text-sm text-slate-400" />
                    </IconField>
                </div>

                <div class="flex flex-col gap-0.5 p-1">
                    <Button
                        v-for="person in filteredPeople"
                        :key="person.id"
                        :label="person.name"
                        variant="text"
                        severity="secondary"
                        size="small"
                        class="w-full justify-start px-2.5 py-1.5 text-left text-sm font-normal"
                        @click="selectedPerson = person"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

const selectedPerson = ref({ id: 'placeholder', name: 'Verantwortlichen aus.' });
const searchTerm = ref('');

const people = [
    { id: 'max', name: 'Max Mustermann' },
    { id: 'anna', name: 'Anna Schmidt' },
    { id: 'lisa', name: 'Lisa Weber' },
    { id: 'paul', name: 'Paul Müller' }
];

const filteredPeople = computed(() => {
    const query = searchTerm.value.trim().toLocaleLowerCase('de');

    if (!query) {
        return people;
    }

    return people.filter((person) => person.name.toLocaleLowerCase('de').includes(query));
});
</script>