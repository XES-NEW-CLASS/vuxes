/**
 * bem helper
 * bem() // 'button'
 * bem('text') // 'button__text'
 * bem({ disabled }) // 'button button--disabled'
 * bem('text', { disabled }) // 'button__text button__text--disabled'
 * bem(['disabled', 'primary']) // 'button button--disabled button--primary'
 */

const element = '__'
const modifier = '--'

const join = (name, el, symbol) => (el ? name + symbol + el : name)

const prefix = (name, mods) => {
  if (typeof mods === 'string') {
    return join(name, mods, modifier)
  }

  if (Array.isArray(mods)) {
    return mods.map(item => prefix(name, item))
  }

  const ret = {}
  mods && Object.keys(mods).forEach(key => {
    ret[name + modifier + key] = mods[key]
  })
  return ret
}

export default {
  methods: {
    bem (el, mods) {
      const { name } = this.$options

      if (el && typeof el !== 'string') {
        mods = el
        el = ''
      }
      el = join(name, el, element)

      return mods ? [el, prefix(el, mods)] : el
    }
  }
}
