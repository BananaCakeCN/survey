const qs = ['How is the content quality? ', 'Which part of the contents needs to be improved? ', 'How is the navigation? ', 'How do you rate the homepage decoration? ', 'How useful are the information? ', 'Is the information easily to understand? ', 'What is the size of your screen resolution? ', 'Are the contents overlapping the window? ', 'How fast is Wix responding with this site? ', 'How was the mapping at Palmer, for the OpenStreetMap embed at the home page? ', 'What is the possibility of you recommending this site to others? ', 'How would you rate the course “Web Development 10”, why? ', 'How would you rate the site host organization “Wix”? ', 'How is the layout? ', 'Are the images useful? ', 'Would it be helpful if this site is under a shorter sub domain/URL? ', 'What is your favorite part about this site? ', 'Is the time table (role and responsibility) easy to read? ', 'Did you find any information you are not able to understand? ', 'Did you use any source from the raw material page? If yes, is the information useful? '];
for(var i = 0; i < qs.length; i++){
    const temp = document.createElement('div');
    temp.style.cssText = 'border-radius: 8px; border: 1px solid #222; min-width: 500px; margin: 20px 300px';
    temp.innerHTML = '<p style="margin-left: 16px;">' + (i + 1) + '. ' + qs[i] + '</p><textarea style="width: calc(100% - 20px); height: 200px; margin: 7px;"></textarea>';
    document.getElementById('content').appendChild(temp);
}
document.getElementById('content').innerHTML += '<div id="submit">Submit</div>';
var data = {};
document.getElementById('submit').onclick = function(){
    for(var i = 0; i < document.getElementsByTagName('textarea').length; i++){
        if(document.getElementsByTagName('textarea')[i].value == ''){
            document.getElementsByTagName('textarea')[i].focus();
            document.getElementsByTagName('textarea')[i].placeholder = 'Please enter';
            return;
        }
        data['q' + (i + 1)] = document.getElementsByTagName('textarea')[i].value;
    }
    emailjs.send("service_9335h5l", "template_hajf0ug", data);
    document.getElementById('content').remove();
    const end = document.createElement('div');
    end.style.marginLeft = '20px';
    end.innerHTML = '<h1>Thank you for filling out the survey.</h1><h3>You may exit this page.</h3>';
    document.body.appendChild(end);
}