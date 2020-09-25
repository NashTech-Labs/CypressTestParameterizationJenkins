describe('user manage API automation',()=>
{
    it('GET-list user',()=>{
        cy.request('GET','/users?page=2').then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data[0].first_name).equal('Michael')
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(6)
        })
    })

    it('POST-Create user',()=>{
        var user = {
            "name": "Bob",
            "job": "QA"
        }

        cy.request('POST','/users',user).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
           
        })
        cy.request('POST','/users',user).its('body').should('include',{name:'Vandana Yadav'})
    })


    it('Ùpdate user',()=>{
        var user1 = {
            "name": "Samantha",
            "job": "DevOps"
        }

        cy.request('PUT','/users/2',user1  ).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.name).equal(user1.name)
            expect(response.body.job).equal(user1.job)
        })
    })

    it('Delete user',()=>{
        var user1 = {
            "name": "Samantha",
            "job": "DevOps"
        }

        cy.request('DELETE','/users/2').then((response)=>{
            expect(response.status).equal(204)
           
        })
    })
})