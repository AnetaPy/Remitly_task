let statement = {
    Sid: 'Player1',
    Effect: 'Allow',
    Action: 'No action',
    Resource: '*',
};

test('Check if statement is defined',  () => {
    expect(statement).toBeDefined();
})
test('Check if Resource field has a value', () => {
    expect(statement.Resource).not.toBeNull();
});
test('Check if Resource field has a single asterisk', () => {
    expect(statement.Resource.split("*").length - 1).toEqual(1);
});
test('Check if Resource field returns false - it contains a single star', () => {
    expect(statement.Resource.split("*").length - 1 !== 1).toBeFalsy();
});



