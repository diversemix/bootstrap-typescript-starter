import axios from 'axios';

interface IItem {
    name: string;
    username: string;
    email: string;
    company: {
        name: string;
        catchPhrase: string;
    };
}

export const getItems = (): Promise<IItem[]> => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    return axios.get(url).then(result => result.data);
};

export const renderItem = (item: IItem): string => {
    const itemTemplate = `
    <a data-toggle="list" href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${item.name}</h5>
      <small>${item.username}</small>
    </div>
    <p class="mb-1">${item.company.name} | ${item.company.catchPhrase}</p>
    <small>${item.email}</small>
    </a>`;

    return itemTemplate;
};
