<script lang="ts" setup>
import AnalyticsAward from '@/views/dashboard/AnalyticsAward.vue'
import AnalyticsBarCharts from '@/views/dashboard/AnalyticsBarCharts.vue'
import AnalyticsDepositWithdraw from '@/views/dashboard/AnalyticsDepositWithdraw.vue'
import AnalyticsSalesByCountries from '@/views/dashboard/AnalyticsSalesByCountries.vue'
import AnalyticsTotalEarning from '@/views/dashboard/AnalyticsTotalEarning.vue'
import AnalyticsTotalProfitLineCharts from '@/views/dashboard/AnalyticsTotalProfitLineCharts.vue'
import AnalyticsTransactions from '@/views/dashboard/AnalyticsTransactions.vue'
import AnalyticsUserTable from '@/views/dashboard/AnalyticsUserTable.vue'
import AnalyticsWeeklyOverview from '@/views/dashboard/AnalyticsWeeklyOverview.vue'
import CardStatisticsVertical from '@core/components/cards/CardStatisticsVertical.vue'
</script>

<template>
  <VRow class="match-height">
    <VCol 
      cols="12" 
      md="3"
    >
      <AnalyticsAward />
    </VCol>

    <VCol 
      cols="12" 
      md="3"
    >
      <AnalyticsAward />
    </VCol>

    <VCol 
      cols="12" 
      md="6"
    >
      <AnalyticsTransactions />
    </VCol>

    <VCol 
      cols="12" 
      md="3"
    >
      <AnalyticsWeeklyOverview />
    </VCol>

    <VCol 
      cols="12" 
      md="3"
    >
      <AnalyticsTotalProfitLineCharts />
    </VCol>

    <VCol 
      cols="12" 
      md="6"
    >
      <AnalyticsSalesByCountries />
    </VCol>
  </VRow>
</template>
