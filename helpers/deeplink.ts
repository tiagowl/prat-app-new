import dynamicLinks from '@react-native-firebase/dynamic-links'

export const getInitialLink = async () => {
    const link = await dynamicLinks().getInitialLink()
    if (Boolean(link) && Boolean(link.url)) {
      return link.url
    }
    return null
}