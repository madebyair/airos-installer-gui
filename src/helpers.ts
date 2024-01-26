export function fadeIn(ids: Array<string>, fun: (() => void) | undefined) : void {
    ids.forEach((id : string) : void => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.getElementById(id).classList.add(`fade-out`)
    })

    setTimeout(() => {
        if (fun) {
            fun()
        }
    }, 350)
}

export function gbToMb(gigabytes: number) : number {
    return gigabytes * 1024;
}