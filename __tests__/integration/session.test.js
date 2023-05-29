const request = require('supertest')

const truncate = require('../utils/truncate')

const app = require('../../src/app')

const { User } = require('../../src/app/models')

/*describe('Authentication', () => {
    it('should sum two numbers', async () => {
        const user = await User.create({name: 'Nathan', email: 'nathandantas@hotmail.com', password: '18827173'})

        console.log(user)
        expect(user.email).toBe('nathandantas@hotmail.com');
    })
})
*/

describe('Authentication', () => {
    beforeEach(async()=> {
        await truncate();
    })
    it('should sum two numbers', async () => {
        const user = await User.create({
            name: 'Nathan', 
            email: 'nathandantas@hotmail.com', 
            password_hash: '18827173'})

            const response = await request(app)
                .post('/sessions')
                .send({
                    email: user.email,
                    password: '18827173'
                })

        console.log(user)
        expect(response.status).toBe(200);
    })
})