export default function readFile (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      console.log(reader.result)
    }
    reader.readAsText(file)
  })
}
