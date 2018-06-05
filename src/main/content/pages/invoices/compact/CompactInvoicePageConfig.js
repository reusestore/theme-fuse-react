import CompactInvoicePage from 'main/content/pages/invoices/compact/CompactInvoicePage';

export const CompactInvoicePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/pages/invoices/compact',
            component: CompactInvoicePage
        }
    ]
};
