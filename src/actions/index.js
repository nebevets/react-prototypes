export const updateTime = () => {
  return {
    type: 'UPDATE_TIME',
    newTime: new Date().toLocaleTimeString()
  }
}