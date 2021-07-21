
const dateFormatter = {
    formatDate: (dataValue) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
        }
        return new Date(dataValue).toLocaleDateString([],options)
    }
}
//console.log(formatDate(dataValue))
export default dateFormatter