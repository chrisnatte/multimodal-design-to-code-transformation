<template>
    <Dialog
        v-model:visible="visible"
        modal
        header="Profil bearbeiten"
        :style="{ width: '24rem' }"
        :draggable="false"
        :dismissableMask="false"
        @hide="selectOpen = false"
    >
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <label for="name" class="text-sm text-surface-700">Name</label>
                <InputText id="name" v-model="name" fluid />
            </div>

            <div class="flex flex-col gap-2">
                <label for="role" class="text-sm text-surface-700">Rolle</label>
                <Select
                    ref="roleSelect"
                    inputId="role"
                    v-model="role"
                    :options="roles"
                    optionLabel="label"
                    fluid
                    @show="selectOpen = true"
                    @hide="selectOpen = false"
                />
            </div>

            <div class="flex items-center gap-2 mt-1">
                <Checkbox v-model="active" inputId="active" binary />
                <label for="active" class="text-sm text-surface-700">Ist aktiv</label>
            </div>

            <div class="flex justify-end items-center gap-4 mt-1">
                <Button label="Abbrechen" severity="secondary" text @click="visible = false" />
                <Button label="Speichern" @click="visible = false" />
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const visible = ref(true)
const selectOpen = ref(false)
const name = ref('Max Mustmann')
const active = ref(false)
const roles = ref([
    { label: 'Administrator' },
    { label: 'Projektleiter' },
    { label: 'Gast' }
])
const role = ref(roles.value[0])
const roleSelect = ref()

onMounted(async () => {
    await nextTick()
    window.setTimeout(() => {
        roleSelect.value?.show?.()
    }, 100)
})
</script>