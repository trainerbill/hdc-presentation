var UserComponent = zoid.create({
    tag: 'user-component',
    url: 'http://localhost:3000/server/zoid/example.html',
    props: {
        email: {
            type: 'string',
            required: false
        },
        onLogin: {
            type: 'function',
            required: true
        }
    }
});