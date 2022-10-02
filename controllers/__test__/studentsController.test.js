const app = require('../../app.js');
const supertest = require('supertest')
//supertest is built on top of jest. Jest doesnt know about routes, start an app, send request, etc.

describe('returns json data for all students', () => {
    it('returns an object with all studnets', async () => {
        await supertest(app).get("/students").expect(200).then((response) => {
                expect(response.body.students).toBeInstanceOf(Array);
                expect(response.body.students.length).toBe(25);
            })
    })

    it('returns an object with # of students equal or less than a limit', async ()=>{
        await supertest(app).get("/students?limit=10")
        .expect(200)
        .then(response =>{
            expect(response.body.students).toBeInstanceOf(Array);
            expect(response.body.students.length).toBe(10);
        })

        await supertest(app).get("/students?limit=35")
        .expect(200)
        .then(response =>{
            expect(response.body.students).toBeInstanceOf(Array);
            expect(response.body.students.length).toBe(25);
        })
    })

    it('returns an object with # of students using min & max', async ()=>{
        await supertest(app).get("/students?min=4&max=20&limit=4")
        .expect(200)
        .then(response =>{
            expect(response.body.students).toBeInstanceOf(Array);
            expect(response.body.students.length).toBe(4);
            expect(response.body.students[0].id).toBe("4");
            expect(response.body.students[response.body.students.length-1].id).toBe("7");
        })
    })
})