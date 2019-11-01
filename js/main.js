let skillsArray = [];
console.log('running');

// AAU, I want to be able to type in a skill and have it added to my list of skills by clicking a button.
$('.addSkill') 
    .on(
        'click',
        function(event) {    
        console.log('Add Skill clicked');
        // console.dir(event);
        let inputValue = event.target.parentElement.children[2].value
        skillsArray.push(inputValue);
        console.log(skillsArray);
        let template = `
        <tr>
            <td>SKILL:</td>
            <td>${inputValue}</td>
            <td><button class="remove">REMOVE</button></td>
        </tr>
        `
        {$('#inputs tbody').append(template)}
        console.log(inputValue + ' appended!')
        }
    );
$('#inputs tbody')
    .on(
        'click',
        'button',
        function() {
            $(this).closest('tr')
            .fadeOut(1000, function() {
                $(this).remove();
            }) //remove skill
        });