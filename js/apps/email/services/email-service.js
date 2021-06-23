import {storageService} from '../../../services/async-storage-service.js'
import { utilService } from '../../../services/util-service.js';
const gEmails = [
    {
        subject: 'heyo?',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: new Date,
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'Are you ready?',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: new Date,
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'Coding Academy final sprint',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: new Date,
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'This is hard AF',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: new Date,
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'Nice to wheat you',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: new Date,
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'WAZZUUUPPPPPP',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: new Date,
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'PUKIMUKISHUKI',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: new Date,
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'Shalom',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: new Date,
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'Fire Stav Yaar-Bar!!!',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: new Date,
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'Assaf Margalit, who are you?',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: new Date,
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
    {
        subject: 'Bittons jokes',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis esse eum sed! Deleniti sint, inventore eligendi, officiis error incidunt omnis ducimus ratione sequi, assumenda fuga maiores. Reiciendis iure error fugit voluptates libero ut labore commodi veniam. Voluptatibus a temporibus quam sed numquam pariatur dolores odio tempora quod deleniti, velit doloribus.',
        isRead: false,
        sentAt: new Date,
        from: 'omerandyaniv@coding.academy',
        userName: 'omerandyaniv',
        to: 'rotemcarmon@yaron.biton',
        id: utilService.makeId(15)
    },
];
const EMAIL_KEY = 'emails';

export const emailService = {
    query,
    getById,
    removeEmail,
    markAsRead
};

function query() {
    return storageService.query(EMAIL_KEY)
    .then((emails) => {
        if (!emails || !emails.length) {
            return storageService.postMany(EMAIL_KEY, gEmails);
        }
        return emails;
    });
}

function getById(id) {
    return storageService.get(EMAIL_KEY, id)
}

function removeEmail(id) {
    storageService.remove(EMAIL_KEY, id);
}

function markAsRead(id) {
    storageService.markMailAsRead(EMAIL_KEY, id)
}