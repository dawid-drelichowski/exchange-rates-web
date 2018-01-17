import {module} from 'qunit'
import {resolve} from 'rsvp'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'
import stubFirebase from '../helpers/stub-firebase'
import unstubFirebase from '../helpers/unstub-firebase'

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      stubFirebase()
      this.application = startApp()

      if (options.beforeEach) {
        return options.beforeEach.apply(this, arguments)
      }
    },

    afterEach() {
      unstubFirebase()
      const afterEach = options.afterEach && options.afterEach.apply(this, arguments)
      return resolve(afterEach).then(() => destroyApp(this.application))
    }
  })
}
