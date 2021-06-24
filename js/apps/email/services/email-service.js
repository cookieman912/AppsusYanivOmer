import { storageService } from '../../../services/async-storage-service.js'
import { utilService } from '../../../services/util-service.js';
const gEmails = [
    {
        subject: 'heyo?',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'Did Rotem cut his hair?',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'Coding Academy final sprint',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'This is hard AF',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'Nice to wheat you',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'WAZZUUUPPPPPP',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'PUKIMUKISHUKI',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'Shalom',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'Fire Stav Yaar-Bar!!!',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'Assaf Margalit, who are you?',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'Bittons jokes',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
];
const EMAIL_KEY = 'emails';
const SENT_KEY = 'sent-emails';

export const emailService = {
    query,
    getById,
    removeEmail,
    toggleRead,
    sendEmail,
    getOutbox
};

function query() {
    return storageService.query(EMAIL_KEY)
        .then((emails) => {
            if (!emails || !emails.length) {
                return storageService.postMany(EMAIL_KEY, gEmails);
            }
            return emails;
        });
};

function getOutbox() {
    return storageService.query(SENT_KEY)
        .then((emails) => {
            if (!emails || !emails.length) return
            return emails;
        });
}



function getById(id) {
    return storageService.get(EMAIL_KEY, id)
};

function removeEmail(id) {
    storageService.remove(SENT_KEY, id)
    return storageService.remove(EMAIL_KEY, id)
};

function toggleRead(id) {
    return storageService.toggleMailRead(EMAIL_KEY, id)
}

function sendEmail(subject, body) {
    const newEmail = {
        subject,
        body,
        isread: false,
        sentAt: _getDate(),
        from: 'omerandyaniv@coding.academy',
        to: 'rotemcarmon@yaron.biton',

    }
    newEmail.userName = newEmail.from.substr(0, newEmail.from.indexOf('@'));
    storageService.post(EMAIL_KEY, newEmail);
    storageService.post(SENT_KEY, newEmail);

};

function _getDate() {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return day + "/" + month + "/" + year;
};