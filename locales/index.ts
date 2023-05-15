// Locales
import enUS from './en-us'
import ptBR from './pt-br'
import get from 'lodash.get'
import { findBestLanguageTag, getTimeZone } from "react-native-localize";

const locales = { 'en-US': enUS, 'pt-BR': ptBR }

const getLocale = () => {
    const device = findBestLanguageTag(Object.keys(locales))

    if (Boolean(device) && Boolean(device.languageTag)) {
      return device.languageTag
    } else {
      return 'en-US'
    }
}

const getTimezone = () => {
    let timezone = getTimeZone()
    if (!Boolean(timezone)) {
      return 'America/Sao_Paulo'
    }
    return timezone
}

const getTranslate = (path, value) => {
    const locale = getLocale()
    const translation = locales[locale] || {}
  
    let text = get(translation, path, '@' + path)
  
    if (typeof value !== 'undefined') {
      if (isNaN(value)) {
        text = text(value)
      } else if (text.singular || text.plural) {
        text = value == 1 ? text.singular(value) : text.plural(value)
      }
    }
  
    return text
  }

export const locale = getLocale;
export const timezone = getTimezone;
export const t = getTranslate;


export default locales;

