describe("Get Api User Test", () => {
    
    let accesToken = '662765fd37061ecee4a680cf726aa42e29be3d8460e8a9953f815ba128990dfd'

    it('get users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                'authorization' : "Bearer" + accesToken
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(10)
        })
    })

    
    it('get users by ID', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v1/users/2931833',
            headers: {
                'authorization' : "Bearer" + accesToken
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Dhananjay Pillai')
            expect(res.body.data.email).to.eq('dhananjay_pillai@bartell.test')
            expect(res.body.data.gender).to.eq('male')
            expect(res.body.data.status).to.eq('active')
        })
    })
})