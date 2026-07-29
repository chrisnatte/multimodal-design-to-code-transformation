<template>
    <Dialog
        v-model:visible="dialogVisible"
        modal
        header="Profil bearbeiten"
        :draggable="false"
        :style="{ width: '24rem' }"
    >
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <label for="profile-name" class="text-sm text-surface-700">Name</label>
                <InputText id="profile-name" v-model="name" fluid />
            </div>

            <div class="flex flex-col gap-2">
                <label for="profile-role" class="text-sm text-surface-700">Rolle</label>
                <Select
                    ref="roleSelect"
                    inputId="profile-role"
                    v-model="role"
                    :options="roles"
                    fluid
                />
            </div>

            <div class="flex items-center gap-2">
                <Checkbox v-model="isActive" inputId="active-status" binary />
                <label for="active-status" class="text-sm text-surface-700">Ist aktiv</label>
            </div>
        </div>

        <template #footer>
            <div class="flex items-center justify-end gap-2">
                <Button
                    label="Abbrechen"
                    severity="secondary"
                    variant="text"
                    @click="dialogVisible = false"
                />
                <Button label="Speichern" @click="dialogVisible = false" />
            </div>
        </template>
    </Dialog>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const dialogVisible = ref(true)
const name = ref('Max Mustmann')
const role = ref('Administrator')
const isActive = ref(false)
const roleSelect = ref()

const roles = ref(['Administrator', 'Projektleiter', 'Gast'])

onMounted(async () => {
    await nextTick()
    setTimeout(() => {
        roleSelect.value?.show()
    }, 100)
})
</script>