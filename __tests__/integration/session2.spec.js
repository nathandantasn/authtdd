
describe('Sum', () => {
    it('should sum two numbers', () => {
        const x = 4;
        const y = 5;

        const sum = x + y;

        console.log(sum)
        expect(sum).toBe(9)
    })

    it('should sum three numbers', () => {
        const x = 2;
        const y = 3;
        const z = 3;
        const sum = x + y + z;

        console.log(sum)
        expect(sum).toBe(8)
    })
})

