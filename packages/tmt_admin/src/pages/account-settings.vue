<script lang="ts" setup>
import { useRoute } from 'vue-router'
import AccountSettingsAccount from '@/views/pages/account-settings/AccountSettingsAccount.vue'
import AccountSettingsBilling from '@/views/pages/account-settings/AccountSettingsBilling.vue'
import AccountSettingsConnection from '@/views/pages/account-settings/AccountSettingsConnection.vue'
import AccountSettingsNotification from '@/views/pages/account-settings/AccountSettingsNotification.vue'
import AccountSettingsSecurity from '@/views/pages/account-settings/AccountSettingsSecurity.vue'

const route = useRoute()

const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  { title: 'Account', icon: 'ri-group-line', tab: 'account' },
  { title: 'Security', icon: 'ri-lock-line', tab: 'security' },
  { title : 'Billing & Plan', icon: 'ri-bookmark-line', tab: 'billing'},
  { title: 'Notifications', icon: 'ri-notification-3-line', tab: 'notification' },
  { title: 'Connections', icon: 'ri-link-m', tab: 'connections'},
]
</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
      show-arrows
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="mt-5 disable-tab-transition"
      :touch="false"
    >
      <!-- Account -->
      <VWindowItem value="account">
        <AccountSettingsAccount />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="security">
        <AccountSettingsSecurity />
      </VWindowItem>

      <!-- Billing & Plan -->
      <VWindowItem value="billing">
        <AccountSettingsBilling />
      </VWindowItem>

      <!-- Notification -->
      <VWindowItem value="notification">
        <AccountSettingsNotification />
      </VWindowItem>

      <!-- Connections -->
      <VWindowItem value="connections">
        <AccountSettingsConnection />
      </VWindowItem>
    </VWindow>
  </div>
</template>
