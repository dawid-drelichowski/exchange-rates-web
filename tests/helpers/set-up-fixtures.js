import {registerHelper} from '@ember/test'
import replaceAppRef from '../helpers/replace-app-ref'
import createOfflineRef from '../helpers/create-offline-ref'

export default registerHelper('setUpFixtures', (app, fixtures) => {
  return replaceAppRef(app, createOfflineRef(fixtures))
})
