module.exports = app => {
    app.get('/', (req, res) => {
         res.send('Olá mundo')
    });
}