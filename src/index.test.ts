import * as fs from 'fs';
import { getByTestId } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { C } from './index';

describe('Unit Tests', (): void => {
    describe('class C', (): void => {
        it('should have x as 10', (): void => {
            expect(new C().getX()).toBe(10);
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

        const button = getByTestId(root, 'search-button');
        expect(button).not.toBeNull();
        expect(button.hasAttribute('onclick')).not.toBeNull();
    });
});
