const dataArr = ["Alexa skills", "Amazon Devices", "Amazon Fashion", "Amazon Fresh", "Amazon Pharmacy", "Appliances", "Apps & Games", "Audible Audiobooks", "Baby", "Beauty"]

function NavbarDropdownCategories() {
    const categories = dataArr.map((element, index) => {
        return (
            <option value={`item ${index + 1}`} key={index}>
                {element}
            </option>
        )
    })
    return (
        categories
    )
}


export default NavbarDropdownCategories;