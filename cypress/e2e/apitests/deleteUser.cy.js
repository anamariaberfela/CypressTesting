describe("Delete Users", () => {

    let accesToken = 'c2b334eef6800c857994ef54982fd86da9551c1d93742c500fbb249699e1a47f';

    it('create user', () => {
        cy.request({
            method: 'POST', 
            url: 'https://gorest.co.in/public/v1/users', 
            headers: {
                'authorization' : "Bearer " + accesToken
            },
            body: {
                    "name": "Test Automation Delete",
                    "gender" : "female",
                    "email" : "testdeleteuser@gmail.com",
                    "status": "active",
            }

        }).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('name',"Test Automation Delete")
            expect(res.body.data).has.property('email', "testdeleteuser@gmail.com")
            expect(res.body.data).has.property('gender', "female")
            expect(res.body.data).has.property('status', "active")
       
        }).then((res) => {
            const userId = res.body.data.id;
            cy.log("user ID is: " + userId)
                //delete request
            cy.request({
                method: 'DELETE',
                url: 'https://gorest.co.in/public/v1/users/' + userId,
                headers: {
                    'authorization' : "Bearer " + accesToken
                },
            }).then((res) => {
                expect(res.status).to.eq(204)
            })
        })
    })
})