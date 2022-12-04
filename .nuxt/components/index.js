export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const AboutBanner = () => import('../../components/about/Banner.vue' /* webpackChunkName: "components/about-banner" */).then(c => wrapFunctional(c.default || c))
export const AboutCareer = () => import('../../components/about/Career.vue' /* webpackChunkName: "components/about-career" */).then(c => wrapFunctional(c.default || c))
export const AboutOurMission = () => import('../../components/about/OurMission.vue' /* webpackChunkName: "components/about-our-mission" */).then(c => wrapFunctional(c.default || c))
export const AboutOurTeams = () => import('../../components/about/OurTeams.vue' /* webpackChunkName: "components/about-our-teams" */).then(c => wrapFunctional(c.default || c))
export const FormInput = () => import('../../components/form/Input.vue' /* webpackChunkName: "components/form-input" */).then(c => wrapFunctional(c.default || c))
export const HomeBanner = () => import('../../components/home/Banner.vue' /* webpackChunkName: "components/home-banner" */).then(c => wrapFunctional(c.default || c))
export const HomeBannerService = () => import('../../components/home/BannerService.vue' /* webpackChunkName: "components/home-banner-service" */).then(c => wrapFunctional(c.default || c))
export const HomeCarousel = () => import('../../components/home/Carousel.vue' /* webpackChunkName: "components/home-carousel" */).then(c => wrapFunctional(c.default || c))
export const HomeExpedition = () => import('../../components/home/Expedition.vue' /* webpackChunkName: "components/home-expedition" */).then(c => wrapFunctional(c.default || c))
export const HomeFormPrice = () => import('../../components/home/FormPrice.vue' /* webpackChunkName: "components/home-form-price" */).then(c => wrapFunctional(c.default || c))
export const HomeService = () => import('../../components/home/Service.vue' /* webpackChunkName: "components/home-service" */).then(c => wrapFunctional(c.default || c))
export const MiscCheckList = () => import('../../components/misc/CheckList.vue' /* webpackChunkName: "components/misc-check-list" */).then(c => wrapFunctional(c.default || c))
export const MiscDownload = () => import('../../components/misc/Download.vue' /* webpackChunkName: "components/misc-download" */).then(c => wrapFunctional(c.default || c))
export const MiscModeButton = () => import('../../components/misc/ModeButton.vue' /* webpackChunkName: "components/misc-mode-button" */).then(c => wrapFunctional(c.default || c))
export const AboutOurMissionContent = () => import('../../components/about/our-mission/Content.vue' /* webpackChunkName: "components/about-our-mission-content" */).then(c => wrapFunctional(c.default || c))
export const AboutOurMissionList = () => import('../../components/about/our-mission/List.vue' /* webpackChunkName: "components/about-our-mission-list" */).then(c => wrapFunctional(c.default || c))
export const HomeCarouselContent = () => import('../../components/home/carousel/content.vue' /* webpackChunkName: "components/home-carousel-content" */).then(c => wrapFunctional(c.default || c))
export const HomeServiceCard = () => import('../../components/home/service/Card.vue' /* webpackChunkName: "components/home-service-card" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
