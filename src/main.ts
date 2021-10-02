export const delayMillis = async (delayMs: number): Promise<void> => (
  await new Promise(resolve => setTimeout(resolve, delayMs))
)

export const greet = (name: string): string => `Bonjour ${name} !`

export const foo = async (): Promise<boolean> => {
  console.log(greet('le monde'))
  await delayMillis(1000)
  console.log('fini')
  return true
}

export const main = async (): Promise<void> => {

}
