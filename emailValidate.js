const { appendFile } = require('fs');
const zod = require('zod');

function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().mon(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

appendFile.post('/login', function(req,res){
    const response = validateInput(req.body)
    if(!response.success) {
        res.json({
            msg:"Your inputs are invalid"
        })
        return;
    }
})