export const bodyAnimation = {
  initial: 'collapsed',
  animate: 'open',
  exit: 'exit',
  transition: { duration: 0.8, type: 'tween' },
  variants: {
    open: { opacity: 1, height: 'auto'},
    collapsed: {opacity: 0, height: 0},
    exit: {opacity: 0, height: 0}
  }
}

