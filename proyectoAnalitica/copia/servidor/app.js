const express=require('express');
const path= require('path');
const app=express();
// aca vamos a tratar de aplicar  ocultacion a un archivo htmlque probaremos

app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req, res)=>{
   res.send('mi primer servidor con express fuck you alalitica  ');
});

app.get('/api', (req, res)=>{
   res.sendFile(path.join(__dirname, 'public', 'index.html'));

});


const puerto=3000;
   app.listen(puerto, ()=>{
      console.log(`el servidor esta escuchando en el puerto ${puerto} analitik`);
    });

/* modulos identificados:
-inicio sesion
-inicio sesion admi
-modulo admi
-modulo crear  objetos
-modulo buscar objetos
-area de usuario( lider de ficha, instru revision y creacion)
*/

// imlplementar en las URL identificadores unicos como /ed1362bf-1d97-4788-9436-eb7ce719a591 para proteger y no ser tan obvios 
/* encriptado de url usuario y admi
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const app = express();

// Configuración de Express
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'secreto', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Configuración de la estrategia de autenticación local
passport.use(new LocalStrategy(
  (username, password, done) => {
    // Aquí deberías validar las credenciales en tu base de datos u otro sistema de almacenamiento
    if (username === 'usuario' && password === 'contraseña') {
      return done(null, { username: username });
    } else {
      return done(null, false, { message: 'Nombre de usuario o contraseña incorrectos.' });
    }
  }
));

// Serialización del usuario para almacenarlo en la sesión
passport.serializeUser((user, done) => {
  done(null, user.username);
});

// Deserialización del usuario para recuperarlo de la sesión
passport.deserializeUser((username, done) => {
  // Aquí podrías recuperar el usuario de la base de datos u otro sistema de almacenamiento
  done(null, { username: username });
});

// Rutas de autenticación
app.post('/login', passport.authenticate('local', {
  successRedirect: '/success',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/login', (req, res) => {
  res.send('Por favor, inicia sesión:');
});

app.get('/success', (req, res) => {
  res.send('¡Has iniciado sesión con éxito!');
});

// Middleware para proteger rutas
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

app.get('/protegido', ensureAuthenticated, (req, res) => {
  res.send('¡Esta es una página protegida!');
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

*/









// ejemplo de como trabajar con html
//const express = require('express');
//const app = express();

//app.get('/', (req, res) => {
//  res.sendFile(__dirname + '/index.html');
//});

//app.listen(3000, () => {
 // console.log('Servidor corriendo en el puerto 3000');
//});
// ojo!!!!
 // asi se trabajaria mas facil los archivos estaticos de la pagina
 /*
 // Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));
 //Modificar tu ruta principal para servir tu página HTML: En lugar de leer el archivo HTML manualmente con fs.readFile, simplemente puedes enviar el archivo HTML como respuesta utilizando res.sendFile.
 app.get('/', (req, res) => {
   // Envía el archivo HTML como respuesta
   res.sendFile(path.join(__dirname, 'public', 'indexprueba.html'));
});
*/

