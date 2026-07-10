window.addEventListener('load',() => {
    let current = 'home-page';
    const tabs = document.querySelectorAll('nav.tabs');
    const menu = document.querySelector('.hamburger');

    tabs.forEach(tab => {
        tab.addEventListener('click',(e) => {
            const id = e.target.id.replace('tab-','') + '-page';
            const active = document.querySelectorAll('.active');
            active.forEach(a => a.classList.remove('active'))
            e.target.classList.add('active');
            document.getElementById(current).classList.add('hidden');
            document.getElementById(id).classList.remove('hidden');
            current = id;
        })
    })
    
    const links = document.querySelectorAll('nav.hamburger a');
    links.forEach(link => {
        link.addEventListener('click',(e) => {
            const id = e.target.id.replace('nav-','') + '-page';
            const active = document.querySelectorAll('.active');
            active.forEach(a => a.classList.remove('active'));

            document.getElementById('tab-' + id.replace('-page','')).classList.add('active');

            document.getElementById(current).classList.add('hidden');
            document.getElementById(id).classList.remove('hidden');
            menu.classList.add('hidden');
            current = id;
        })     
    })

    const toggle = document.querySelector('#dark-toggle a');
    toggle.addEventListener('click', (e) => {
        const root = document.querySelector(":root");
        let colorScheme = root.style.getPropertyValue('color-scheme');
        colorScheme = (colorScheme == 'dark' ? 'light' : 'dark');
        root.style.setProperty('color-scheme', colorScheme)
    })

    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const result = document.getElementById('result');
        const submit = document.getElementById('submit')

        if (document.getElementById('text-input').value == '') {
            result.classList.add('error');
            result.innerText = 'Text is required.';
            return;
        }

        result.innerText = '';
        result.classList.add('loading');
        result.classList.remove('error');
        submit.disabled = true;


        setTimeout(() => {
            submit.disabled = false;
            result.classList.remove('loading');
            result.classList.add('success');
            result.innerText = 'Form submitted successfully.';
        
        }, 6000);
    })

    document.getElementById('open-modal').addEventListener('click', (e) => {
        const modal = document.getElementById('modal');
        modal.classList.remove('hidden');
    })

    document.querySelector('.x').addEventListener('click', (e) => {
        const modal = document.getElementById('modal');
        modal.classList.add('hidden');
    })

    document.getElementById('hamburger-toggle').addEventListener('click', (e) => {  
        let open = !menu.classList.contains('hidden');
        if (open) {
            menu.classList.add('hidden')
        }
        else {
            menu.classList.remove('hidden')
        }
    })

})