//bài 1
fetch('http://api.openweathermap.org/data/2.5/group?id=1580578,1581129,1581297,1581188,1587923&units=metric&appid=91b7466cc755db1a94caf6d86a9c788a')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Lỗi, mã lỗi ' + response.status);
        return;
      }
      // parse response data
      var data_city = [];
      response.json().then(data => {
          
        data['list'].forEach(obj => {
           
            let a = {
                'cityId': obj['id'],
                'cityName': obj['name'],
                'weatherMain': obj['weather'][0]['main'],
                'weatherDescription': obj['weather'][0]['description'],
                'weatherIcon': 'http://openweathermap.org/img/wn/'+ obj['weather'][0]['icon'] +'@2x.png',
                'mainTemp': obj['main']['temp'],
                'mainHumidity': obj['main']['humidity']
            }
            data_city.push(a);
        });

      });
      
      var data = {
          'data': data_city,
          'message': 'Current weather information of cities',
          'statusCode': 200
      }

      console.log('Bai 1: ');
      console.log(data);

      return data;
    }
  )
  .catch(err => {
    console.log('Error :-S', err)
  });

  //bài 2
  const btnRegister_click = () => {
    console.log('add');
    const user = {
        name: document.getElementById("name").value,
        pass: document.getElementById("pass").value
    } 
    if(checkEmail(user.name)){
        console.log(user.name);
        addNew(user);
    }
    
}
const btnLogin_click = () => {
    const user = {
        name: document.getElementById("name").value,
        pass: document.getElementById("pass").value
    } 

    if(checkEmail(user) === true){
        console.log('login');
    }
}