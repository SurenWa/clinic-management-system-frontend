// third-party
// eslint-disable-next-line import/no-extraneous-dependencies
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconApps,
    IconUserCheck,
    IconBasket,
    IconMessages,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc,
    IconEmergencyBed,
    IconCoinRupee,
    IconCheckupList,
    IconMedicineSyrup,
    IconDeviceDesktopAnalytics
} from '@tabler/icons';

// constant
const icons = {
    IconApps,
    IconUserCheck,
    IconBasket,
    IconMessages,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc,
    IconEmergencyBed,
    IconCoinRupee,
    IconCheckupList,
    IconMedicineSyrup,
    IconDeviceDesktopAnalytics
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
    id: 'application',
    title: <FormattedMessage id="application" />,
    icon: icons.IconApps,
    type: 'group',
    children: [
        {
            id: 'analytics',
            title: 'Analytics',
            type: 'item',
            icon: icons.IconDeviceDesktopAnalytics,
            url: '/dashboard/analytics'
        },
        {
            id: 'users',
            title: <FormattedMessage id="users" />,
            type: 'collapse',
            icon: icons.IconUserCheck,
            children: [
                {
                    id: 'add-users',
                    title: 'Add User',
                    type: 'item',
                    url: '/dashboard/add-user'
                },
                {
                    id: 'view-users',
                    title: 'View Users',
                    type: 'item',
                    url: '/dashboard/view-users'
                },
                {
                    id: 'add-role',
                    title: 'Add Role',
                    type: 'item',
                    url: '/dashboard/add-role'
                },
                {
                    id: 'view-roles',
                    title: 'View Roles',
                    type: 'item',
                    url: '/dashboard/view-roles'
                },
                {
                    id: 'add-department',
                    title: 'Add Department',
                    type: 'item',
                    url: '/dashboard/add-department'
                },
                {
                    id: 'view-departments',
                    title: 'View Departments',
                    type: 'item',
                    url: '/dashboard/view-departments'
                }
            ]
        },
        {
            id: 'patient',
            title: 'Patients',
            type: 'collapse',
            icon: icons.IconEmergencyBed,
            children: [
                {
                    id: 'add-patient',
                    title: 'Add Patient',
                    type: 'item',
                    url: '/customer/customer-list'
                },
                {
                    id: 'view-patient',
                    title: 'View Patients',
                    type: 'item',
                    url: '/customer/order-list'
                },
                {
                    id: 'patient-feature-1',
                    title: 'Patient Feature1',
                    type: 'item',
                    url: '/customer/create-invoice'
                },
                {
                    id: 'patient-feature-2',
                    title: 'Patient Feature2',
                    type: 'item',
                    url: '/customer/create-invoice'
                },
                {
                    id: 'patient-feature-3',
                    title: 'Patient Feature3',
                    type: 'item',
                    url: '/customer/create-invoice'
                },
                {
                    id: 'patient-feature-4',
                    title: 'Patient Feature4',
                    type: 'item',
                    url: '/customer/create-invoice'
                }
            ]
        },
        {
            id: 'payments',
            title: 'Payments',
            type: 'collapse',
            icon: icons.IconCoinRupee,
            children: [
                {
                    id: 'add-payment',
                    title: 'Add Payment',
                    type: 'item',
                    url: '/customer/customer-list'
                },
                {
                    id: 'view-payments',
                    title: 'View All Payments',
                    type: 'item',
                    url: '/customer/order-list'
                },
                {
                    id: 'payment-feature-1',
                    title: 'Payment Feature1',
                    type: 'item',
                    url: '/customer/create-invoice'
                },
                {
                    id: 'payment-feature-2',
                    title: 'Payment Feature2',
                    type: 'item',
                    url: '/customer/create-invoice'
                },
                {
                    id: 'payment-feature-3',
                    title: 'Payment Feature3',
                    type: 'item',
                    url: '/customer/create-invoice'
                },
                {
                    id: 'payment-feature-4',
                    title: 'Payment Feature4',
                    type: 'item',
                    url: '/customer/create-invoice'
                }
            ]
        },
        {
            id: 'appointments',
            title: 'Appointments',
            type: 'collapse',
            icon: icons.IconCheckupList,
            children: [
                {
                    id: 'create-appointment',
                    title: 'Create Appointment',
                    type: 'item',
                    url: '/customer/customer-list'
                },
                {
                    id: 'view-appointments',
                    title: 'View All Appointments',
                    type: 'item',
                    url: '/customer/order-list'
                },
                {
                    id: 'appointment-feature-1',
                    title: 'Appointment Feature1',
                    type: 'item',
                    url: '/customer/create-invoice'
                },
                {
                    id: 'appointment-feature-2',
                    title: 'Appointment Feature2',
                    type: 'item',
                    url: '/customer/create-invoice'
                },
                {
                    id: 'appointment-feature-3',
                    title: 'Appointment Feature3',
                    type: 'item',
                    url: '/customer/create-invoice'
                },
                {
                    id: 'appointment-feature-4',
                    title: 'Appointment Feature4',
                    type: 'item',
                    url: '/customer/create-invoice'
                }
            ]
        },
        {
            id: 'pharmacy',
            title: 'Pharmacy',
            type: 'collapse',
            icon: icons.IconMedicineSyrup,
            children: [
                {
                    id: 'add-medicine',
                    title: 'Add Medicine',
                    type: 'item',
                    url: '/customer/customer-list'
                },
                {
                    id: 'view-medicine',
                    title: 'View All Medicines',
                    type: 'item',
                    url: '/customer/order-list'
                },
                {
                    id: 'pharmacy-feature-1',
                    title: 'Pharmacy Feature1',
                    type: 'item',
                    url: '/customer/create-invoice'
                },
                {
                    id: 'pharmacy-feature-2',
                    title: 'Pharmacy Feature2',
                    type: 'item',
                    url: '/customer/create-invoice'
                },
                {
                    id: 'pharmacy-feature-3',
                    title: 'Pharmacy Feature3',
                    type: 'item',
                    url: '/customer/create-invoice'
                },
                {
                    id: 'pharmacy-feature-4',
                    title: 'Pharmacy Feature4',
                    type: 'item',
                    url: '/customer/create-invoice'
                }
            ]
        },
        {
            id: 'chat',
            title: <FormattedMessage id="chat" />,
            type: 'item',
            icon: icons.IconMessages,
            url: '/app/chat'
        },
        {
            id: 'mail',
            title: <FormattedMessage id="mail" />,
            type: 'item',
            icon: icons.IconMail,
            url: '/app/mail'
        },
        {
            id: 'calendar',
            title: <FormattedMessage id="calendar" />,
            type: 'item',
            url: '/app/calendar',
            icon: icons.IconCalendar,
            breadcrumbs: false
        },
        {
            id: 'contact',
            title: <FormattedMessage id="contact" />,
            type: 'collapse',
            icon: icons.IconNfc,
            children: [
                {
                    id: 'c-card',
                    title: <FormattedMessage id="cards" />,
                    type: 'item',
                    url: '/app/contact/c-card',
                    breadcrumbs: false
                },
                {
                    id: 'c-list',
                    title: <FormattedMessage id="list" />,
                    type: 'item',
                    url: '/app/contact/c-list',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default application;
