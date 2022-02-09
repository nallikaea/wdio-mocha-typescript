export const mockGetResponse = (mockedData: object, statusCode: number, url: string) => {
    let mock = browser.mock(
        url,
        {
            method: 'get',
        },
    );

    mock.respond(
        mockedData,
        {statusCode: statusCode},
    );
}
