<template>
  <Dialog
    v-model:visible="profileVisible"
    modal
    :closable="false"
    :draggable="false"
    :pt="{
      root: 'w-full max-w-[512px] overflow-visible rounded-xl',
      header: '!p-0',
      content: '!overflow-visible !p-0',
      footer: '!p-0',
    }"
  >
    <template #header>
      <div class="flex w-full items-center justify-between px-[17px] py-[17px]">
        <div class="flex items-center gap-3">
          <Avatar label="M" shape="circle" class="!h-7 !w-7 !text-sm" />
          <div class="flex flex-col">
            <span class="text-sm">Max Mustermann</span>
            <span class="text-[10px] font-light">Manager</span>
          </div>
        </div>
        <div class="flex items-center gap-6">
          <Tag value="Aktiv" severity="success" class="!text-xs" />
          <Button
            icon="pi pi-times"
            severity="secondary"
            text
            rounded
            aria-label="Schließen"
            @click="profileVisible = false"
          />
        </div>
      </div>
    </template>

    <Tabs value="personal" class="px-[17px]">
      <TabList>
        <Tab value="personal">Persönliche Daten</Tab>
        <Tab value="settings">Einstellungen</Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="personal">
          <div class="flex flex-col gap-4 px-1 pt-3">
            <div class="flex flex-col gap-2">
              <label for="name">Name</label>
              <InputText v-model="name" input-id="name" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="email">E-Mail</label>
              <InputText v-model="email" input-id="email" type="email" class="w-full" />
            </div>

            <div class="flex flex-col gap-2">
              <label for="role">Rolle</label>
              <Select
                ref="roleSelect"
                v-model="role"
                input-id="role"
                :options="roles"
                class="w-full"
                append-to="self"
              />
            </div>

            <div class="flex items-center gap-2">
              <Checkbox v-model="active" input-id="active" binary />
              <label for="active">Ist aktiv</label>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="settings">
          <div class="px-1 pt-3"></div>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <template #footer>
      <div class="flex justify-end gap-2 px-[17px] pb-[17px] pt-4">
        <Button label="Abbrechen" severity="secondary" @click="profileVisible = false" />
        <Button label="Speichern" severity="primary" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
  import { nextTick, onMounted, ref } from 'vue'
  import Avatar from 'primevue/avatar'
  import Button from 'primevue/button'
  import Checkbox from 'primevue/checkbox'
  import Dialog from 'primevue/dialog'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import Tab from 'primevue/tab'
  import TabList from 'primevue/tablist'
  import TabPanel from 'primevue/tabpanel'
  import TabPanels from 'primevue/tabpanels'
  import Tabs from 'primevue/tabs'
  import Tag from 'primevue/tag'

  const profileVisible = ref(true)
  const name = ref('Max Mustermann')
  const email = ref('max@example.com')
  const role = ref('Manager')
  const active = ref(true)
  const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
  const roleSelect = ref<InstanceType<typeof Select> | null>(null)

  onMounted(async () => {
    await nextTick()
    roleSelect.value?.show()
  })
</script>