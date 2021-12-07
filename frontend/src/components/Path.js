const hostname = 'quest-task.herokuapp.com';

function buildPath(route) {
    if (process.env.NODE_ENV === "production") {
        return `https://${hostname}/${route}`;
    }   

    return `http://localhost:19006/${route}`;
}

export default {
    buildPath: buildPath
}