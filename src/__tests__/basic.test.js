import Team from "../js/app";

test('add object once', () => {
    const characters = new Team();
    characters.add('H');
    const result = new Set('H');
    expect(characters.members).toEqual(result);
});

test('add object twice', () => {
    const players = new Team();
    players.add('H');
    expect(() => {
        players.add('H');
    }).toThrow(`Персонаж уже добавлен в команду`);
});

test('add all', () => {
    const characters = new Team();
    characters.addAll('H', 'E');
    const correct = new Set(['H', 'E']);
    expect(characters.members).toEqual(correct);
});

test('correct array', () => {
    const characters = new Team();
    characters.addAll('H', 'E');
    const result = characters.toArray();
    const correct = ['H', 'E'];
    expect(result).toEqual(correct);
});
