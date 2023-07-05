describe("Post Users", () => {

    let accesToken = 'c2b334eef6800c857994ef54982fd86da9551c1d93742c500fbb249699e1a47f';

    it('create user', () => {

        cy.request({
            method: 'POST', 
            url: 'https://gorest.co.in/public/v1/users', 
            headers: {
                'authorization' : "Bearer " + accesToken
            },
            body: {
                    "name": "Test Automation 1",
                    "gender" : "female",
                    "email" : "testput11@gmail.com",
                    "status": "active",
            }

        }).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('name',"Test Automation 1")
            expect(res.body.data).has.property('email', "testput11@gmail.com")
            expect(res.body.data).has.property('gender', "female")
            expect(res.body.data).has.property('status', "active")
       
        }).then((res) => {
            //update user
            const userId = res.body.data.id;
            cy.log("user ID is: " + userId)

            cy.request({
                method: 'PUT',
                url: 'https://gorest.co.in/public/v1/users/' + userId,
                headers: {
                    'authorization' : "Bearer " + accesToken
                },
                body: {
                    "name": "Test Automation PUT2 EXAMPLE",
                    "gender" : "female",
                    "email" : "teStPUTupdated@gmail.com",
                    "status": "inactive",
            }
            }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body.data).has.property('id', userId)
                expect(res.body.data).has.property('name', "Test Automation PUT2 EXAMPLE")
                expect(res.body.data).has.property('email', "teStPUTupdated@gmail.com")
                expect(res.body.data).has.property('gender', "female")
                expect(res.body.data).has.property('status',  "inactive")
            })
        })
    })
})