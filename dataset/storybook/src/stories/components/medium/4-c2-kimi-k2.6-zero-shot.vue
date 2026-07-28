<template>
  <div class="flex items-center p-6">
    <Breadcrumb :home="home" :model="items">
      <template #item="{ item, props }">
        <a
          v-if="!item.isMenu"
          :href="item.url"
          v-bind="props.action"
          class="flex items-center gap-1"
        >
          <span v-if="item.icon" :class="item.icon" />
          <span>{{ item.label }}</span>
        </a>
        <span v-else class="relative inline-flex items-center">
          <Button
            :label="item.label"
            severity="secondary"
            size="small"
            @click="toggleMenu"
            aria-haspopup="true"
            aria-controls="dashboard_menu"
          />
          <Menu
            ref="menu"
            id="dashboard_menu"
            :model="menuItems"
            :popup="true"
          />
        </span>
      </template>
      <template #separator>
        <span class="mx-2 text-surface-400">></span>
      </template>
    </Breadcrumb>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Breadcrumb from "primevue/breadcrumb";
import Button from "primevue/button";
import Menu from "primevue/menu";

const home = ref({
  icon: "pi pi-home",
  url: "/",
});

const items = ref([
  { label: "Projekt1", url: "#" },
  { label: "Gruppe1", icon: "pi pi-th-large", url: "#" },
  { label: "Dashboard anzeigen", isMenu: true },
]);

const menu = ref();
const menuItems = ref([{ label: "Dashboard 1" }, { label: "Dashboard 2" }]);

const toggleMenu = (event) => {
  menu.value.toggle(event);
};
</script>