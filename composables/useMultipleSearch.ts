export default function<T> (arr: Array<T> | undefined, searchStr: string = ''): Array<T> | undefined {
    if (!arr) {
        return
    }
    if (searchStr === '') {
        return arr
    }
    searchStr = searchStr.toLowerCase()

    const foundedArr: typeof arr = []
    arr.forEach( (arrItem) => {

        const queue = [...Object.values(arrItem)]
        while (queue.length) { // deep search
            const queueItem = queue.shift()
            if (typeof queueItem === (typeof [] || typeof {})) {
                queue.push(...queueItem)
                continue
            }

            if (typeof queueItem === typeof '') {
                if (queueItem.toLowerCase().indexOf(searchStr) > -1) {
                    foundedArr.push(arrItem)
                    break
                }
            }
        }
    })

    return foundedArr

}