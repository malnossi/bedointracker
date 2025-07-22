import { createI18n } from 'vue-i18n'

const userLocale = navigator.language || navigator.userLanguage || 'fr'

const locale = userLocale.split('-')[0]
const i18n = createI18n({
  locale: locale,
  fallbackLocale: 'ar',
  messages: {
    en: {
      message: {
        hello: 'days have passed since the Bedouins were voluntarily displaced from their villages without being allowed to return.'
      }
    },
    fr: {
      message: {
        hello: "Jours se sont écoulés depuis que les Bédouins ont été déplacés volontairement hors de leurs villages, sans qu’ils aient pu y retourner."
      }
    },
    ar: {
      message: {
        hello: 'يوم مرّ منذ أن تم نقل البدو طوعًا من قراهم دون السماح لهم بالعودة إليها'
      }
    }
  }
})

export default i18n;