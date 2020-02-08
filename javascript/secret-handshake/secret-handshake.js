
export const commands = (num) => {
  const actions = [
    { value: 10000, action: '' },
    { value: 1000, action: 'jump' },
    { value: 100, action:'close your eyes'},
    { value: 10, action: 'double blink' },
    { value: 1, action: 'wink' }
  ]
  let binarySequence = parseInt(num.toString(2))
  const handShake = actions.reduce((handshake, action) => {
    if (binarySequence >= 10000) {
      action.action = 'reverse'
      binarySequence -= action.value
    }
    if (binarySequence - action.value >= 0) {
      handshake.unshift(action.action)
      binarySequence -= action.value
    }
    return handshake
  }, [])
  return actions[0].action ? handShake.reverse() : handShake
};
