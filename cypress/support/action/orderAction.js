import { dashboard, dashboardOrder } from '../PageObject/locators';

class DashboardOrder {
    addOrder() {

        cy.getBySel(dashboard.jubelio_logo, { timeout: 10000 }).should('be.visible').hold();


        cy.getBySel(dashboard.navbar_menu)
            .contains('Penjualan')
            .should('be.visible')
            .click({ force: true })
            .hold();

        cy.getBySel(dashboard.navbar_sub_menu)
            .contains('Transaksi Penjualan')
            .should('be.visible')
            .click({ force: true })
            .hold();


        cy.getBySel(dashboardOrder.title)
            .contains('Transaksi Penjualan')
            .should('be.visible');

        cy.getBySel(dashboardOrder.right_icon)
            .should('be.visible')
            .click();

        cy.getBySel(dashboardOrder.btn_add)
            .should('be.visible')
            .click();

        cy.getBySel(dashboardOrder.choose_pelanggan)
            .click()
            .type('BLANJA');
        cy.contains('BLANJA').click();

        cy.getBySel(dashboardOrder.referensi)
            .click()
            .type('123456789{enter}', { force: true });

        cy.getBySel(dashboardOrder.choose_lokasi)
            .click({ force: true })
            .type('Pusat');
        cy.contains('Pusat').click();

        cy.getBySel(dashboardOrder.keterangan)
            .click({ force: true })
            .type('Automation Test');

        cy.getBySel(dashboardOrder.add_product)
            .click({ force: true });

        cy.getBySel(dashboardOrder.product)
            .click({ force: true });

        cy.getBySel(dashboardOrder.validate_product)
            .should('be.visible');

        cy.getBySel(dashboardOrder.btn_save)
            .click({ force: true });


        cy.getBySel(dashboardOrder.title)
            .contains('Transaksi Penjualan')
            .should('be.visible');
    }

    editOrder() {

        cy.getBySel(dashboardOrder.filter)
            .contains('Semua')
            .should('be.visible')
            .click();


        cy.saveSeparatedValuesToJson('.d-flex.flex-column.css-1veboq3', 'orderNumber.json');


        cy.fixture('orderNumber.json').then((data) => {

            const searchValue = data.data1;
            cy.log(searchValue)


            cy.getBySel('.d-flex.flex-column.css-1veboq3')
                .contains(searchValue)
                .should('be.visible')
                .click();


            cy.getBySel(dashboardOrder.btn_edit)
                .should('be.visible')
                .click();

            cy.getBySel(dashboardOrder.keterangan)
                .click({ force: true })
                .clear()
                .type('Automation Test Edit');

            cy.getBySel(dashboardOrder.btn_save)
                .click({ force: true });


            cy.getBySel(dashboardOrder.title)
                .contains('Transaksi Penjualan')
                .should('be.visible');
        });
    }

    searchPesanan() {

        cy.getBySel(dashboard.jubelio_logo, { timeout: 10000 }).should('be.visible').hold();


        cy.getBySel(dashboard.navbar_menu)
            .contains('Penjualan')
            .should('be.visible')
            .click({ force: true })
            .hold();

        cy.getBySel(dashboard.navbar_sub_menu)
            .contains('Transaksi Penjualan')
            .should('be.visible')
            .click({ force: true })
            .hold();


        cy.getBySel(dashboardOrder.title)
            .contains('Transaksi Penjualan')
            .should('be.visible');

        cy.getBySel(dashboardOrder.right_icon)
            .should('be.visible')
            .click();


        cy.getBySel(dashboardOrder.filter)
            .contains('Semua')
            .should('be.visible')
            .click();


        cy.fixture('orderNumber.json').then(({ data1 }) => {
            cy.log(data1);

            cy.getBySel(dashboardOrder.btn_search)
                .type(`${data1}{enter}`);


            cy.getBySel('.d-flex.flex-column.css-1veboq3')
                .contains(data1)
                .should('be.visible')
                .click()
                .hold(3)
        });
    }
}

export default new DashboardOrder();
