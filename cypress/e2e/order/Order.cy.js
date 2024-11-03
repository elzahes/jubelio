import login from '../../support/action/login'
import pesanan from '../../support/action/orderAction'

describe("Jubelio Test", { testIsolation: true }, () => {
    let userdata
    beforeEach(() => {
        cy.fixture('test-data.json').then((user) => {
            userdata = user;
        });

    })

    it("Create and Edit Order", () => {
        const { environment, email, password } = userdata.user_data
        login.login(environment, email, password)
        pesanan.addOrder()
        pesanan.editOrder()
    })

    it("Search Pesanan", () => {
        const { environment, email, password } = userdata.user_data
        login.login(environment, email, password)
        pesanan.searchPesanan()
    })

})
