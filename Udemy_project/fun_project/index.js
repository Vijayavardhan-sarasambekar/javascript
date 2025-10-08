// getting id's of input tags

// let name = document.getElementById('name');
// let email = document.getElementById('email');
// let age = document.getElementById('age');
// let course = document.getElementById('course');
// let skills = document.getElementById('skills');


document.addEventListener('DOMContentLoaded',()=>{

let form = document.getElementById('inquiry-form');
let button = document.querySelector('button');

    form.addEventListener('submit',(e)=>{
        const jsonForm = document.querySelector('.json-form');
        // preventing default values
        e.preventDefault();

        // get the values from feilds
        let name = document.getElementById('name').value.trim();
        const emaildata = document.getElementById('email').value.trim();
        const age = document.getElementById('age').value.trim();
        const course = document.getElementById('course').value.trim();
        const skills = document.getElementById('skills').value.trim();
        // validating

        if(!name || !email || !age || !course || !skills){
            alert('fields are required');
        }
        
        // console.log('---form data received----');
        // console.log(`name:${name1}`);
        // console.log(`age:${age}`);


        let Obj = {
            name:name,
            email:emaildata,
            age:age,
            course:course,
            skills:skills
        }

        if(Obj){
            document.querySelector('.json-form').textContent = JSON.stringify(Obj,null,3);
            jsonForm.style.display = 'block';

        }

        console.log(Obj);


        // form.reset();
    });
});
