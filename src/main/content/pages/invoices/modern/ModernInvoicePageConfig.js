import ModernInvoicePage from 'main/content/pages/invoices/modern/ModernInvoicePage';

export const ModernInvoicePageConfig = {
    settings: {
        layout: {}
    },
    routes  : [
        {
            path     : '/pages/invoices/modern',
            component: ModernInvoicePage
        }
    ]
};
