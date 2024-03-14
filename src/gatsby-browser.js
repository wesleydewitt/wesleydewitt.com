export const onRouteUpdate = loc => {
    const { state } = loc.location
  
    if (state && state.refocusId) {
      const elem = document.getElementById(state.refocusId)
  
      if (elem) {
        elem.focus()
      }
    }
  }