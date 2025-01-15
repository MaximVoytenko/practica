async function fetchData(url: string): Promise<any> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка при загрузке данных: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        const err = error as Error;
        console.error('Ошибка при запросе к API:', err.message);
        return null;
    }
}

fetchData('https://api.restful-api.dev/objects')
    .then(data => {
        if (data) {
            console.log('Данные успешно получены:', data);
        } else {
            console.log('Не удалось получить данные');
        }
    })
    .catch(error => {
        console.error('Что-то пошло не так:', error);
    });
