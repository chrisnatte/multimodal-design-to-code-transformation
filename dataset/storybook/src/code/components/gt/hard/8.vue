<template>
  <Card
    :pt="{
      root: 'w-full max-w-lg overflow-hidden',
      header: 'absolute',
      body: '!p-0 !pb-4',
      footer: 'flex justify-end gap-2 px-4',
    }"
  >
    <template #header>
      <!--<img src="/images/primevue.png" alt="primevue" />-->
    </template>

    <template #content>
      <Tabs value="0">
        <TabList>
          <Tab value="0">Beschreibung</Tab>
          <Tab value="1">Spezifikationen</Tab>
          <Tab value="2">Bewertungen</Tab>
        </TabList>

        <TabPanels>
          <TabPanel value="0" class="flex flex-col gap-2 px-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <div class="flex flex-wrap items-center gap-2">
              <Tag value="4K UHD" severity="secondary" />
              <Tag value="IPS-Panel" severity="primary" />
              <Tag value="USB-C" severity="danger" />
              <Tag value="99% sRGB" severity="warn" />
              <Tag value="32 Zoll" severity="primary" />
            </div>
          </TabPanel>

          <TabPanel value="1">
            <Accordion>
              <AccordionPanel value="0">
                <AccordionHeader>Display</AccordionHeader>
                <AccordionContent
                  :pt="{
                    content: 'flex flex-col gap-1',
                  }"
                >
                  <div class="flex items-center justify-between">
                    <span>Auflösung</span>
                    <span class="font-semibold">3840 × 2160 px</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span>Art</span>
                    <span class="font-semibold">IPS-Panel</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span>Größe</span>
                    <span class="font-semibold">32 Zoll</span>
                  </div>
                </AccordionContent>
              </AccordionPanel>

              <AccordionPanel value="1">
                <AccordionHeader>Anschlüsse</AccordionHeader>
                <AccordionContent></AccordionContent>
              </AccordionPanel>

              <AccordionPanel value="2">
                <AccordionHeader>Stromverbrauch</AccordionHeader>
                <AccordionContent></AccordionContent>
              </AccordionPanel>
            </Accordion>
          </TabPanel>

          <TabPanel value="2">
            <p class="opacity-50">Noch keine Bewertungen vorhanden.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </template>

    <template #footer>
      <Button label="Merken" severity="secondary" />
      <Button label="In den Warenkorb" icon="pi pi-cart-plus" severity="primary" />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import Tab from 'primevue/tab'
  import Tag from 'primevue/tag'
  import Card from 'primevue/card'
  import Tabs from 'primevue/tabs'
  import Button from 'primevue/button'
  import TabList from 'primevue/tablist'
  import TabPanel from 'primevue/tabpanel'
  import TabPanels from 'primevue/tabpanels'
  import Accordion from 'primevue/accordion'
  import AccordionPanel from 'primevue/accordionpanel'
  import AccordionHeader from 'primevue/accordionheader'
  import AccordionContent from 'primevue/accordioncontent'
</script>
