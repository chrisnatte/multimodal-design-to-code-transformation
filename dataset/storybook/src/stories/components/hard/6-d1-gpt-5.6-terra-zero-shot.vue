<template>
  <div class="flex min-h-[266px] w-[264px] items-start bg-white p-6 font-sans">
    <div class="flex w-[216px] flex-col gap-0.5">
      <div class="relative">
        <InputText
          v-model="selectedPerson"
          readonly
          placeholder="Verantwortlichen aus."
          class="h-[33px] w-full !rounded-md !border-[#10b981] !py-[7px] !pl-[10.5px] !pr-[55px] text-sm !text-slate-600 shadow-none"
          @click="isOpen = !isOpen"
        />

        <div class="absolute inset-y-0 right-0 flex items-center">
          <Button
            v-if="selectedPerson"
            icon="pi pi-times"
            text
            rounded
            aria-label="Auswahl löschen"
            class="!h-[31px] !w-[28px] !p-0 !text-slate-400"
            @click.stop="selectedPerson = ''"
          />
          <Button
            icon="pi pi-chevron-down"
            text
            rounded
            aria-label="Auswahl öffnen"
            class="!h-[31px] !w-[35px] !p-0 !text-slate-400"
            @click.stop="isOpen = !isOpen"
          />
        </div>
      </div>

      <div
        v-if="isOpen"
        class="flex w-full flex-col rounded-md border border-slate-200 bg-white shadow-md"
      >
        <div class="flex flex-col px-[10.5px] pb-[3.5px] pt-[7px]">
          <div class="relative">
            <InputText
              v-model="searchQuery"
              placeholder="Suche..."
              class="h-[33px] w-full !rounded-md !border-[#cbd5e1] !bg-[#f8fafc] !py-[7px] !pl-[10.5px] !pr-10 text-sm shadow-none"
            />
            <i class="pi pi-search absolute right-[11px] top-1/2 -translate-y-1/2 text-sm text-slate-400" />
          </div>
        </div>

        <div class="flex flex-col gap-0.5 px-[3.5px] pb-[3.5px] pt-[3.5px]">
          <Button
            v-for="person in filteredPeople"
            :key="person"
            :label="person"
            text
            class="!h-[31px] !w-full !justify-start !rounded-md !px-[10.5px] !py-[7px] !text-left !text-sm !font-normal !text-slate-700 hover:!bg-slate-100"
            @click="selectPerson(person)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const selectedPerson = ref('')
const searchQuery = ref('')
const isOpen = ref(true)

const people = ['Max Mustermann', 'Anna Schmidt', 'Lisa Weber', 'Paul Müller']

const filteredPeople = computed(() => {
  const query = searchQuery.value.trim().toLocaleLowerCase('de')

  if (!query) {
    return people
  }

  return people.filter((person) => person.toLocaleLowerCase('de').includes(query))
})

const selectPerson = (person) => {
  selectedPerson.value = person
  isOpen.value = false
}
</script>