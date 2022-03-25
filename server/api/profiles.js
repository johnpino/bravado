export default async (req, res) => {
    const response = await fetch('https://gist.githubusercontent.com/allaud/093aa499998b7843bb10b44ea6ea02dc/raw/c400744999bf4b308f67807729a6635ced0c8644/users.json')
    const data = await response.json()

    return data
}
