<template>
    <div class="relative h-[266px] w-[264px] bg-white">
        <div class="absolute left-6 top-6 w-[216px]">
            <div class="relative">
                <InputText
                    v-model="selectedResponsible"
                    placeholder="Verantwortlichen aus."
                    class="h-[33px] w-full pr-14 text-sm"
                    aria-label="Verantwortlichen auswählen"
                />
                <Button
                    icon="pi pi-times"
                    text
                    rounded
                    size="small"
                    class="absolute right-7 top-1/2 h-6 w-6 -translate-y-1/2 !text-slate-400"
                    aria-label="Auswahl löschen"
                    @click="selectedResponsible = ''"
                />
                <Button
                    icon="pi pi-chevron-down"
                    text
                    rounded
                    size="small"
                    class="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 !text-slate-400"
                    aria-label="Liste öffnen"
                />
            </div>

            <Card class="absolute left-0 top-9 w-[216px] overflow-hidden !rounded-md !border-0 !shadow-md">
                <template #content>
                    <div class="-m-[1.125rem] p-2.5">
                        <div class="relative mb-1">
                            <InputText
                                v-model="searchTerm"
                                placeholder="Suche..."
                                class="h-[34px] w-full pr-9 text-sm"
                                aria-label="Suche"
                            />
                            <i class="pi pi-search absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400"></i>
                        </div>

                        <Listbox
                            v-model="selectedPerson"
                            :options="filteredPeople"
                            class="!border-0 !bg-transparent"
                            list-style="max-height: 132px"
                        />
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'

const selectedResponsible = ref('')
const searchTerm = ref('')
const selectedPerson = ref(null)

const people = ref([
    'Max Mustermann',
    'Anna Schmidt',
    'Lisa Weber',
    'Paul Müller'
])

const filteredPeople = computed(() =>
    people.value.filter((person) =>
        person.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
)
</script>