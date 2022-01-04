import app from './app';
import routers from './routers/index.router';


const Port = process.env.PORT || 3000;
app.use(routers);

app.listen(Port, () => {
  console.log('Server is running on port ' + Port);
});