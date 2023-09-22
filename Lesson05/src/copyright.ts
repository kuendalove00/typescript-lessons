
//1st
let year: HTMLElement | null
year = document.getElementById('year') as HTMLElement
let thisYear: string
thisYear = new Date().getFullYear().toString()
if (year) {
    year.setAttribute("datetime", thisYear)
    year.textContent = thisYear
}



//2nd Variations
/*const year = document.getElementById('year') as HTMLElement
const thisYear: string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear
*/
