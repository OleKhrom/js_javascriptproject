let coursesArray = [{
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html',
        'css',
        'js',
        'mysql',
        'mongodb',
        'react',
        'angular',
        'aws',
        'docker',
        'git',
        'node.js',
        'python',
        'java'],
}
];

for (let course of coursesArray) {
    const div = document.createElement('div');
    div.classList.add('full-stack');

    const title = document.createElement('h2');
    title.innerText = course.title;
    div.appendChild(title);

    const monthDuration = document.createElement('p');
    monthDuration.innerText = course.monthDuration;
    div.appendChild(monthDuration);

    const hourDuration = document.createElement('p');
    hourDuration.innerText = course.hourDuration;
    div.appendChild(hourDuration);


    const modulesList = document.createElement('ul');
    for (let modules of course.modules) {
        const li = document.createElement('li');
        li.innerText = modules;
        modulesList.appendChild(li);
    }

    div.appendChild(modulesList);


document.body.appendChild(div);

}