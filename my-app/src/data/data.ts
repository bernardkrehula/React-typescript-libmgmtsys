
const data = {
    defaultLoginInfo: {
        email: 'testadmin@library.com',
        password: 'testpassword'
    },
    books: [
        {
            id: '1001',
            title: 'In Search of Lost Time',
            author: 'Marcel Proust	',
            status: 'Available'
        },
        {
            id: '1002',
            title: 'Ulysses',
            author: 'James Joyce',
            status: 'Issued'
        },
        {
            id: '1003',
            title: 'Don Quixote',
            author: 'Miguel de Cervantes',
            status: 'Available'
        },
        {
            id: '1004',
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            status: 'Issued'
        },
        {
            id: '1005',
            title: 'War and Peace',
            author: 'Leo Tolstoy',
            status: 'Available'
        },
        {
            id: '1006',
            title: 'Hamlet',
            author: 'William Shakespeare',
            status: 'Available'
        },
        {
            id: '1007',
            title: 'Crime and Punishment',
            author: 'Fyodor Dostoyevsky',
            status: 'Issued'
        },
        {
            id: '1008',
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            status: 'Available'
        },
        {
            id: '1009',
            title: 'The Iliad',
            author: 'Homer',
            status: 'Available'
        },
        {
            id: '1010',
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            status: 'Available'
        }
    ],
    members: [
        {
            id: '101',
            name: 'John Doe',
            phone: '132-465-8791',
            email: 'john@doe.com',
            fine: '0',
        },
        {
            id: '102',
            name: 'Jane Doe',
            phone: '789-456-1123',
            email: 'janedoe@mail.com',
            fine: '100',
        },
        {
            id: '103',
            name: 'Anamika',
            phone: '456-132-4892',
            email: 'anamika@gmail.com',
            fine: '40',
        },
        {
            id: '104',
            name: 'Joe Shmoe',
            phone: '123-465-7890',
            email: 'joe@sc.co',
            fine: '85',
        }
    ],
    defaultIconElements: {
        dashboard: {
            name: 'Dashboard',
            svg: '<svg className="dashboard-icon-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DashboardIcon"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg>',
            link: '/Dashboard'
        },
        books: {
            name: 'Books',
            svg: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AutoStoriesIcon"><path d="m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5v-1.1z"></path></svg>',
            link: '/Books'
        },
        members: {
            name: 'Members',
            svg: '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GroupsIcon"><path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path></svg>',
            link: '/Members'
        }
    }
}

export default data;