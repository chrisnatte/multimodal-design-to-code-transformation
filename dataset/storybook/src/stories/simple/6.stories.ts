import SimpleComponentFileUploadStatus from './6.vue'
import SimpleComponentFileUploadStatusMethodA from './6-a.vue'

export default {
  title: 'Simple/6-File-Upload-Status',
  component: SimpleComponentFileUploadStatus,
}

export const Default = {}

export const MethodA = {
  render: () => ({
    components: { SimpleComponentFileUploadStatusMethodA },
    template: '<SimpleComponentFileUploadStatusMethodA />',
  }),
}
