export const Business = (businessyObject) => {
    return `
        <section class="business">
            <h2 class="business__name">${businessyObject.companyName}</h2>
            <div class="business__address">
                ${businessyObject.addressFullStreet}<br>
                ${businessyObject.addressCity}, ${businessyObject.addressStateCode} ${businessyObject.addressZipCode}
            </div>
        </section>
    `
}