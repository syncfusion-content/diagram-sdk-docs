const notifyStep = {
    id: 'notify', stepType: 'Notify',
    props: {
        channel: 'Email',
        to: '{{$.nodes.getCustomer.response.body.email}}',
        subject: 'Order {{$.variables.orderId}}',
        message: 'Total: {{$.previousStep.response.body.total}}'
    }
};
