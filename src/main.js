

window.addEventListener('load',() => {
    let current = 'home-page';
    const tabs = document.querySelectorAll('#tabs a');
    const menu = document.querySelector('.hamburger');
    const links = document.querySelectorAll('nav.hamburger a');
    const toggle = document.querySelector('#dark-toggle a');
    const rows = document.querySelectorAll('tbody tr');

    const setAccent = (c) => {
    }


    const show = (id) => {
        const active = document.querySelectorAll('.active');
        const tab = document.getElementById('tab-' + id.replace('-page',''));
        active.forEach(a => a.classList.remove('active'));
        if(tab) {
            tab.classList.add('active');
        }
        document.getElementById(current).classList.add('hidden');
        document.getElementById(id).classList.remove('hidden');
        menu.classList.add('hidden');

        const tabs = document.getElementById('tabs');
        if (id == 'home-page') {
            tabs.classList.remove('tabs')
            tabs.classList.add('hidden')
        }
        else {
            tabs.classList.remove('hidden')
            tabs.classList.add('tabs')

        }

        current = id;
    }    

    tabs.forEach(tab => 
        tab.addEventListener('click',(e) =>
        show(e.target.id.replace('tab-','') + '-page')))
    
    links.forEach(link => 
        link.addEventListener('click',(e) => 
        show(e.target.id.replace('nav-','') + '-page')))


    toggle.addEventListener('click', (e) => {
        const root = document.querySelector(":root");
        let colorScheme = root.style.getPropertyValue('color-scheme');
        colorScheme = (colorScheme == 'dark' ? 'light' : 'dark');
        root.style.setProperty('color-scheme', colorScheme)
    })

    rows.forEach(row => {
        const root = document.querySelector(":root");
        row.addEventListener('click', (e) => {
            let color = e.currentTarget.id.replace('row-', '');
            //console.log(color);
            
            root.style.setProperty('--accent-color', color);
        })
    })

    document.getElementById('banner-link').addEventListener('click', (e) => show('home-page'));
    document.getElementById('hero-link').addEventListener('click', (e) => show('card-page'));

    

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