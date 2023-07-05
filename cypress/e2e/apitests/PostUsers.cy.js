const dataJson= require('../../fixtures/createUser')

describe("Post Users", () => {

    let accesToken = 'c2b334eef6800c857994ef54982fd86da9551c1d93742c500fbb249699e1a47f';
    let randomText = "";
    let testEmail = "";

    it('create user', () => {

        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWAAAAaaaaaaaaaaaaaaaaaa";
        for(var i=0; i<=10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@gmail.com';

        //cy.fixture('createUser').then((payload) =>{
            
        cy.request({
            method: 'POST', 
            url: 'https://gorest.co.in/public/v1/users', 
            headers: {
                'authorization' : "Bearer " + accesToken
            },
            body: {
                "name": dataJson.name, // and here I need to use 'payload.name', If I want to use the last method
                "gender" : dataJson.gender,
                "email" : testEmail,
                "status": dataJson.status,
            }
        }).then((res) => {
            //cy.log(JSON.stringify(res)) //output console
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('name', dataJson.name)
            expect(res.body.data).has.property('email', testEmail)
            expect(res.body.data).has.property('gender', dataJson.gender)
            expect(res.body.data).has.property('status', dataJson.status)
       
        }).then((res) => {
            const userId = res.body.data.id;
            cy.log("user ID is: " + userId)

            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v1/users/' + userId,
                headers: {
                    'authorization' : "Bearer " + accesToken
                }
            }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body.data).has.property('id', userId)
                expect(res.body.data).has.property('name', dataJson.name)
                expect(res.body.data).has.property('email', testEmail)
                expect(res.body.data).has.property('gender', dataJson.gender)
                expect(res.body.data).has.property('status', dataJson.status)
            })
        })
    })

//})  //end bracket for payload 

})