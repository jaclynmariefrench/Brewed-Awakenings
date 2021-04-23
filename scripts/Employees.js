import { getEmployees, getOrders } from "./database.js"

const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employees")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {

                    const employeeOrders = orders.filter(order => order.employeeId === employee.id)  // <--- Go to YouTube and search "javascript array filter"

                    window.alert(` ${employee.name} sold ${employeeOrders.length} products `)
                }
            }
        }
    }
)


const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employees--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

