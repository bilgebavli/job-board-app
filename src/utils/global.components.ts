
import type { App } from 'vue'


import JbCard from '@/components/ui/JbCard';
import JbPagination from '@/components/ui/JbPagination';
import JbButton from '@/components/ui/JbButton';
import JbDivider from '@/components/ui/JbDivider';
import JbImage from '@/components/ui/JbImage';
import JbSelect from '@/components/controls/JbSelect';
import JbInput from '@/components/controls/JbInput';

const components = [
  { name: 'JbCard', component: JbCard },
  { name: 'JbPagination', component: JbPagination },
  { name: 'JbButton', component: JbButton },
  { name: 'JbDivider', component: JbDivider },
  { name: 'JbImage', component: JbImage },
  { name: 'JbSelect', component: JbSelect },
  { name: 'JbInput', component: JbInput },
]
export default {
  install(app: App) {
    components.forEach(({ name, component }) => {
      app.component(name, component)
    })
  }
}