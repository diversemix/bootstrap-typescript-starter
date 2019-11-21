import * as fs from 'fs';
import { getByDisplayValue } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { IItem, renderItem } from './index';

describe('Unit Tests', (): void => {
    describe('Item', (): void => {
        it('should have x as 10', (): void => {
            const testItem: IItem = {
                name: 'Bob',
                username: 'widget',
                email: 'email',
                company: { name: 'company', catchPhrase: 'cp' },
            };
            const text = renderItem(testItem);
            expect(text).toContain(testItem.name);
            expect(text).toContain(testItem.username);
            expect(text).toContain(testItem.email);
            expect(text).toContain(testItem.company.name);
            expect(text).toContain(testItem.company.catchPhrase);
        });
    });
});

describe('HTML Unit Tests', (): void => {
    let root: HTMLElement;

    beforeAll((): void => {
        const html = fs.readFileSync('src/index.html', 'utf-8');
        const d = document.implementation.createHTMLDocument();
        root = d.getElementsByTagName('html')[0];
        root.innerHTML = html;
    });

    it('should render', (): void => {
        expect(root).not.toBeNull();

        const button = getByDisplayValue(root, 'Search');
        expect(button).not.toBeNull();
        expect(button.hasAttribute('onclick')).not.toBeNull();
        expect(button.classList).toContain('btn');
    });
});
