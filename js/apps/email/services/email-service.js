import { storageService } from '../../../services/async-storage-service.js'
import { utilService } from '../../../services/util-service.js';
const gEmails = [
    {
        subject: 'heyo?',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'rotemcarmon@coding.academy',
        userName: 'rotemcarmon',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15),
        isSent: false
    },
    {
        subject: 'Did Rotem cut his hair?',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'stavpartush@coding.academy',
        userName: 'stavpartush',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15),
        isSent: false
    },
    {
        subject: 'Coding Academy final sprint',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'hadaspriel@coding.academy',
        userName: 'hadaspriel',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15),
        isSent: false
    },
    {
        subject: 'This is hard AF',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'stavyaarbar@coding.academy',
        userName: 'stavyaarbar',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15),
        isSent: false
    },
    {
        subject: 'Nice to wheat you',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'edenaran@coding.academy',
        userName: 'edenaran',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15),
        isSent: false
    },
    {
        subject: 'WAZZUUUPPPPPP',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'shahardorfzaun@coding.academy',
        userName: 'shahardorfzaun',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15),
        isSent: false
    },
    {
        subject: 'PUKIMUKISHUKI',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'roilevy@coding.academy',
        userName: 'roilevy',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15),
        isSent: false
    },
    {
        subject: 'Shalom',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'elhananavihail@coding.academy',
        userName: 'elhananavihail',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15),
        isSent: false
    },
    {
        subject: 'Fire Stav Yaar-Bar!!!',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'guyzohar@coding.academy',
        userName: 'guyzohar',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15),
        isSent: false
    },
    {
        subject: 'Assaf Margalit, who are you?',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'yaronbiton@coding.academy',
        userName: 'yaronbiton',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15),
        isSent: false
    },
    {
        subject: 'Bittons jokes',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: _getDate(),
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15),
        isSent: false
    },
];
const EMAIL_KEY = 'emails';
const SENT_KEY = 'sent-emails';

export const emailService = {
    query,
    getById,
    removeEmail,
    removeOutboxEmail,
    toggleRead,
    sendEmail,
    queryOutbox,

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

function queryOutbox() {
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
    return storageService.remove(EMAIL_KEY, id)
};

function removeOutboxEmail(id) {
    return storageService.remove(SENT_KEY, id)
}

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
        isSent: true

    }
    const newSentEmail = {
        subject,
        body,
        isread: false,
        sentAt: _getDate(),
        from: 'omerandyaniv@coding.academy',
        to: 'rotemcarmon@yaron.biton',
        isSent: true

    }
    newEmail.userName = newEmail.from.substr(0, newEmail.from.indexOf('@'));
    newSentEmail.userName = newEmail.from.substr(0, newEmail.from.indexOf('@'));
    storageService.post(EMAIL_KEY, newEmail);
    storageService.post(SENT_KEY, newSentEmail);

};

function _getDate() {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return day + "/" + month + "/" + year;
};